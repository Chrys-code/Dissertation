import React, { FC, useState, useEffect } from "react"
import Head from 'next/head'
import style from "../../styles/navbar.module.scss"
import PresPad from "../components/prespad"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"


interface Props {
    userData: any,
}

const Nav: FC<Props> = ({ userData }) => {
    const router = useRouter()
    // Profile open/close state
    const [profileOpen, setProfileOpen] = useState(false);
    const [route, setRoute] = useState("")
    // Profile state changer
    const profileHandleClick = (e) => {
        e.preventDefault();
        setProfileOpen(!profileOpen)
    }

    // Page title generate based on route
    useEffect(() => {
        if (router.pathname == "/") {
            setRoute("Home")
        } else if (router.pathname == "/links") {
            setRoute("Links")
        } else if (router.pathname == "/form") {
            setRoute("Form")
        }
    }, [router])

    // Back button / exit app behaviour
    const arrowBackHandleClick = async (e) => {
        e.preventDefault();
        // If profile open, close profile tab
        if (profileOpen) {
            setProfileOpen(!profileOpen)
        } else {
            // If route is home page, trigger session termination and exit
            if (router.route == "/") {
                const data = await fetch(process.env.NODE_ENV === 'production' ? 'https://c19travel.herokuapp.com/api/signout' : `http://localhost:3000/api/signout`, {
                    method: "POST",
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
                // Else just step back to home page
                router.push('/')
            }
        }
    }

    if (!userData) {
        return null
    } else {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{route}</title>
                </Head>
                <div className={style.container} >
                    <button className={style.btn} type="submit" onClick={arrowBackHandleClick}>
                        {router.route == "/" ? "X" : "←"}
                    </button>

                    <div className={style.profile}>
                        <p id={style.profile_name} >{userData.user.firstname}</p>
                        <button className={style.btn} type="submit" onClick={profileHandleClick}>
                            <img src="/images/avatar.svg" alt="avatar" />
                        </button>
                    </div>
                    <motion.div className={style.profile_animation_container} initial={{ transform: "translateX(120%)" }} animate={{ transform: profileOpen ? "translateX(0%)" : "translateX(120%)" }} transition={{ type: "spring", duration: .5 }}>
                        <PresPad className={style.prespad} imageSrc="" alt="" head="" text="" >
                            <h1>Profile</h1>

                            <h2>Name:</h2>
                            <p>{`${userData.user.firstname} ${userData.user.lastname}`}</p>

                            <h2>With children:</h2>
                            <p>{userData.user.children ? "Yes" : "No"}</p>

                            <h2>Departure:</h2>
                            <p>{userData.user.departure.location}, {userData.user.departure.time}</p>

                            <h2>Arrival:</h2>
                            <p>{userData && userData.user.arrival.location}, {userData && userData.user.arrival.time}</p>

                            <h2>Transport name, number:</h2>
                            <p>{userData && `${userData.user.transport}`}</p>

                            <PresPad className={style.prespad} imageSrc="/images/qr.svg" alt="qr_code_smaple" head="" text="" />
                        </PresPad>
                    </motion.div>
                </div>
            </>
        )
    }
}

export default Nav
