
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

type ActionTypeType = 'UPDATE-NEW-POST-TEXT' | 'ADD-POST'
type ActionType = {
    type: ActionTypeType,
    newText?: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
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
    addPost(){
        this._state.profilePage.postsData.push(
            {id: 6, message: this._state.profilePage.newPostText, likes: 0}
            )
        this._callSubscriber()
        console.log('storeAddPost')
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
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
            case 'ADD-POST': {
                this._state.profilePage.postsData.push(
                    {id: 6, message: this._state.profilePage.newPostText, likes: 0}
                )
                this._callSubscriber()
                break
            } case 'UPDATE-NEW-POST-TEXT': {
                if (action.newText){
                    this._state.profilePage.newPostText = action.newText
                }
                this._callSubscriber()
                break
            }
        }
    }
}


