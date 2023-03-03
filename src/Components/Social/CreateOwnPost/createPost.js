import React, { useState } from "react";

// const CreatePost = () => {
//   const [content, setContent] = useState("");
//   const [pictures, setPictures] = useState([]);

// const Token = localStorage.getItem("auth-token");

//   const createPost = async (path, content) => {
//     //GET: lists all the posts of all users in chronological order, with a pagination of 25 posts by default. To get the other posts, you should use limit and offset query params as following: /api/social/posts/?limit=<int>&offset=<int>

//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${Token}`);

//     var formdata = new FormData();
//     formdata.append("images",  path);
//     formdata.append("content", content);

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: formdata,
//       redirect: 'follow'
//     };

//     fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }
  
//   f




//     const handleContentChange = (e) => {
//       setContent(e.target.value);
//     };

//     const handlePictureChange = (e) => {
//       const files = e.target.files;
    
//       const newPictures = [];

//       for (let i = 0; i < files.length; i++) {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(files[i]);
      
//         fileReader.onload = (event) => {
//           newPictures.push(event.target.result);
//           console.log(event.target.result)
//           setPictures([...newPictures]);
//         };
//       }
//     };
  
    

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       uploadImage(pictures[0])
//       // console.log(content, pictures[0]);
//       // createPost(content, pictures[0])
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             cols="40"
//             rows="5"
//             name="content"
//             value={content}
//             onChange={handleContentChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="pictures">Pictures:</label>
//           <input
//             type="file"
//             id="pictures"
//             name="pictures"
//             accept="image/*"
//             multiple
//             onChange={handlePictureChange}
//           />
//           {pictures.map((picture, index) => (
//             <img
//               key={index}
//               src={picture}
//               alt={`Picture ${index}`}
//               style={{ maxWidth: "200px" }}
//             />
//           ))}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
  

// };


function CreatePost() {

  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const Token = localStorage.getItem("auth-token");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const fileList = Array.from(event.target.files);
    setImages(fileList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    const formData = new FormData();
    formData.append("content", content);
    images.forEach((image) => {
      formData.append("images[]", image);
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
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Content:
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <br />
      <label>
        Images:
        <input type="file" multiple onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
  );
}


export default CreatePost;
