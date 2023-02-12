import {} from "./store";
import {addMessageAC, onChangeMessageAC} from "./dialogsReduser";
import {addPostAC, updateNewPostTextAC} from "./profileReducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


/*type FollowActionType = {
    type: string
    userId: string
}
type UnfollowActionType = {
    type: string
    userId: string
}
type SetUsersActionType = {
    type: string,
    users: UserType[]
}*/
// type UserReducerActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

type UserType = {
    id: string
    fullName: string
    status: string
    location: {country: string, city: string}
    avatar: string
    followed: boolean
}
type StateType = {
    users: UserType[]
}
type UsersReducerType = (state: StateType, action: ActionTypes) => StateType

let initialState: StateType  = {
    users: [
        {
            id: '1',
            fullName: 'Dmitry',
            status: 'So tired',
            location: {
                country: 'Russia',
                city: 'Moscow'
            },
            avatar: 'url...',
            followed: false
        },
        {
            id: '2',
            fullName: 'Stanislav',
            status: 'Some status',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            },
            avatar: 'url...',
            followed: false
        },
        {
            id: '3',
            fullName: 'Alexander',
            status: 'Nice day!',
            location: {
                country: 'France',
                city: 'Paris'
            },
            avatar: 'url...',
            followed: true
        },
    ]
}


const usersReducers: UsersReducerType = (state = initialState, action: ActionTypes): StateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: {
            return state
        }
    }
}

const followAC = (userId: string) => {
    return { type: FOLLOW, userId } as const
}
const unfollowAC = (userId: string) => {
    return { type: UNFOLLOW, userId } as const
}
const setUsersAC = (users: UserType[]) => {  // Тут под вопросом в каком виде приходят users, пока UserType[]
    return {type: SET_USERS, users} as const
}

export type ActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

export default usersReducers;