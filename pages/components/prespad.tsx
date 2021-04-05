import React, { FC } from "react";


interface Props {
    className: any,
    imageSrc: string,
    alt: string,
    head: string,
    text: string,
}

const PresPad: FC<Props> = ({ className, children, imageSrc, alt, head, text }) => {

    return (
        <div className={className}>
            {children}
            {head && <h2>{head}</h2>}
            {text && <p>{text}</p>}
            {imageSrc && alt && <img src={imageSrc} alt={alt} />}
        </div>
    )
}

export default PresPad
