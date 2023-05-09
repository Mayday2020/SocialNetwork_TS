import React from 'react'
import {UserType} from "../../redux/store";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import s from './users.module.css'
import axios from "axios";

type UsersComponentType = {
    users: UserType[],
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const Users = (props: UsersComponentType) => {
    const getUsers = () => {
        if(props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => props.setUsers(response.data.item)
            )
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map( u => <div key={u.id} className={s.userList}>
                <div>
                    { u.photos.small != null ? u.photos.small :
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
                    }
                </div>
                <div>
                    <div>{u.name}</div>
                </div>
                <div>
                    <div>status: {u.status}</div>
                </div>
                <div>{u.followed
                    ? <button onClick={()=>{ props.follow(u.id) }}>unfollowed</button>
                    : <button onClick={()=>{ props.unfollow(u.id) }}>followed</button>}</div>
            </div>)}
        </div>
    )
}

export default Users