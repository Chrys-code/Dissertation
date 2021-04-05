import React, { FC } from "react"
import Head from 'next/head'
import style from "../../styles/links.style.module.scss";
import Nav from "../components/navbar";
import Link from "../components/link";
import Button from "../components/button";

interface Props {
    covidProps: Array<String>;
}

const Links: FC<Props> = ({ }: Props) => {

    return (
        <>
            <div className={style.navbar}>
                <Nav />
            </div>
            <div className={style.container}>
                <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} />
                <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} />
                <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} />
                <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} />
                <Button className={style.btn} content={"Add"} />
            </div>
        </>
    )
}

export default Links

