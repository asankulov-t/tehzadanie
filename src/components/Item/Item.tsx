import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Item.module.css'

type ItemPropsType={
    name:string,
    city:string,
    companyName:string
    sendId:(id:number)=>void
    id:number
}

const Item = (props:ItemPropsType) => {
    return (
        <div className={s.item}>
            <p>ФИО: <span>{props.name}</span></p>
            <p>город: <span>{props.city}</span></p>
            <p>компания: <span>ОсОО "{props.companyName}"</span> <NavLink onClick={()=>props.sendId(props.id)} to={`edit`}>Подробнее</NavLink></p>
        </div>
    );
};

export default Item;