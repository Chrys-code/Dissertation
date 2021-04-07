import React, { FC, useState } from "react"
import Head from 'next/head'
import style from "../../styles/form_style.module.scss"
import Nav from "../components/navbar"
import Button from "../components/button"
import Dropdown from "../components/dropdown"
import InputField from "../components/inputfield"

interface Props { }

const Form: FC<Props> = ({ }) => {

    // User data
    const [inputData, setInputData] = useState<object>({})

    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
        console.log(inputData)
    }

    // Handling form submit: request user registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        // unfortunately axios has XHR and http problems here
        const data = await fetch(`http://localhost:3000/api/form`, {
            method: "POST",
            body: JSON.stringify(inputData),
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
                <Nav />
            </div>
            <div className={style.container}>
                <form>
                    <InputField classNames={style} labelFor="transport" labelContent="Transport name, number:" name="transport" placeholder="Transport" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <InputField classNames={style} labelFor="departure" labelContent="Departure location & time:" name="departure" placeholder="Departure location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <div className={style.inline_container}>
                        <Dropdown className={style} name="departure_year" values={["Year", "2021", "2022"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_month" values={["Month", "1", "2", "3", "4"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_day" values={["Day", "1", "2"]} handleInput={handleInput} />
                    </div>
                    <InputField classNames={style} labelFor="arrival" labelContent="Arrival location & time:" name="arrival" placeholder="Arrival location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                    <div className={style.inline_container}>
                        <Dropdown className={style} name="departure_year" values={["Year", "2021", "2022"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_month" values={["Month", "1", "2", "3", "4"]} handleInput={handleInput} />
                        <Dropdown className={style} name="departure_day" values={["Day", "1", "2"]} handleInput={handleInput} />
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
