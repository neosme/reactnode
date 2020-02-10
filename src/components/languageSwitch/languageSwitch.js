import 'antd/dist/antd.css';
import React, {Component} from 'react';
import {Switch} from 'antd';

export class LanguageSwitch extends Component {

    onSwitchChange = (event) => {
        if(event === true){
            this.props.onUpdate('en');    
        }else{
            this.props.onUpdate('fr');
        }
    }

    render() {

        return (
            <div className='switchDiv'>
                <Switch checkedChildren="en" unCheckedChildren="fr" defaultChecked 
                        onChange={this.onSwitchChange}/>
            </div>
        );
    }
}

export default LanguageSwitch;
