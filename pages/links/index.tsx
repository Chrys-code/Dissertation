import React, { FC, useState, useEffect } from "react"
import style from "../../styles/links.style.module.scss"
import Nav from "../components/navbar"
import Link from "../components/link"
import Button from "../components/button"
import InputField from "../components/inputfield"
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"


interface Props { userData: any }

const Links: FC<Props> = ({ userData }: Props) => {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ link: '', head: '', text: '' })
  const [buttonLabel, setButtonLabel] = useState("+");

  // Accessing without session
  useEffect(() => {
    if (!userData || !userData.user) router.push('/signin')
  }, [userData])

  const isFormComplete = (form) => {
    let values = [];
    Object.entries(form).forEach(([key, value]) => {
      values.push(value)
    });
    if (values[0].length == 0 || values[1].length == 0 || values[2].length == 0) {
      return false
    } else {
      return true
    }
  }

  // Set button label based on formState
  useEffect(() => {
    isFormComplete(formState)
      ? setButtonLabel('Add')
      : setButtonLabel('Close')
  }, [formState])

  // Set button label based on isMenuOpen
  useEffect(() => {
    isMenuOpen
      ? setButtonLabel('Close')
      : setButtonLabel('+')
  }, [isMenuOpen])

  // Button behaviour
  const menuHandleClick = (e) => {
    e.preventDefault();
    isMenuOpen && isFormComplete(formState)
      ? handleSubmit(e)
      : setMenuOpen(!isMenuOpen)
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setFormState({ ...formState, [name]: value })
  }

  // Add new item
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await fetch(process.env.NODE_ENV === "production" ? 'https://c19travel.herokuapp.com/api/links' : 'http://localhost:3000/api/links', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formState)
    })

    const res = await data.json();

    if (res && res.success == false) {
      setButtonLabel(`${res.message}`)
      setTimeout(() => {
        setButtonLabel(`Add`)
      }, 2000)
      return
    }

    if (res && res.success == true) {
      userData.user.links.push(formState)
      setFormState({ link: '', head: '', text: '' })
      setButtonLabel(`${res.message}`)
      setTimeout(() => {
        setMenuOpen(false)
        setButtonLabel(`Add`)
      }, 2000)
    }
  }

  // Accessing without session
  const handleClick = (e) => {
    router.push('/signin')
  }

  // Conditional rendering if session is not set
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
          <Link className={style} link="https://www.gov.uk/uk-border-control" head="GOV UK" text="Border Control Information" imgSrc="/images/globe.svg" alt="globe.svg" />
          {userData.user.links.map((item, index) => {
            return (
              <Link key={index} className={style} link={item.link} head={item.head} text={item.text} imgSrc="/images/globe.svg" alt="globe.svg" />
            )
          })
          }
          <form>
            <motion.div className={style.form_content_animation} initial={{ height: "0px", opacity: .0, display: "none" }} animate={{ height: isMenuOpen ? "250px" : "0%", opacity: isMenuOpen ? "1" : "0", display: isMenuOpen ? "block" : "none" }} transition={{ type: "spring", duration: .5 }}  >
              <h2>Add new item:</h2>
              <InputField classNames={style} labelFor="" labelContent="" name="link" placeholder="Website URL" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
              <InputField classNames={style} labelFor="" labelContent="" name="head" placeholder="Title" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
              <InputField classNames={style} labelFor="" labelContent="" name="text" placeholder="Short description" type="text" prefixImgSrc="/images/prefix_globe.svg" handleInput={handleInput} />
            </motion.div>
            <div onClick={menuHandleClick}>
              <Button className={style.btn} content={buttonLabel} />
            </div>
          </form>
        </div>
      </>
    )
  }
}
export default Links


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Fetch session and user
  const data = await fetch(process.env.NODE_ENV === "production" ? 'https://c19travel.herokuapp.com/api/verify' : 'http://localhost:3000/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const res = await data.json();
  return { props: { userData: res || null } }
}
