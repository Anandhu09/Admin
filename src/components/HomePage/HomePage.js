import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
// import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";
import axios from "axios";
import "./HomePage.css";
//This HomePage represents the landing page of the application

function HomePage() {
  let content = "ADMIN UI";
  const [userList, setUserList] = useState([]);

  async function ApiCall() {
    try {
      let response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setUserList(response.data);
      //   console.log(userList, "kahgfhkdagfk");
    } catch (error) {}
  }

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <>
      <Header content={content} />
      <input type="text" placeholder="Search by name" />
      <Table userList={userList} />
    </>
  );
}

export default HomePage;
