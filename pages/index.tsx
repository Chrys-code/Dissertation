import React, { FC, useEffect, useState } from "react"
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { covidData } from "../lib/coviddata"

interface Props {
  covidProps: Array<String>;
}

const Home: FC<Props> = ({ covidProps }: Props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(covidProps)
    console.log(covidProps)
  }, [])

  return (
    <div >
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

<div>
{data.map((data, index) => { return (<p key={index}>{data.country}</p>) })}
</div>
*/

