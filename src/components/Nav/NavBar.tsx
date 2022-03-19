import React from 'react';
import  s from './NavBar.module.css'
import CommoinButton from "../CommonButton/CommoinButton";
type NavBarTypes={
    sortByCitys:()=>void
    sortByCompanies:()=>void
}
const NavBar = (props:NavBarTypes) => {

    return (
        <div className={s.block}>
            <h4>Сортировка</h4>
           <CommoinButton link={'/tehzadanie'} callBack={props.sortByCitys} name={'по городу'}/>
           <CommoinButton link={'/tehzadanie'} callBack={props.sortByCompanies} name={'по компании'} />
        </div>
    );
};

export default NavBar;