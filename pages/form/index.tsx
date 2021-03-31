import React, { FC } from "react"
import Head from 'next/head'
import style from "../../styles/form_style.module.scss"
import Nav from "../components/navbar"
import Button from "../components/button"
import Dropdown from "../components/dropdown"
import InputField from "../components/inputfield"

interface Props { }

const Form: FC<Props> = ({ }) => {

    return (
        <>
            <div className={style.navbar}>
                <Nav />
            </div>
            <div className={style.container}>
                <form>
                    <InputField classNames={style} labelFor={"transport"} labelContent={"Transport name, number:"} placeholder={"Transport"} type={"text"} prefixImgSrc="/images/lock_mail.svg" />
                    <InputField classNames={style} labelFor={"departure"} labelContent={"Departure location & time:"} placeholder={"Departure location"} type={"text"} prefixImgSrc="/images/lock_mail.svg" />
                    <div className={style.inline_container}>
                        <Dropdown className={style} values={["Year", "2021", "2022"]} />
                        <Dropdown className={style} values={["Month", "1", "2", "3", "4"]} />
                        <Dropdown className={style} values={["Day", "1", "2"]} />
                    </div>
                    <InputField classNames={style} labelFor={"arrival"} labelContent={"Arrival location & time:"} placeholder={"Arrival location"} type={"text"} prefixImgSrc="/images/lock_mail.svg" />
                    <div className={style.inline_container}>
                        <Dropdown className={style} values={["Year", "2021", "2022"]} />
                        <Dropdown className={style} values={["Month", "1", "2", "3", "4"]} />
                        <Dropdown className={style} values={["Day", "1", "2"]} />
                    </div>
                    <br />
                    <label htmlFor="children"><p>Traveling with children?</p></label>
                    <div className={style.inline_container}>
                        <div>
                            Yes:  <input type="radio" name="children" value="true" />
                        </div>
                        <div>
                            No:  <input type="radio" name="children" value="false" />
                        </div>
                    </div>
                    <Button className={style.btn} content={"Save"} />
                </form>
            </div>
        </>
    )
}

export default Form
