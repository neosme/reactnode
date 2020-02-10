import React, {Component} from 'react';
import 'antd/dist/antd.css';

export class Alert extends Component {

    //Constructor will be called initially whenever the page is rendered.
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: this.props.errorMessage
        }
    };

    render() {

        const {errorMessage} = this.state;

        return (
            <Alert
                message="Error"
                description= {errorMessage}
                type="error"
                showIcon
            />
        );
    }
}

export default Alert;
