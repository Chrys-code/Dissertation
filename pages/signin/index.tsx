import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import Head from 'next/head';
import style from "../../styles/signin_style.module.scss";

interface Props { }

const Home: FC<Props> = ({ }) => {

    return (
        <div className={style.container}>
            <div className={style.btn}>
                <img src="/images/Iconlogo.svg" />
            </div>
            <p>All the details in one place</p>
            <form>
                <div className={style.input_field}>
                    <div className={style.input_line} >
                        <input type="text" name="email" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className={style.icon}>
                        <img src="/images/lock_mail.svg" alt="lock_mail.svg" />
                    </div>
                </div>
                <div className={style.input_field}>
                    <div className={style.input_line}>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className={style.icon}>
                        <img src="/images/lock_password.svg" alt="lock_password.svg" />
                    </div>
                </div>

                <button className={style.btn}>Sign In</button>
            </form>

            <Link href="/signup" >
                <a><p className={style.signup}>Sign Up</p></a>
            </Link>
        </div>
    )
}

export default Home
