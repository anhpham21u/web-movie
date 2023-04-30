import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Banner from "./Banner.js";
import OriginalList from "./OriginalList.js";
import ListType from "./ListType.js";
import Modal from "./Modal.js";

const API_KEY = "8014da7ed20c5eeb085b2e91972368e3";

const MyContext = React.createContext();

function Browse() {
  const [dataAPI, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const type = [
    ["Trending", `/trending/all/week?api_key=${API_KEY}&language=en-US`],
    ["Originals", `/discover/tv?api_key=${API_KEY}&with_network=123`],
    ["TopRated", `/movie/top_rated?api_key=${API_KEY}&language=en-US`],
    ["ActionMovies", `/discover/movie?api_key=${API_KEY}&with_genres=28`],
    ["ComedyMovies", `/discover/movie?api_key=${API_KEY}&with_genres=35`],
    ["HorrorMovies", `/discover/movie?api_key=${API_KEY}&with_genres=27`],
    ["RomanceMovies", `/discover/movie?api_key=${API_KEY}&with_genres=10749`],
    ["Documentaries", `/discover/movie?api_key=${API_KEY}&with_genres=99`],
    ["Search", `/search/movie?api_key=${API_KEY}&language=en-US`],
  ];
  const headLink = "https://api.themoviedb.org/3";
  let cnt = 0;

  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
    type.forEach((item) => {
      fetch(headLink + item[1])
        .then((response) => response.json())
        .then((data) => {
          setData((prevState) => ({ ...prevState, [item[0]]: data }));
          cnt++;

          if (cnt === type.length) {
            setIsLoading(false);
          }
        })
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <>
      {isLoading === false && (
        <>
          <Banner data={dataAPI.Trending}>
            <Navbar />
          </Banner>
          <div className="bg-dark">
            <MyContext.Provider
              value={{ showModal, setShowModal, dataModal, setDataModal }}
            >
              <OriginalList data={dataAPI.Originals} />
              <ListType data={dataAPI.Trending} id="Trending" />
              <ListType data={dataAPI.TopRated} id="TopRated" />
              <ListType data={dataAPI.ActionMovies} id="ActionMovies" />
              <ListType data={dataAPI.ComedyMovies} id="ComedyMovies" />
              <ListType data={dataAPI.HorrorMovies} id="HorrorMovies" />
              <ListType data={dataAPI.RomanceMovies} id="RomanceMovies" />
              <ListType data={dataAPI.Documentaries} id="Documentaries" />
              <Modal data={dataModal} />
            </MyContext.Provider>
          </div>
        </>
      )}
    </>
  );
}

export { MyContext };
export default Browse;
