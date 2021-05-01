import React, { FC, useState } from "react"
import { GetServerSideProps } from 'next';
import style from "../../styles/form_style.module.scss"
import Nav from "../components/navbar"
import Button from "../components/button"
import Dropdown from "../components/dropdown"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad"
import { useRouter } from 'next/router'


interface Props { userData: any }

const Form: FC<Props> = ({ userData }) => {
    const router = useRouter()
    const [inputData, setInputData] = useState<object>({})
    const [buttonLabel, setButtonLabel] = useState<string>("Save")

    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch(process.env.NODE_ENV === "production" ? 'https://c19travel.herokuapp.com/api/form' : 'http://localhost:3000/api/form', {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const response = await data.json()
        if (response) {
            setButtonLabel(`${response.message}`)
            setTimeout(() => {
                setButtonLabel("Save")
            }, 2000)
        }
    }

    // Accessing the app without session
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
                    <form onSubmit={handleSubmit}>
                        <PresPad className={style.prespad} imageSrc="" alt="" head="" text="" >
                            <h2>Please provide information about your travel</h2>
                        </PresPad>

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
                        <Button className={style.btn} content={buttonLabel} />
                    </form>
                </div>
            </>
        )
    }
}

export default Form


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    // Verify session
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
