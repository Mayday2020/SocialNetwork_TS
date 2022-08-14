import React from 'react';
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import MyContext from "../../../ContextComponent";

type MyPostContainerType = {
    store: StoreType
}
const MyPostsContainer: React.FC<any> = (props) => {

    return <MyContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage.postsData
                return   <MyPosts postsData={state}/>
            }
        }
    </MyContext.Consumer>
}

export default MyPostsContainer;

