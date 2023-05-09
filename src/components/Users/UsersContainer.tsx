import React from 'react'
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducers";
import store from "../../redux/redux-store";
import {UserType} from "../../redux/store";

const follow = (userId: number) => {
    followAC(userId)
}
const unfollow = (userId: number) => {
    unfollowAC(userId)
}
const setUsers = (users: UserType[]) => {
    setUsersAC(users)
}
const users = store.getState().usersPage.users

const UsersContainer = (): any => {
    console.log('usersComponent render')
    return (
        <Users users={users} follow={follow} unfollow={unfollow} setUsers={setUsers}/>
    )
}

export default UsersContainer