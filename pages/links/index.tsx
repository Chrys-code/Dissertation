import React, { FC, useState, useEffect } from "react"
import Head from 'next/head'
import style from "../../styles/links.style.module.scss"
import Nav from "../components/navbar"
import Link from "../components/link"
import Button from "../components/button"
import PresPad from "../components/prespad"
import { GetServerSideProps } from 'next'
import { parseCookies } from "../../lib/parseCookie"
import { useRouter } from 'next/router'

interface Props { userData: any }

const Links: FC<Props> = ({ userData }: Props) => {
  const router = useRouter()

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(userData)
  }, [userData])

  // "Please login here" when try to access the app without session
  const handleClick = (e) => {
    router.push('/signin')
  }

  if (!user || !userData.user) {
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
          <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} alt={"globe.svg"} />
          <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} alt={"globe.svg"} />
          <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} alt={"globe.svg"} />
          <Link className={style} link={"https://www.w3schools.com/"} head={"W3 schools"} text={"test link description"} imgSrc={"/images/globe.svg"} alt={"globe.svg"} />
          <Button className={style.btn} content={"Add"} />
        </div>
      </>
    )
  }
}
export default Links


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Get local session token
  const cookies = parseCookies(req)
  // Fetch session and user
  const data = await fetch('http://localhost:3000/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(cookies)
  })

  const res = await data.json();
  return { props: { userData: res || null } }
}
