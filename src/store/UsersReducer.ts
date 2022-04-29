import {Address, Company, Geo, RootObject, UsersType} from "../types";
import {Dispatch} from "redux";
import {APIS} from "../DAL/Api";

let initialState:UsersType={
    data: [
        // {
        //     id: 1,
        //     name: 'Саша',
        //     username: 'Gringo',
        //     email: 'gringo@mail.ru',
        //     address: {
        //         street: 'Baker',
        //         suite: 'fd',
        //         city: 'Tashkent',
        //         zipcode: '1597',
        //         geo: {
        //             lat: 'lat',
        //             lng: 'lng'
        //         }
        //     },
        //     phone: '15897',
        //     website: 'Facebook.com',
        //     company: {
        //         name: 'Uptime',
        //         catchPhrase: '24 on 7',
        //         bs: 'dsda'
        //     }
        // }
    ],
    isLoading:false,
    editMode:false
}

type GetUsersType={
    type:'GET_USERS',
    data:Array<RootObject>
}
type SetEditMode={
    type:'SET_EDIT_MODE',
    mode:boolean
}
type GetByCityType={
    type:'GET_BY_CITY',
}
type GetUserType={
    type:'GET_USER',
    id:number
}
type GetByCompanyType={
    type:'GET_BY_COMPANY',
}
type Ations=GetUsersType|GetUserType|GetByCityType|GetByCompanyType|SetEditMode
export const getUserAct=(data:Array<RootObject>)=>{
    return{
        type:'GET_USERS',
        data
    }
}
export const setEditModeAct=(mode:boolean)=>{
    return{
        type:'SET_EDIT_MODE',
        mode
    }
}
export const sortByCity=()=>{
    return{
        type:'GET_BY_CITY',
    }
}
export const getUser=(id:number)=>{
    return{
        type:'GET_USER',
        id
    }
}



export const sortByCompany=()=>{
    return{
        type:'GET_BY_COMPANY'
    }
}

const UsersReducer = (state=initialState,action:Ations)=>{
    switch (action.type) {
        case "GET_USERS":
            return {...state, data: action.data, isLoading: true}
        case "GET_BY_CITY":
            return {
                ...state,data: [...state.data.sort((a,b)=>a.address.city>b.address.city?1:-1)]
                ,isLoading: true
            }
        case "GET_BY_COMPANY":
            return {
                state,data: [...state.data.sort((a,b)=>a.company.name>b.company.name?1:-1)]
                ,isLoading: true
            }
        case "GET_USER":
            return {
                state,data:[...state.data.filter((u)=>u.id==action.id)], isLoading: true
            }
        case "SET_EDIT_MODE":
            return {
                state,editMode:action.mode
            }
        default:
            return state
    }
}

export const getUsersThunk = () => {
    return (dispatch:Dispatch) => {
       APIS.getUsers().then(res=>{
           dispatch(getUserAct(res.data))
       })
    };
};

export default UsersReducer;