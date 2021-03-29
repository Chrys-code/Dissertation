import React, { useEffect, useState } from "react"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import { covidData } from "../lib/coviddata"
import style from "../styles/indextyle.module.scss"

const Home = ({ covidProps }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    //setData(covidProps)
  }, [])

  return (
    <div className={style.container}>
      <h1>Im ur app</h1>
      <h2>Im ur app</h2>
      <p>Im ur app</p>
      <form>
        <div className={style.input_field}>
          <input className={style.input_line} placeholder="password" />
          <div className={style.icon}>
            <img alt="" />
          </div>
        </div>
        <select className={style.dropdown}>
          <option value="Hi">Hi</option>
        </select>
        <button className={style.submit_btn}>Login</button>
        <nav >
          <button className={style.submit_btn}>+</button>
        </nav>
        <a href="#">
          <div className={style.link}>
            <h2>Link goes here</h2>
            <p>Description goes here</p>
            <div className={style.icon}>
              <img alt="" />
            </div>
          </div>
        </a>
      </form>
    </div>
  )
}


export default Home
/*
export const getServerSideProps: GetServerSideProps = async context => {
  const data = await covidData()
  return { props: { covidProps: data } }
}
*/