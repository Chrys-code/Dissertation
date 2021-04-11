import React, { FC, useState, useEffect } from "react"
import Head from 'next/head'
import style from "../../styles/links.style.module.scss"
import Nav from "../components/navbar"
import Link from "../components/link"
import Button from "../components/button"
import InputField from "../components/inputfield"
import { GetServerSideProps } from 'next'
import { parseCookies } from "../../lib/parseCookie"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"


interface Props { userData: any }

const Links: FC<Props> = ({ userData }: Props) => {
  const router = useRouter()

  // Input menu state
  const [addOpen, setAddOpen] = useState(false)
  const [formState, setFormState] = useState({})
  const [buttonLabel, setButtonLabel] = useState("Close");

  // Open menu to add new item
  const addHandleClick = (e) => {
    setAddOpen(!addOpen)
  }

  // Form input
  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormState({ ...formState, [name]: value })
    setButtonLabel(`Add`)
  }

  // Add new item
  const handleSubmit = async (e) => {
    e.preventDefault()
    // User should at least touch the form to operate
    if (formState && Object.keys(formState).length === 0 && formState.constructor === Object) return setAddOpen(!addOpen)

    // request to server to save new item
    const data = await fetch("http://localhost:3000/api/links", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ ...formState, token: document.cookie })
    })

    const res = await data.json();
    console.log(res)

    if (res && res.success == false) {
      setButtonLabel(`${res.message}`)
      setTimeout(() => {
        setButtonLabel(`Add`)
      }, 2000)
    }

    if (res && res.success == true) {
      //userData.user.links.push(formState)
      setFormState({})
      setButtonLabel(`${res.message}`)
      setTimeout(() => {
        setAddOpen(!addOpen)
        setButtonLabel(`Add`)
      }, 2000)
    }
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
          {userData.user.links.map((item, index) => {
            return (
              <Link key={index} className={style} link={item.link} head={item.head} text={item.text} imgSrc="/images/globe.svg" alt="globe.svg" />
            )
          })}
          <Link className={style} link="https://www.gov.uk/uk-border-control" head="GOV UK" text="Border Control Information" imgSrc="/images/globe.svg" alt="globe.svg" />
          <form onSubmit={handleSubmit}>
            <motion.div className={style.form_content_animation} initial={{ height: "0px", opacity: .0, display: "none" }} animate={{ height: addOpen ? "250px" : "0%", opacity: addOpen ? "1" : "0", display: addOpen ? "block" : "none" }}  >
              <h2>Add new item:</h2>
              <InputField classNames={style} name="link" placeholder="Website URL" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
              <InputField classNames={style} name="head" placeholder="Title" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
              <InputField classNames={style} name="text" placeholder="Short description" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
            </motion.div>
            {!addOpen ?
              <div onClick={addHandleClick}>
                <Button className={style.btn} content="+" />
              </div>
              :
              <Button className={style.btn} content={buttonLabel} />
            }
          </form>
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
