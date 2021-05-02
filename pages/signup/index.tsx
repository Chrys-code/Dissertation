import React, { FC, useState, useEffect } from "react"
import Link from "next/link"
import Head from 'next/head'
import { useRouter } from 'next/router'
import style from "../../styles/signin_style.module.scss"
import Button from "../components/button"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad"
import Cookie from 'js-cookie'

interface Props { }

const Signup: FC<Props> = ({ }) => {
    const router = useRouter()

    // User data
    const [inputData, setInputData] = useState<object>({})
    // Feedback
    const [buttonLabel, setButtonLabel] = useState<string>("Sign Up")
    // Page title
    const [route, setRoute] = useState("")

    // Page title generate based on route
    useEffect(() => {
        setRoute("SignUp")
    }, [router])


    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    // Handling form submit: request user registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        // unfortunately axios had XHR and http problems here
        const data = await fetch(process.env.NODE_ENV === 'production' ? 'https://c19travel.herokuapp.com/api/signup' : "http://localhost:3000/api/signup", {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const response = await data.json()
        if (response && response.success == false) {
            setButtonLabel(response.message)

            setTimeout(() => {
                setButtonLabel("Sign Up")
            }, 2000)
        }

        if (response && response.token) {
            Cookie.set('SID', response.token)
            router.push('/')
        }
    }

    return (
        <>
            <Head>
                <title>{route}</title>
            </Head>
            <div className={style.container}>
                <main>
                    <PresPad className={style.prespad} imageSrc="/images/Iconlogo.svg" alt="logo.svg" head="" text="" />
                    <p>All the details in one place</p>
                    <form onSubmit={handleSubmit}>
                        <InputField classNames={style} labelFor="" labelContent="" name="firstname" placeholder="Firstname" type="text" prefixImgSrc="/images/users.svg" handleInput={handleInput} />
                        <InputField classNames={style} labelFor="" labelContent="" name="lastname" placeholder="Lastname" type="text" prefixImgSrc="/images/users.svg" handleInput={handleInput} />
                        <InputField classNames={style} labelFor="" labelContent="" name="email" placeholder="Email" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                        <InputField classNames={style} labelFor="" labelContent="" name="password" placeholder="Password" type="password" prefixImgSrc="/images/lock_password.svg" handleInput={handleInput} />
                        <Button className={style.btn} content={buttonLabel} />
                    </form>
                    <Link href="/signin" >
                        <a><p className={style.link}>Sign In</p></a>
                    </Link>
                </main>
            </div>
        </>
    )
}

export default Signup
