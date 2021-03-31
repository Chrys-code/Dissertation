import React, { FC } from "react";

interface Props {
    className: any,
    values: Array<string>,
}

const Dropdown: FC<Props> = ({ className, values }) => {

    return (
        <select className={className.dropdown}>
            {values.map((value, index) => {
                return (
                    <option key={index} value={value}>{value}</option>
                )
            })}
        </select>
    )
}

export default Dropdown
