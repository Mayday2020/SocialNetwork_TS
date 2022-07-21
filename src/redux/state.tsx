let rerenderEntireTree = (state: StateType) => {
    console.log('rerender')
}

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

//  Store
export let state: StateType = {
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
}

export const addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likes: 0}
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const subscribe = (observer: (state: StateType)=> void) => {
    console.log('subscribe')
    /*observer(state)*/
    rerenderEntireTree = observer
}

