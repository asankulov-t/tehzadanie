import React, {ChangeEvent, useState} from 'react';
import {useForm} from "react-hook-form";
type FormValues={
    value:string,
    name:string,
    reg:any
}
const EItem = (props:FormValues) => {
    const { register,setValue } = useForm<FormValues>();
    let [value,setvalue]=useState(props.value)
    return (
        <div>
            <p>{props.name}</p>
            <input value={value}
                   {...props.reg}
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                       setvalue(e.currentTarget.value)
                   }}
            />
        </div>
    );
};

export default EItem;