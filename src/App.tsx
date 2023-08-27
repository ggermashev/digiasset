import React from 'react';
import "./App.css"
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Logout from "./pages/Logout/Logout";
import Profile from "./pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/registration"} element={<Registration/>}/>
                    <Route path={"/logout"} element={<Logout/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
