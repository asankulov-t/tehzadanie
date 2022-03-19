export type Geo ={
    lat: string;
    lng: string;
}

export type Address ={
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export type Company ={
    name: string;
    catchPhrase: string;
    bs: string;
}

export type RootObject ={
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export type UsersType={
    data: Array<RootObject>
    isLoading:boolean
    editMode:boolean
}

export interface Objtype {
    name: string;
    username: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
}
