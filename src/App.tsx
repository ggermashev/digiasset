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
import {observer} from "mobx-react-lite";
import DfaForm from "./pages/DfaForm/DfaForm";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = observer( () => {

    const navigate = useNavigate()

    useEffect(() => {
        try {
            User.refresh()

        } catch (e) {
            navigate('/login')
        }

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
                    <Route path={"/create-dfa"} element={<DfaForm/>}/>
                    <Route path={"*"} element={<ErrorPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
})

export default App;
