import React, { Component } from 'react';

const Button = (props) => {
    return (
    <button
        className={props.styleButton}
        onClick={props.onClick} >
        {props.valueButton}
    </button>)
}

export default Button;