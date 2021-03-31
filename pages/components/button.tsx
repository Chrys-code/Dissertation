import React, { FC } from "react";

interface Props {
    className: string,
    content: string,
}

const Button: FC<Props> = ({ className, content }) => {

    return (
        <button className={className}>{content}</button>
    )
}

export default Button
