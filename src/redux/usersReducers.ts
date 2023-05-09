import {UserType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type StateType = {
    users: UserType[]
}
type UsersReducerType = (state: StateType, action: ActionTypes) => StateType

let initialState: StateType = {
    users: []
};

const usersReducers: UsersReducerType = (state = initialState, action: ActionTypes): StateType => {

    switch (action.type) {
        case FOLLOW: {
            console.log(action.type)
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case UNFOLLOW: {
            console.log(action.type)
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case SET_USERS: {
            console.log(action.type)
            return {...state, users: [...action.users]}
        }
        default: {
            return state
        }
    }
}

export const followAC = (userId: number) => {
    return { type: FOLLOW, userId } as const
}
export const unfollowAC = (userId: number) => {
    return { type: UNFOLLOW, userId } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: SET_USERS, users} as const
}

export type ActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export default usersReducers;