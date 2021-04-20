import React, { FC } from "react"

interface Props {
}

const Fallback: FC<Props> = ({ }: Props) => {

    return (
        <>
            <h1>This is a fallback page in offline mode</h1>
        </>
    )

}


export default Fallback

