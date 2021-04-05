import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from "next/link";
import { covidData } from "../lib/coviddata";
import style from "../styles/index_style.module.scss";
import Nav from "./components/navbar";
import Dropdown from "./components/dropdown";
import PresPad from "./components/prespad";

interface Props {
  covidProps: Array<String>;
}

const Home: FC<Props> = ({ covidProps }: Props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    //setData(covidProps)
    // console.log(covidProps)
  }, [])

  return (
    <>
      <div className={style.navbar}>
        <Nav />
        <PresPad className={style.prespad} imageSrc={""} alt={""} head={""} text={""} >
          <h1>Profile</h1>

          <h2>Name:</h2>
          <p>Sample</p>

          <h2>With children:</h2>
          <p>Sample</p>

          <h2>Departure location:</h2>
          <p>Sample</p>

          <h2>Departure time:</h2>
          <p>Sample</p>

          <h2>Arrival location:</h2>
          <p>Sample</p>

          <h2>Arrival time:</h2>
          <p>Sample</p>

          <h2>Transport name, number:</h2>
          <p>Sample</p>

          <PresPad className={style.prespad} imageSrc={"/images/qr.svg"} alt={"qr_code_smaple"} head={""} text={""} />


        </PresPad>
      </div>

      <div className={style.container}>
        <div className={style.diagram}>
          <PresPad className={style.prespad} imageSrc={""} alt={""} head={""} text={""} >
            <Dropdown className={style} values={["Country", "123"]} />
            <p>We should have an integrated Python plotlib diagram here</p>
          </PresPad>
        </div>
        <Link href="/form" >
          <a><PresPad className={style.prespad} imageSrc={"/images/locator.svg"} alt={"green_backgroun_img"} head={"Locator From"} text={"Fill a form that is required to cross country border"} /></a>
        </Link>
        <Link href="/links" >
          <a><PresPad className={style.prespad} imageSrc={"/images/links.svg"} alt={"blue_backgroun_img"} head={"Informations"} text={"See a list of useful links, or collect yourself"} /></a>
        </Link>

      </div>

    </>
  )
}

export default Home

/*
export const getServerSideProps: GetServerSideProps = async context => {
  const data = await covidData()
  return { props: { covidProps: data } }
}

        <div>
          {data.map((data, index) => { return (<p key={index}>{data.country}</p>) })}
        </div>

*/


