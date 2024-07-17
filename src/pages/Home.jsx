import React from "react";
import Banner from "../components/core/Home/Banner";
import PopularList from "../components/core/Home/PopularList";
import Search from "../components/core/Home/Search";

const Home = () => {
  return (
    <>
      <Banner />
      <Search/>
      <PopularList />
    </>
  );
};

export default Home;
