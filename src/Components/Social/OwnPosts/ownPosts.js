import React, { useEffect } from "react";
import { GridDiv, MainContainer } from "./ownPosts.style";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import PostRender from "../PostRender/postRender";

const OwnPosts = () => {
  const [ownPosts, setOwnPosts] = useState([]);
  const Token = localStorage.getItem("auth-token");

  

  const GetMyPosts = async (offset) => {
    //GET: lists all the posts of all users in chronological order, with a pagination of 25 posts by default. To get the other posts, you should use limit and offset query params as following: /api/social/posts/?limit=<int>&offset=<int>

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      "https://motion.propulsion-home.ch/backend/api/social/posts/me/?limit=10&offset=" +
        offset,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setOwnPosts(result.results))
      .catch((error) => console.log("error", error));
  };




  useEffect(() => {
    GetMyPosts(0);
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
