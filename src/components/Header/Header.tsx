import React, {useCallback, useEffect, useState} from 'react';
import {HeaderStyled, Container, DropDown} from "./Header.styled";
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useParams} from "react-router-dom";
import gsap from "gsap"
import User from "../../store/User"
import {observer} from "mobx-react-lite";

const Header = observer(() => {

    const tl = gsap.timeline()

    const [menuIsOpened, setMenuIsOpened] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })

    const onMenuClick = useCallback(() => {
        const isOpened = menuIsOpened
        setMenuIsOpened(!isOpened)

        if (isOpened) {
            tl.to('#dropdown', {
                ease: 'power4',
                duration: .5,
                display: 'none',
                opacity: 0,
                height: 0,
            })
        } else {
            tl.to('#dropdown', {
                ease: 'power2',
                duration: .4,
                display: `flex`,
                opacity: 1,
                height: `calc(100vh - 4em)`,
            })
        }

    }, [menuIsOpened])

    useEffect(() => {
        if (windowWidth >= 767) {
            if (menuIsOpened) {
                onMenuClick()
            }
        }
    }, [windowWidth])

    return (
        <HeaderStyled>
            <Container>
                <Link className={"link"} to={"/"}>Главная</Link>
                {User.isAuth &&
                    <>
                        <Link className={"link"} to={"/profile"}>Профиль</Link>
                        <Link className={"link"} to={"/marketplace"}>Торговая площадка</Link>
                    </>
                }
            </Container>
            <Container>
                {User.isAuth && <Link to={"#"} >{User?.nickname}</Link>}
                {User.isAuth
                    ? <Link className={"link"} to={"/logout"} >Выход</Link>
                    : <Link className={"link"} to={"/login"}>Вход</Link>
                }
                <MenuIcon
                    className={"menu-icon"}
                    onClick={() => {
                        onMenuClick()
                    }}
                />
            </Container>
            <DropDown
                id={'dropdown'}
                onClick={() => {
                    onMenuClick()
                }}
            >
                <Link className={"link"} to={"/"}>Главная</Link>
                {User.isAuth &&
                    <>
                        <Link className={"link"} to={"/profile"}>Профиль</Link>
                        <Link className={"link"} to={"/marketplace"}>Торговая площадка</Link>
                    </>
                }
                {User.isAuth
                    ? <>
                        <Link className={"link"} to={"/logout"} style={{marginTop: '2em'}}>Выход</Link>
                    </>
                    : <>
                        <Link className={"link"} to={"/login"} style={{marginTop: '2em'}}>Вход</Link>
                    </>
                }
            </DropDown>
        </HeaderStyled>
    );
});

export default Header;