import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import style from "../../styles/signin_style.module.scss";
import Button from "../components/button"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad";

interface Props { }

const Signin: FC<Props> = ({ }) => {
    const router = useRouter()

    // User data
    const [inputData, setInputData] = useState<object>({})

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
        if (response.success == true) {
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
                <Button className={style.btn} content="Sign In" />
            </form>
            <Link href="/signup" >
                <a><p className={style.link}>Sign Up</p></a>
            </Link>
        </div>
    )
}

export default Signin
