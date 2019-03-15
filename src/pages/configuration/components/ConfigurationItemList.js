import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';
import Config from '../../../configuration/Config.js';

class ConfigurationItemList extends Component {
    render() {
        const items = Object.keys(Config).map((key) => 
            <ConfigurationItem key={"ci" + key} name={key} value={Config[key]} />
        );  
            
        return (items);
    }
}
  
export default ConfigurationItemList;