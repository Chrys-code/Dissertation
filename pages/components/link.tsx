import React, { FC } from "react";
import Link from "next/link"

interface Props {
    className: any,
    link: string,
    imgSrc: string,
    head: string,
    text: string,
    alt: string,
}

const Dropdown: FC<Props> = ({ className, link, head, text, imgSrc, alt }) => {

    if (!link) { return null }
    else {
        return (
            <Link href={link} passHref={true}>
                <div className={className?.link}>
                    <div className={className?.icon}>
                        <img src={imgSrc} alt={alt} />
                    </div>
                    <div>
                        <h2>{head}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </Link>
        )
    }

}

export default Dropdown
