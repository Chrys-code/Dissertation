import React, { FC, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'
import style from "../../styles/signin_style.module.scss"
import Button from "../components/button"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad"
import cookie from "js-cookie"

interface Props { }

const Signin: FC<Props> = ({ }) => {
    const router = useRouter()

    // User data
    const [inputData, setInputData] = useState<object>({})
    const [token, setToken] = useState<string>("")
    // Feedback
    const [buttonLabel, setButtonLabel] = useState<string>("Sign In")

    // Set session cookie
    useEffect(() => {
        cookie.set("token", token)
    }, [token])


    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    // Handling form submit: request user registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        // unfortunately axios has XHR and http problems here
        const data = await fetch(`http://localhost:3000/api/signin`, {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const response = await data.json()

        if (response && response.success == false) {
            setButtonLabel(`${response.message}`)

            setTimeout(() => {
                setButtonLabel("Sign In")
            }, 2000)
        }

        if (response && response.success == true && response.token) {
            setToken(response.token);
            router.push('/')
        }
    }

    return (
        <div className={style.container}>
            <PresPad className={style.prespad} imageSrc="/images/Iconlogo.svg" alt="logo.svg" head="" text="" />
            <p>All the details in one place</p>
            <form onSubmit={handleSubmit}>
                <InputField classNames={style} labelFor="" labelContent="" name="email" placeholder="Email" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                <InputField classNames={style} labelFor="" labelContent="" name="password" placeholder="Password" type="password" prefixImgSrc="/images/lock_password.svg" handleInput={handleInput} />
                <Button className={style.btn} content={buttonLabel} />
            </form>
            <Link href="/signup" >
                <a><p className={style.link}>Sign Up</p></a>
            </Link>
        </div>
    )
}

export default Signin
