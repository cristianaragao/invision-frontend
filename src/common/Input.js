import React, { Fragment } from 'react';

import { style } from './styles.css';

export function Input({ error, id, placeholder, value, onChange, type }){

    const partName = id.split('-');

    return(
        <Fragment>

            <label style={style.labelField}>{placeholder}</label>

            <input
                style={error === partName[1] ? style.error : style.normal }
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {error === partName[1] && value === "" ? <label style={style.label}>This field cannot be empty!</label> : <label style={style.label}></label>}

        </Fragment>
    )

}