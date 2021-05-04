import React, { Fragment } from 'react';

import { style } from './styles.css';

export function Input({ error, id, label, placeholder, value, onChange, type }){

    const partName = id.split('-');

    return(
        <Fragment>

            <label style={style.labelField}>{label}</label>

            <input
                style={error === partName[1] ? style.error : style.normal }
                id={id}
                type={type}
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={onChange}
            />
            
        </Fragment>
    )

}