import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";
import {ActionTypes, StoreType} from "../../redux/state";

export type MainPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const Main: React.FC<MainPropsType> = (props) => {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/'}/>
                <Route path={'profile'} element={<Profile profilePage={props.store.getState().profilePage}
                                                          dispatch={props.dispatch}
                                                />}
                />
                <Route path={'messages'}
                       element={<Dialogs messagesPage={props.store._state.messagesPage}/>}
                />
                <Route path={'*'} element={<Whoops404/>}/>
            </Routes>
        </Box>
    )
}

export default Main;

