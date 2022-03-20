import React, {useEffect} from 'react';
import "./App.css"
import {useDispatch} from "react-redux";
import {APIS} from "./DAL/Api";
import {getUserAct, getUsersThunk} from "./store/UsersReducer";
import ContainerComponent from "./components/ContainerComponent/ContainerComponent";
const App = () => {
    let dis=useDispatch();
    useEffect(()=>{
            dis(getUsersThunk())
    },[])


    return (
        <div className={'App'}>
            <ContainerComponent
            />
        </div>
    );
};

export default App;