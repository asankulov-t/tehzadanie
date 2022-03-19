import React, {useEffect, useState} from 'react';
import "./App.css"
import {useDispatch, useSelector} from "react-redux";
import {APIS} from "./DAL/Api";
import {getUserAct} from "./store/UsersReducer";
import ContainerComponent from "./components/ContainerComponent/ContainerComponent";
import {RootObject} from "./types";
const App = () => {
    let dis=useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            APIS.getUsers().then((res)=>{
                dis(getUserAct(res))
            })
        },1000)
    },[])


    return (
        <div className={'App'}>
            <ContainerComponent
            />
        </div>
    );
};

export default App;