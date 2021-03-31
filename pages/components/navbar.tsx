import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import Head from 'next/head';
import style from "../../styles/navbar.module.scss";

interface Props { }

const Nav: FC<Props> = ({ }) => {

    return (
        <div className={style.container} >
            <button className={style.btn} type="submit">
                ←
            </button>

            <div className={style.profile}>
                <p id={style.profile_name} >Sample name here</p>
                <button className={style.btn} type="submit">
                    pic
            </button>
            </div>
        </div>
    )
}

export default Nav
