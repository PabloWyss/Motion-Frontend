import React, { useEffect } from "react";
import { GridDiv, MainContainer } from "./ownPosts.style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import PostRender from "../PostRender/postRender";

const OwnPosts = () => {
  const [ownPosts, setOwnPosts] = useState([]);
  const Token = localStorage.getItem("auth-token");

  const GetPost_UserId = async (UserId, offset) => {
    //GET: lists all the posts of a specific user in chronological order
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };


    await fetch(
      "https://motion.propulsion-home.ch/backend/api/social/posts/user/" +
        UserId +
        "/?limit=25&offset=" +
        offset,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setOwnPosts(result.results))
      .catch((error) => console.log("error", error));
    
  };

  useEffect(() => {
    GetPost_UserId(2230, 0);
  }, []);


  return (
    <MainContainer>
      <GridDiv>
        {ownPosts.map((post) => {
          return <PostRender key={uuid()} ownPosts={post} />;
        })}
      </GridDiv>
    </MainContainer>
  );
};

export default OwnPosts;
