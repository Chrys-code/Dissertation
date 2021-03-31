import React, { FC } from "react";


interface Props {
    classNames: any,
    labelFor: string,
    labelContent: string,
    placeholder: string,
    type: string,
    prefixImgSrc: string,
}

const InputField: FC<Props> = ({ classNames, labelFor, labelContent, placeholder, type, prefixImgSrc }) => {

    return (
        <div className={classNames.input_field}>
            {labelFor && labelContent && <label htmlFor={labelFor}><p>{labelContent}</p></label>}
            <div className={classNames.input_line}>
                <input type={type} name={labelFor} placeholder={placeholder} autoComplete="off" />
            </div>
            <div className={classNames.icon}>
                <img src={prefixImgSrc} alt={placeholder} />
            </div>
        </div>
    )
}

export default InputField
