import {ActionTypes, ProfileStateType} from "./store";

type UsersReducerType = (state: any, action: ActionTypes) => ProfileStateType

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'





let initialState: any = {
    users: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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


const usersReducers: UsersReducerType = (state = initialState, action: any) => {
    const stateCopy = {...state}
    switch (action.type) {
        case FOLLOW: {
            return stateCopy
        }
        case UNFOLLOW: {
            return stateCopy
        }
        default: {
            return state
        }
    }
}

const followAC = () => {
    return { type: FOLLOW }
}
const unfollowAC = () => {
    return { type: UNFOLLOW }
}

export default usersReducers;