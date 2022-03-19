import React, {useState} from 'react';
import s from './ContainerComponent.module.css'
import NavBar from "../Nav/NavBar";
import ContendSide from "../ContentSide/ContendSide";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../store/Store";
import {RootObject} from "../../types";
import { sortByCity, sortByCompany} from "../../store/UsersReducer";
import EditComponent from "../../EditComponent/EditComponent";
import {Route, Routes, useLocation } from 'react-router-dom';
import CommoinButton from "../CommonButton/CommoinButton";
import limg from "../../assets/Skateboarding.gif";



const ContainerComponent = () => {
    //local hooks
    let [dataForEdit,setdataForEdit]=useState<Array<RootObject>>([])
    let [editMode,setEditMode]=useState(false)
    let [readOnly,setReadOnly]=useState(true)
    //dispatch
    let dis=useDispatch();
    //data from redux
    let data=useSelector<AppRootType,Array<RootObject>>((state)=>state.UsersReducer["data"])
    let isLoad=useSelector<AppRootType,boolean>((state)=>state.UsersReducer["isLoading"])
    //local funtions thats call actionCreator from redux
    const sortByCitys=()=>{
        dis(sortByCity())
        setEditMode(false)
    }
    const sortByCompanies=()=>{
        dis(sortByCompany())
        setEditMode(false)
    }

    let getDataForEdit=(id:number)=>{
         setdataForEdit(data.filter((s)=>s.id==id))
         setEditMode(true)
    }
    let setOffReadOnly=()=>{
        setReadOnly(false)
    }
    //"gh-pages": "^3.2.3"
    //  "homepage": "https://http://asankulov-t.github.io/tehzadanie",
    // "predeploy": "npm run build",
    //     "deploy": "gh-pages -d build"
    return <div className={s.container}>

        <NavBar sortByCitys={sortByCitys}
                sortByCompanies={sortByCompanies}/>
        <div className={s.mainContend}>
            {editMode===false?<div>
                    <h3>{isLoad?'Список пользователей':'Загрузка...'}</h3>
                </div>
                :
                <div className={s.editTitle}><h3>Профиль пользователя</h3><CommoinButton link={`/tehzadanie/edit`} callBack={setOffReadOnly} name={'Редактировать'}/></div>
            }
            {!isLoad&&<img src={limg} alt="/"/>}
            <Routes>
                <Route path={'/tehzadanie'}  element={<ContendSide
                                                        getUser={getDataForEdit}
                                                        data={data}
                                                        isLoad={isLoad}/>}/>
                <Route path={`/tehzadanie/edit`} element={<EditComponent
                                                         readOnly={readOnly}
                                                         data={dataForEdit}/>}

                />
            </Routes>

        </div>
    </div>;
};

export default ContainerComponent;