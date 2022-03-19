import * as React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import s from './EditItem.module.css';
import {ChangeEvent, useState} from "react";
import {Objtype} from "../types";

type FormValues = {
    name: string,
    username: string
    email: string
    street: string
    city: string
    zipcode: string
    phone: string
    website: string
    takeObj:(datas: Objtype)=>void
    readOnly:boolean
};

export default function EditItem(props: FormValues) {
    const {register, handleSubmit,formState: { errors }} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        errors&&props.takeObj(data);
    }
    let [commentValue,setCommentValue]=useState('')
    let[name,SetName]=useState(props.name)
    let[userName,SetUserName]=useState(props.username)
    let[email,setEmail]=useState(props.email)
    let[street,setStreet]=useState(props.street)
    let[city,setCity]=useState(props.city)
    let[zipcode,setZipcode]=useState(props.zipcode)
    let[phone,setPhone]=useState(props.phone)
    let[website,setWebsite]=useState(props.website)



    return (
        <div className={s.global}>
            <div className={props.readOnly?s.edit+' '+s.off:s.edit}>
                <form>
                    <p>Name</p>
                    <input readOnly={props.readOnly} {...register('name')} value={name}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => SetName(e.currentTarget.value)}
                           className={name==''?s.error:s.input}
                    />
                    <p>User name</p>
                    <input readOnly={props.readOnly}  {...register('username',{
                        required:'Empty field'
                    })} value={userName}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => SetUserName(e.currentTarget.value)}
                           className={userName==''?s.error:s.input}
                    />
                    <p>E-name</p>
                    <input readOnly={props.readOnly}  {...register('email')} value={email}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                           className={email==''?s.error:s.input}
                    />
                    <p>Street</p>
                    <input readOnly={props.readOnly}  {...register('street')} value={street}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.currentTarget.value)}
                           className={street==''?s.error:s.input}
                    />
                    <p>City</p>
                    <input readOnly={props.readOnly}  {...register('city')} value={city}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.currentTarget.value)}
                           className={city==''?s.error:s.input}
                    />
                    <p>Zipcode</p>
                    <input readOnly={props.readOnly}  {...register('zipcode')} value={zipcode}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setZipcode(e.currentTarget.value)}
                           className={zipcode==''?s.error:s.input}
                    />
                    <p>Phone</p>
                    <input readOnly={props.readOnly}  {...register('phone')} value={phone}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value)}
                           className={phone==''?s.error:s.input}
                    />
                    <p>Website</p>
                    <input readOnly={props.readOnly}  {...register('website')} value={website}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite(e.currentTarget.value)}
                           className={website==''?s.error:s.input}
                    />
                    <p>Comment</p>
                    <textarea value={commentValue}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentValue(e.currentTarget.value)}>

                    </textarea>
                </form>
            </div>
            <button disabled={props.readOnly} className={props.readOnly?s.disabled:s.activeButton} onClick={handleSubmit(onSubmit)}>
                Отправить
            </button>
        </div>
    );

}
