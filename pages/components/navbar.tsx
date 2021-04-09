import React, { FC, useState } from "react"
import Head from 'next/head'
import style from "../../styles/navbar.module.scss"
import PresPad from "../components/prespad"
import { useRouter } from 'next/router'
import { motion, transform } from "framer-motion"


interface Props {
    userData: any,
}

const Nav: FC<Props> = ({ userData }) => {
    const router = useRouter()
    // Profile open/close state
    const [profileOpen, setProfileOpen] = useState(false);
    // Profile state changer
    const profileHandleClick = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen)
    }
    // Back button / exit app behaviour
    const arrowBackHandleClick = async (e) => {
        e.preventDefault();
        if (profileOpen) {
            setProfileOpen(!profileOpen)
        } else {
            if (router.route == "/") {
                const data = await fetch(`http://localhost:3000/api/signout`, {
                    method: "POST",
                    body: JSON.stringify({ token: document.cookie }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                const response = await data.json()
                if (response && response.success == true) {
                    router.push('/signin')
                }
            } else {
                router.push('/')
            }
        }
    }

    return (
        <div className={style.container} >
            <button className={style.btn} type="submit" onClick={arrowBackHandleClick}>
                {router.route == "/" ? "X" : "←"}
            </button>

            <div className={style.profile}>
                <p id={style.profile_name} >{userData.user && userData.user.firstname}</p>
                <button className={style.btn} type="submit" onClick={profileHandleClick}>
                    <img src="/images/avatar.svg" alt="avatar" />
                </button>
            </div>
            <motion.div className={style.profile_animation_container} initial={{ transform: "translateX(105%)" }} animate={{ transform: profileOpen ? "translateX(0%)" : "translateX(105%)" }}>
                <PresPad className={style.prespad} imageSrc="" alt="" head="" text="" >
                    <h1>Profile</h1>

                    <h2>Name:</h2>
                    <p>{userData && `${userData.user.firstname} ${userData.user.lastname}`}</p>

                    <h2>With children:</h2>
                    <p>{userData && userData.user.children}</p>

                    <h2>Departure:</h2>
                    <p>{userData && userData.user.departure.location}, {userData && userData.user.departure.time}</p>

                    <h2>Arrival:</h2>
                    <p>{userData && userData.user.arrival.location}, {userData && userData.user.arrival.time}</p>

                    <h2>Transport name, number:</h2>
                    <p>{userData && userData.user.Transport}</p>

                    <PresPad className={style.prespad} imageSrc="/images/qr.svg" alt="qr_code_smaple" head="" text="" />
                </PresPad>
            </motion.div>
        </div>
    )
}

export default Nav
