import React, { useState } from "react";

const CreatePost = (props) => {
  const [content, setContent] = useState(props.input);
  const [pictures, setPictures] = useState([]);
  const [images, setImages] = useState([]);

  const Token = localStorage.getItem("auth-token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    const formData = new FormData();
    formData.append("content", content);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(
        "https://motion.propulsion-home.ch/backend/api/social/posts/",
        {
          method: "POST",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
        }
      );

      console.log("File upload response:", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    document.forms[0].submit();
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePictureChange = (e) => {
    const files = e.target.files;
    const fileList = Array.from(e.target.files);
    setImages(fileList);

    const newPictures = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);

      fileReader.onload = (event) => {
        newPictures.push(event.target.result);
        console.log(event.target.result);
        setPictures([...newPictures]);
      };
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          cols="40"
          rows="5"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div>
        <label htmlFor="pictures">Pictures:</label>
        <input
          type="file"
          id="pictures"
          name="pictures"
          accept="image/*"
          multiple
          onChange={handlePictureChange}
        />
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Picture ${index}`}
            style={{ maxWidth: "200px" }}
          />
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
