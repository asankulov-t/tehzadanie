import axios from "axios";
import {RootObject} from "../types";

//you can tets put request in local server 'http://localhost:3000' but you need to start json server: json-server --watch db.json
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    withCredentials:true,
    headers: {'X-Custom-Header': 'foobar',
              'Content-type': 'application/json; charset=UTF-8'
    }
});

export const APIS={
    getUsers(){
        return instance.get<Array<RootObject>>('/users')
    },
    updateUserData(id:number,obj:RootObject){
        return instance.put<RootObject>(`/users/${id}/`,JSON.stringify(obj))
    }
}