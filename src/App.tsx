// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getTokenLocalStorage,
  // getUserDetail,
  // removeTokenLocalStorage,
  // tokenToDecoode,
} from "./services/userServices";

interface GlobalPropsType {
  isUserLogedin: boolean;
  // setIsUsserLogedin: React.Dispatch<React.SetStateAction<boolean>>;
  // token: string;
  // setToken: React.Dispatch<React.SetStateAction<string>>;
  // currentUser: User | null;
  // setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  // cardArray: CardRecFull[] | null;
  // setCardArray: React.Dispatch<React.SetStateAction<CardRecFull[] | null>>;

  // isDarkMode: boolean;
  // setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  // searchString: string;
  // setSearchString: React.Dispatch<React.SetStateAction<string>>;

  // sort: string;
  // setSort: React.Dispatch<React.SetStateAction<string>>;

  // imageError: string[];
  // setImageError: React.Dispatch<React.SetStateAction<string[]>>;
  // addressError:string[];
  // setAddressError: React.Dispatch<React.SetStateAction<string[]>>;
}
export const GlobalProps = createContext<GlobalPropsType>({
  isUserLogedin: false,
  // setIsUsserLogedin: () => {},
  // token: "",
  // setToken: () => {},
  // currentUser: null,
  // setCurrentUser: () => {},
  // cardArray: null,
  // setCardArray: () => {},

  // isDarkMode: false,
  // setIsDarkMode: () => {},
  // searchString: "",
  // setSearchString: () => {},
  // sort: "",
  // setSort: () => {},
  // imageError: [],
  // setImageError: () => {},
  // addressError:[],
  // setAddressError: () => {},
});

function App() {
  const localToken = getTokenLocalStorage() || "";
  const [isUserLogedin, setIsUsserLogedin] = useState(
    localToken === "" ? false : true
  );

  const globalContextValue = {
    isUserLogedin,
    // setIsUsserLogedin,
    // token,
    // setToken,
    // currentUser,
    // setCurrentUser,
    // cardArray,
    // setCardArray,
    // isDarkMode,
    // setIsDarkMode,
    // searchString,
    // setSearchString,
    // sort,
    // setSort,
    // imageError,
    // setImageError,
    // addressError,
    // setAddressError,
  };
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>formik</h1>
      <ToastContainer />

      <GlobalProps.Provider value={globalContextValue}>
        <div className="App">
          <>
            <h1>test</h1>
            <div className="container">
              <Router>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<About />} />
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
          </>
        </div>
      </GlobalProps.Provider>
    </>
  );
}

export default App;
