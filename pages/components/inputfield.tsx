import React, { FC } from "react";


interface Props {
    classNames: any,
    labelFor: string,
    labelContent: string,
    placeholder: string,
    type: string,
    prefixImgSrc: string,
    handleInput: any,
    name: string,
}

const InputField: FC<Props> = ({
    classNames, labelFor, labelContent,
    name, placeholder, type, prefixImgSrc,
    handleInput
}) => {

    return (
        <div className={classNames?.input_field}>
            {labelFor && labelContent && <label htmlFor={labelFor}><p>{labelContent}</p></label>}
            <div className={classNames?.input_line}>
                <input type={type} name={name} placeholder={placeholder} autoComplete="off" onChange={handleInput} />
            </div>
            <div className={classNames?.icon}>
                <img src={prefixImgSrc} alt={placeholder} />
            </div>
        </div>
    )
}

export default InputField
