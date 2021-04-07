import React, { FC } from "react";

interface Props {
    className: any,
    values: Array<string>,
    name: string,
    handleInput: any;
}

const Dropdown: FC<Props> = ({ className, values, name, handleInput }) => {

    return (
        <select className={className.dropdown} name={name} onChange={handleInput}>
            {values.map((value, index) => {
                return (
                    <option key={index} value={value}>{value}</option>
                )
            })}
        </select>
    )
}

export default Dropdown
