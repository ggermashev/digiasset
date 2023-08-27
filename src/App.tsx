import React, {useEffect} from 'react';
import "./App.css"
import {Route, Routes, useNavigate} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Logout from "./pages/Logout/Logout";
import Profile from "./pages/Profile/Profile";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import User from "./store/User"

function App() {

    const navigate = useNavigate()

    useEffect(() => {
        User.refresh().then(
            success => {console.log('success')},
            err => {navigate('/login')}
        )
    }, [])

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
                    <Route path={"/marketplace"} element={<MarketPlace/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
