import React from 'react'
import {UserType} from "../../redux/store";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import s from './users.module.css'

type UsersComponentType = {
    users: UserType[],
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersComponentType) => {
    return (
        <div>
            users is here
            {props.users.map( u => <ul key={u.id} className={s.userList}>
                <li>
                    <IconButton
                        size="medium"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        /*onClick={}*/
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </li>
                <li>{u.fullName}</li>
                <li>status: {u.status}</li>
                <li>city: {u.location.city}</li>
                <li>country: {u.location.country}</li>
                <li>{u.followed ? <button>unfollowed</button> : <button>followed</button>}</li>
            </ul>)}
        </div>
    )
}

export default Users