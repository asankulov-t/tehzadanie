import React, {useState} from 'react';
import {Objtype, RootObject} from "../types";
import s from './EditComponent.module.css'
import EditItem from "./EditItem";
import {useDispatch} from "react-redux";
import {APIS} from "../DAL/Api";

type EditComponentType = {
    data: Array<RootObject>
    readOnly:boolean
}
const EditComponent = (props: EditComponentType) => {
    const takeObj = (datas:Objtype)=> {
        let editVersion=props.data.map((it)=>({...it,name:datas.name,username:datas.username,email:datas.email,
            address:{...it.address,
                street:datas.street,city:datas.city,zipcode:datas.zipcode},phone:datas.phone,website:datas.website}))
        let editData=Object.assign({},editVersion[0])
        console.log(editData)
       APIS.updateUserData(editData.id,editData)
    }

    return (
        <div className={s.edit}>
            {props.data.length===0?<h4>Пользователь не найден</h4>:props.data.map((item) => {
                    return <EditItem readOnly={props.readOnly}
                                     key={item.id}
                                     name={item.name}
                                     username={item.username}
                                     email={item.email}
                                     street={item.address.street}
                                     city={item.address.city}
                                     zipcode={item.address.zipcode}
                                     phone={item.phone}
                                     website={item.website}
                                     takeObj={takeObj}
                    />
                })}
            </div>
            )
            // <div className={s.edit}>
            //     <EditItem/>
            // </div>
            };

            export default EditComponent;