import React, { FC, useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import Head from 'next/head';
import style from "../../styles/form_style.module.scss";

interface Props { }

const Form: FC<Props> = ({ }) => {

    return (
        <div className={style.container}>
            <form>
                <div className={style.input_field}>
                    <label htmlFor="transport"><p>Transport name, number:</p></label>
                    <div className={style.input_line} >
                        <input type="text" name="transport" placeholder="Transport" autoComplete="off" />
                    </div>
                    <div className={style.icon}>
                        <img src="/images/lock_mail.svg" alt="lock_mail.svg" />
                    </div>
                </div>

                <div className={style.input_field}>
                    <label htmlFor="departure_location"><p>Departure location & time:</p></label>
                    <div className={style.input_line} >
                        <input type="text" name="departure_location" placeholder="Departure location" autoComplete="off" />
                    </div>
                    <div className={style.icon}>
                        <img src="/images/lock_mail.svg" alt="lock_mail.svg" />
                    </div>
                </div>
                <div className={style.inline_container}>
                    <select className={style.dropdown}>
                        <option value="Hi">Year</option>
                    </select>
                    <select className={style.dropdown}>
                        <option value="Hi">Month</option>
                    </select>
                    <select className={style.dropdown}>
                        <option value="Hi">Day</option>
                    </select>
                </div>

                <div className={style.input_field}>
                    <label htmlFor="departure_location"><p>Arrival location & time:</p></label>
                    <div className={style.input_line} >
                        <input type="text" name="departure_location" placeholder="Arrival location" autoComplete="off" />
                    </div>
                    <div className={style.icon}>
                        <img src="/images/lock_mail.svg" alt="lock_mail.svg" />
                    </div>
                </div>
                <div className={style.inline_container}>
                    <select className={style.dropdown}>
                        <option value="Hi">Year</option>
                    </select>
                    <select className={style.dropdown}>
                        <option value="Hi">Month</option>
                    </select>
                    <select className={style.dropdown}>
                        <option value="Hi">Day</option>
                    </select>
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

                <button className={style.btn}>Save</button>
            </form>
        </div>
    )
}

export default Form
