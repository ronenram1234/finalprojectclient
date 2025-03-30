import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

import { User } from "./interfaces/User";
import { Jwt } from "./interfaces/Jwt";
import { CardRecFull } from "./interfaces/Card";

import {
  getTokenLocalStorage,
  getUserDetail,
  removeTokenLocalStorage,
  tokenToDecoode,
} from "./services/userServices";

import { getAllCardsFromAPI } from "./utils/cardHelpers";
import { GlobalProps, GlobalPropsType } from "./context/GlobalContext";

import About from "./components/About";
import FavCards from "./components/FavCards";
import MyCards from "./components/MyCards";
import CardDetails from "./components/CardDetails";
import NewEditCard from "./components/NewEditCard";
import AdminUsers from "./components/AdminUsers";
import AdminCards from "./components/AdminCards";
import AdminStats from "./components/AdminStats";

import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const localToken = getTokenLocalStorage() || "";

  const [token, setToken] = useState(localToken);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [cardArray, setCardArray] = useState<CardRecFull[] | null>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [sort, setSort] = useState("");
  const [imageError, setImageError] = useState<string[]>([]);
  const [addressError, setAddressError] = useState<string[]>([]);
  const [isUserLogedin, setIsUsserLogedin] = useState(localToken !== "");

  const globalContextValue: GlobalPropsType = {
    isUserLogedin,
    setIsUsserLogedin,
    token,
    setToken,
    currentUser,
    setCurrentUser,
    cardArray,
    setCardArray,
    isDarkMode,
    setIsDarkMode,
    searchString,
    setSearchString,
    sort,
    setSort,
    imageError,
    setImageError,
    addressError,
    setAddressError,
  };

  useEffect(() => {
    if (localToken !== "") {
      const jwtUser: Jwt = tokenToDecoode(localToken);
      getUserDetail(jwtUser._id, localToken)
        .then((res) => setCurrentUser(res.data))
        .catch(() => {
          removeTokenLocalStorage();
          setIsUsserLogedin(false);
        });
    }
  }, [localToken]);

  useEffect(() => {
    if (cardArray?.length === 0) {
      getAllCardsFromAPI(setCardArray);
    }
  }, [cardArray]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <ToastContainer />
      <GlobalProps.Provider value={globalContextValue}>
        <div className="App">
          <div className="container">
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favcards" element={<FavCards />} />
                <Route path="/mycards" element={<MyCards />} />
                <Route path="/sandbox">
                  <Route path="adminusers" element={<AdminUsers />} />
                  <Route path="admincards" element={<AdminCards />} />
                  <Route path="adminstats" element={<AdminStats />} />
                </Route>
                <Route path="/carddetails" element={<CardDetails />} />
                <Route path="/neweditcard" element={<NewEditCard />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </div>
      </GlobalProps.Provider>
    </>
  );
}

export default App;
