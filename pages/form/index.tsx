import React, { FC, useState, useEffect } from "react"
import { GetServerSideProps } from 'next';
import style from "../../styles/form_style.module.scss"
import Nav from "../components/navbar"
import Button from "../components/button"
import Dropdown from "../components/dropdown"
import InputField from "../components/inputfield"
import PresPad from "../components/prespad"
import { useRouter } from 'next/router'
import selectableDate from "../../lib/selectableDates"
import { parseCookies } from '../../lib/parseCookie'

interface Props { userData: any, sid: string }

const years = ['2021', '2022', '2023']
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

const Form: FC<Props> = ({ userData, sid }) => {
    const router = useRouter()
    const [inputData, setInputData] = useState<object>({})
    const [buttonLabel, setButtonLabel] = useState<string>("Save")
    // Departure
    const [yearOpt, setYearOpt] = useState<Array<string>>(years)
    const [monthOpt, setMonthOpt] = useState<Array<string>>(months)
    const [dayOpt, setDayOpt] = useState<Array<string>>(days)
    // Arrival
    const [ayearOpt, setaYearOpt] = useState<Array<string>>(years)
    const [amonthOpt, setaMonthOpt] = useState<Array<string>>(months)
    const [adayOpt, setaDayOpt] = useState<Array<string>>(days)

    // Accessing without session
    useEffect(() => {
        if (!userData || !userData.user) router.push('/signin')
    }, [userData])

    // Update selectable dates for departure
    useEffect(() => {
        const d = new Date();
        // if current year give only future months / days else all
        if (selectableDate.isCurrentYear(d, inputData)) {
            setMonthOpt(monthOpt.filter(x => parseInt(x) >= (d.getMonth() + 1)))
            if (selectableDate.isCurrentYear(d, inputData) && selectableDate.isCurrentMonth(d, inputData)) {
                setDayOpt(dayOpt.filter(x => parseInt(x) >= (d.getDate())))
            } else {
                setDayOpt(days)
            }
        } else {
            setMonthOpt(months)
            setDayOpt(days)
        }
    }, [inputData])

    // Update selectable dates for arrival
    useEffect(() => {
        let departure = selectableDate.getDepartureDates(inputData)
        // if current year give only future months / days else all
        if (departure.departureMonth !== undefined && departure.departureDay !== undefined) {
            if (selectableDate.isDepartureYear(inputData)) {
                setaMonthOpt(monthOpt.filter(x => x >= departure.departureMonth))
                if (selectableDate.isDepartureYear(inputData) && selectableDate.isDepartureMonth(inputData)) {
                    setaDayOpt(dayOpt.filter(x => x >= departure.departureDay))
                } else {
                    setaDayOpt(days)
                }
            } else {
                setaMonthOpt(months)
                setaDayOpt(days)
            }
        }
    }, [inputData])


    // User Data update dynamically listening onChange
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch(process.env.NODE_ENV === "production" ? 'https://c19travel.herokuapp.com/api/form' : 'http://localhost:3000/api/form', {
            method: "POST",
            body: JSON.stringify({ ...inputData, sid }),
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
                    <Nav userData={userData} sid={sid} />
                </div>
                <div className={style.container}>
                    <PresPad className={style.prespad} imageSrc="" alt="" head="" text="" >
                        <h2>Please provide information about your travel</h2>
                    </PresPad>
                    <form onSubmit={handleSubmit}>
                        <InputField classNames={style} labelFor="transport" labelContent="Transport name, number:" name="transport" placeholder="Transport" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                        <InputField classNames={style} labelFor="departure" labelContent="Departure location & time:" name="departure" placeholder="Departure location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                        <div className={style.inline_container}>
                            <Dropdown className={style} name="departure_year" values={["Year", ...yearOpt]} handleInput={handleInput} />
                            <Dropdown className={style} name="departure_month" values={["Month", ...monthOpt]} handleInput={handleInput} />
                            <Dropdown className={style} name="departure_day" values={["Day", ...dayOpt]} handleInput={handleInput} />
                        </div>
                        <InputField classNames={style} labelFor="arrival" labelContent="Arrival location & time:" name="arrival" placeholder="Arrival location" type="text" prefixImgSrc="/images/lock_mail.svg" handleInput={handleInput} />
                        <div className={style.inline_container}>
                            <Dropdown className={style} name="arrival_year" values={["Year", ...ayearOpt]} handleInput={handleInput} />
                            <Dropdown className={style} name="arrival_month" values={["Month", ...amonthOpt]} handleInput={handleInput} />
                            <Dropdown className={style} name="arrival_day" values={["Day", ...adayOpt]} handleInput={handleInput} />
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
    const cookies = parseCookies(req);
    const data = await fetch(process.env.NODE_ENV === "production" ? 'https://c19travel.herokuapp.com/api/verify' : 'http://localhost:3000/api/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ sid: cookies.SID })
    })
    const res = await data.json();
    return { props: { userData: res || null, sid: cookies.SID || null } }
}
