import React, { FC, useState, useEffect } from "react";
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from "next/link";
import { fetchCovidData } from "../lib/coviddata";
import style from "../styles/index_style.module.scss";
import Nav from "./components/navbar";
import Dropdown from "./components/dropdown";
import PresPad from "./components/prespad";
import { useRouter } from 'next/router'

interface Props {
  covidData: Array<any>,
  userData: any,
}

const Home: FC<Props> = ({ userData, covidData }: Props) => {
  const router = useRouter()

  // State
  const [response1, setResponse1] = useState([])
  const [response2, setResponse2] = useState([])

  // Filter API data for comparison1
  const handleInput1 = (e) => {
    let filtered = covidData.filter((x) => x.country == e.target.value)
    setResponse1(filtered)
  }

  // Filter API data for comparison2
  const handleInput2 = (e) => {
    let filtered = covidData.filter((x) => x.country == e.target.value)
    setResponse2(filtered)
  }

  // "Please login here" when try to access the app without session
  const handleClick = (e) => {
    router.push('/signin')
  }

  if (!userData || !userData.user) {
    return (<>
      <h1>Please log in <span onClick={handleClick}><u>here</u></span></h1>
    </>)
  } else {
    return (
      <>
        <div className={style.navbar}>
          <Nav userData={userData} />
        </div>
        <div className={style.container}>
          <div className={style.diagram}>
            <PresPad className={style.prespad} imageSrc="" alt="" head="" text="" >
              <div className={style.inlineContainer}>
                <Dropdown className={style} values={covidData.map(item => { return item.country }).sort(function (a, b) { return a.localeCompare(b); })} name="" handleInput={handleInput1} />
                <Dropdown className={style} values={covidData.map(item => { return item.country }).sort(function (a, b) { return a.localeCompare(b); })} name="" handleInput={handleInput2} />
              </div>
              {response1.length == 1 && response2.length == 1 ?
                <>
                  <table>
                    <tbody>
                      <tr>
                        <th>Results</th>
                        <th>{response1[0].country}</th>
                        <th>{response2[0].country}</th>
                      </tr>
                      <tr>
                        <td>
                          Active cases:
                      </td>
                        <td>
                          {response1[0].cases.active}
                        </td>
                        <td>
                          {response2[0].cases.active}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          New cases:
                      </td>
                        <td>
                          {response1[0].cases.new}
                        </td>
                        <td>
                          {response2[0].cases.new}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          Active 1M pop:
                      </td>
                        <td>
                          {response1[0].cases["1M_pop"]}
                        </td>
                        <td>
                          {response2[0].cases["1M_pop"]}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Tests 1M pop:
                      </td>
                        <td>
                          {response1[0].tests["1M_pop"]}
                        </td>
                        <td>
                          {response2[0].tests["1M_pop"]}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Deaths 1M pop:
                      </td>
                        <td>
                          {response1[0].deaths["1M_pop"]}
                        </td>
                        <td>
                          {response2[0].deaths["1M_pop"]}
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </>
                : <><h2>Please select countries to compare</h2></>}
            </PresPad>
          </div>
          <Link href="/form" >
            <a><PresPad className={style.prespad} imageSrc="/images/locator.svg" alt="green_backgroun_img" head="Locator From" text="Fill a form that is required to cross country border" /></a>
          </Link>
          <Link href="/links" >
            <a><PresPad className={style.prespad} imageSrc="/images/links.svg" alt="blue_backgroun_img" head="Informations" text="See a list of useful links, or collect yourself" /></a>
          </Link>

        </div>
      </>
    )

  }
}


export default Home

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const data = await fetch('http://localhost:3000/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  const res = await data.json();
  // Get covid data from API
  const covid = await fetchCovidData()
  return { props: { userData: res || null, covidData: covid || null } }
}
