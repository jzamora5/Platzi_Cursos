import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

// const API = "http://localhost:3000/initalState";

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  // return initialState.length === 0 ? (
  //   <h1>Loading...</h1>
  // ) :

  // Not needed because the data is on the first level of the app, not here

  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default Home;
export default connect(mapStateToProps, null)(Home);
