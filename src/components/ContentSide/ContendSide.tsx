import React from 'react';
import  s from './ContendSide.module.css'
import Item from "../Item/Item";
import {RootObject} from "../../types";


type ContendSideType={
    data:Array<RootObject>
    isLoad:boolean
    getUser:(id:number)=>void
}

const ContendSide = (props:ContendSideType) => {
    let totalUsers=props.data.length;
    console.log(totalUsers)
    return (
        <div>
            <div>

                    {props.data && props.data.map((item: RootObject) => {
                        return (
                            <div>
                                <Item sendId={props.getUser}
                                      id={item.id}
                                      key={item.id}
                                      name={item.name}
                                      city={item.address.city}
                                      companyName={item.company.name}/>
                            </div>
                        )
                    })}
                    <p className={s.total}>{props.isLoad?`Всего ${totalUsers} пользователей`:'Загрузка...'}</p>

            </div>

        </div>
    );
};

export default ContendSide;