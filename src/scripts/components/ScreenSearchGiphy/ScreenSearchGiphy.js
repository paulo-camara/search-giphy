import React from 'react';
import PropTypes from 'prop-types';

import { InputFilter } from '../Shared/InputFilter/InputFilter';

export class ScreenSearchGiphy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                valueInput: '',
            }
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onClickFunc = this.onClickFunc.bind(this);
    }

    onChangeValue(event) {
        this.setState({
            data: {
                valueInput: event.target.value
            }
        })
    }

    onClickFunc() {
        console.log('Send');
    }

    render() {
        const { valueInput } = this.state.data;

        return (
            <div>
                <InputFilter
                    className={"screen=search-giphy"}
                    onChange={this.onChangeValue}
                    onClick={this.onClickFunc}
                    value={valueInput}
                />
            </div>
        )
    }
}