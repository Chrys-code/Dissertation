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
    <h1>Im ur app</h1>
  )
}


export default Home
/*
export const getServerSideProps: GetServerSideProps = async context => {
  const data = await covidData()
  return { props: { covidProps: data } }
}
*/