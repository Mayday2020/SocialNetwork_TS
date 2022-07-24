
// Types
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
export type StateType = {
    profilePage: {
        postsData: PostDataType[]
        newPostText: string
    }
    messagesPage: {
        dialogsData: DialogDataType[],
        messagesData: MessageDataType[]
    }
}

//  ActionTypes
type ActionTypeType = 'UPDATE-NEW-POST-TEXT' | 'ADD-POST'
export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

//  Store
export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'That\'s MyPost', likes: 2},
                {id: 2, message: 'Hello!!', likes: 3},
                {id: 3, message: 'Tinkoff!', likes: 89},
                {id: 4, message: 'Zzz...', likes: 5},
            ],
            newPostText: 'kama'
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
        switch (action.type){
            case ADD_POST: {
                this._state.profilePage.postsData.push(
                    {id: 6, message: this._state.profilePage.newPostText, likes: 0}
                )
                this._callSubscriber()
                break
            } case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break
            }
        }
    }
}

//  AC
export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string)=> ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const


