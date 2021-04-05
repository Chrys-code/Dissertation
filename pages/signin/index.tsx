import React, { FC } from "react";
import Link from "next/link";
import Head from 'next/head';
import style from "../../styles/signin_style.module.scss";
import Button from "../components/button"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad";

interface Props { }

const Signin: FC<Props> = ({ }) => {

    return (
        <div className={style.container}>
            <PresPad className={style.prespad} imageSrc={"/images/Iconlogo.svg"} alt={"logo.svg"} head={""} text={""} />
            <p>All the details in one place</p>
            <form>
                <InputField classNames={style} labelFor={""} labelContent={""} placeholder={"Email"} type={"text"} prefixImgSrc="/images/lock_mail.svg" />
                <InputField classNames={style} labelFor={""} labelContent={""} placeholder={"Password"} type={"password"} prefixImgSrc="/images/lock_password.svg" />
                <Button className={style.btn} content={"Sign In"} />
            </form>
            <Link href="/signup" >
                <a><p className={style.link}>Sign Up</p></a>
            </Link>
        </div>
    )
}

export default Signin
