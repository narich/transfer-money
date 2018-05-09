import React, { Component } from 'react';
import style from './App.css'

class Button extends Component {

    render() {
        return (
            <a href="#one">
                        <button
                            className="font-Athiti home-button margin-button"
                            onClick={this.props.setStateEmpty}> กลับสู่หน้าหลัก
                        </button>
            </a>
        );
    }
}

export default Button;
