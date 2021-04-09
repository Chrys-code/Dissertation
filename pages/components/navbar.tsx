import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import Head from 'next/head';
import style from "../../styles/navbar.module.scss";

interface Props {
    userData: any,
}

const Nav: FC<Props> = ({ userData }) => {

    return (
        <div className={style.container} >
            <button className={style.btn} type="submit">
                ←
            </button>

            <div className={style.profile}>
                <p id={style.profile_name} >{userData.user.firstname}</p>
                <button className={style.btn} type="submit">
                    <img src="/images/avatar.svg" alt="avatar" />
                </button>
            </div>
        </div>
    )
}

export default Nav
