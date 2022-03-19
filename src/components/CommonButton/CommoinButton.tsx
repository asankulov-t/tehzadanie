import React from 'react';
import {NavLink} from "react-router-dom";
import s from './CommoinButton.module.css';

type CommoinButtonType = {
    callBack?: () => void
    name: string,
    link?: string|number
}
const CommoinButton = (props: CommoinButtonType) => {
    return (
        <div className={s.wrap}>
            <button onClick={props.callBack&&props.callBack}>
                <NavLink to={`${props.link?props.link:'/'}`}>{props.name}
                </NavLink>
            </button>
        </div>
    );
};

export default CommoinButton;