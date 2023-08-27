import React, {useEffect} from 'react';
import User from "../../store/User"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Logout = observer(() => {

    const navigate = useNavigate()

    useEffect(() => {
        User.logout().then(
            success => {navigate('/login')},
            err => {console.log(err)}
        )
        navigate('/login')
    }, [])

    return (
        <div>

        </div>
    );
});

export default Logout;