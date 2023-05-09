import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {addMessageAC, onChangeMessageAC} from "./dialogsReduser";

// Types
export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string
        small: string
    }
    status: string
    uniqueUrlName: string
}
export type PostDataType = {
    id: number
    message: string
    likes: number
}
export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type ProfileStateType = {
    postsData: PostDataType[]
    newPostText: string
}
export type UsersStateType = {
    users: UserType[]
}
export type DialogsStateType = {
    dialogsData: DialogDataType[],
    messagesData: MessageDataType[],
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfileStateType
    messagesPage: DialogsStateType
    usersPage: UsersStateType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

//  ActionTypes
export type ActionTypes = ReturnType<typeof onChangeMessageAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

//  Store
let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'That\'s MyPost', likes: 2},
                {id: 2, message: 'Hello!!', likes: 3},
                {id: 3, message: 'Tinkoff!', likes: 89},
                {id: 4, message: 'Zzz...', likes: 5},
            ],
            newPostText: 'text'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Vladislav'},
                {id: 3, name: 'Willy'},
                {id: 4, name: 'Billy'},
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Where are u from?'},
                {id: 4, message: 'Nice case bro!'},
            ],
            newMessageBody: 'body'
        },
        usersPage: {
            users: [
                {
                    followed: false,
                    id: 123,
                    name: 'John_Cina',
                    photos: {
                        large: '',
                        small: ''
                    },
                    status: '',
                    uniqueUrlName: ''
                }
            ]
        }
    },
    _callSubscriber(){
        console.log('_callSubscriberDoNothing')
    },
    subscribe(observer){
        console.log('subscribeMFKR')
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
}

export default store

