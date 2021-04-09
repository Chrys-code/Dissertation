import React, { FC, useState } from "react"
import Head from 'next/head'
import { GetServerSideProps } from 'next';
import style from "../../styles/form_style.module.scss"
import Nav from "../components/navbar"
import Button from "../components/button"
import Dropdown from "../components/dropdown"
import InputField from "../components/inputfield"
import { parseCookies } from "../../lib/parseCookie"

interface Props { userData: any }

const Form: FC<Props> = ({ userData }) => {

    // User data
    const [inputData, setInputData] = useState<object>({})

    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    // Handling form submit: request user registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch(`http://localhost:3000/api/form`, {
            method: "POST",
            body: JSON.stringify({ ...inputData, userId: "606d7ecb8d8d77746cd1c796" }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const response = data.json()
    }

    return (
        <>
            <div className={style.navbar}>
                <Nav userData={userData} />
            </div>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <InputField classNames={style} labelFor="transport" labelContent="Transport name, number:" name="transport" placeholder="Transport" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <InputField classNames={style} labelFor="departure" labelContent="Departure location & time:" name="departure" placeholder="Departure location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <div className={style.inline_container}>
                        <Dropdown className={style} name="departure_year" values={["Year", "2021", "2022"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_month" values={["Month", "1", "2", "3", "4"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_day" values={["Day", "1", "2"]} handleInput={handleInput} />
                    </div>
                    <InputField classNames={style} labelFor="arrival" labelContent="Arrival location & time:" name="arrival" placeholder="Arrival location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <div className={style.inline_container}>
                        <Dropdown className={style} name="arrival_year" values={["Year", "2021", "2022"]} handleInput={handleInput} />
                        <Dropdown className={style} name="arrival_month" values={["Month", "1", "2", "3", "4"]} handleInput={handleInput} />
                        <Dropdown className={style} name="arrival_day" values={["Day", "1", "2"]} handleInput={handleInput} />
                    </div>
                    <br />
                    <label htmlFor="children"><p>Traveling with children?</p></label>
                    <div className={style.inline_container}>
                        <div>
                            Yes:  <input type="radio" name="children" value="true" onChange={handleInput} />
                        </div>
                        <div>
                            No:  <input type="radio" name="children" value="false" onChange={handleInput} />
                        </div>
                    </div>
                    <Button className={style.btn} content={"Save"} />
                </form>
            </div>
        </>
    )
}

export default Form


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
