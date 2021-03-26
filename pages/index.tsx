import React, { useEffect, useState } from "react"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { covidData } from "../lib/coviddata"


const Home = ({ covidProps }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    //setData(covidProps)
  }, [])

  return (
    <div>
      <h1>Im ur app</h1>
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