import React, { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePictureChange = (e) => {
    const files = e.target.files;
    
    const newPictures = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);
      
      fileReader.onload = (event) => {
        newPictures.push(event.target.result);
        setPictures([...newPictures]);
      };
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ content, pictures });
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
