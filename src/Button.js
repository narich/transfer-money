import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <button
                className={this.props.styleButton}
                onClick={this.props.onClick} >
                {this.props.valueButton}
            </button>
        );
    }
}

export default Button;
