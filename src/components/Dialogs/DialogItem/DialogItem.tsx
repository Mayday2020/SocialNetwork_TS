import {Link} from "react-router-dom";
import React from "react";


type DialogsItem = {
    name: string
    id: number
}

const DialogsItem = (props: DialogsItem) => <div><Link to={`/messages/${props.id}`}>{props.name}</Link></div>

export default DialogsItem