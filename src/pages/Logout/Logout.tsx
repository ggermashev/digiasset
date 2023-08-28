import React, {useEffect} from 'react';
import User from "../../store/User"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Logout = observer(() => {

    const navigate = useNavigate()

    useEffect(() => {
        try {
            User.logout()
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div>

        </div>
    );
});

export default Logout;