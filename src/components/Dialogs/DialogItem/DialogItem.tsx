import {Link} from "react-router-dom";
import React from "react";
import {DialogDataType} from "../../../redux/state";

const DialogsItem: React.FC<DialogDataType> = (props) => {
    return <div>
        <Link to={`/messages/${props.id}`}>{props.name}</Link>
    </div>
}

export default DialogsItem