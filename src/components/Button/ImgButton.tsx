import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface Props {
    image: any
    text: string
    onClick: any
    className: string
}

const ImgButton: React.FC<Props> = (props) => {
    return (
        <button className={props.className} type="button" onClick={() => props.onClick()}>
            <FontAwesomeIcon icon={props.image} className="fa-image-40 mr-10" />
            <p>{props.text} </p>
        </button>
    )
}

export default ImgButton