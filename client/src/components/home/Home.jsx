import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
        this.getTopThreads = this.getTopThreads.bind(this);
    };

    getTopThreads() {

    }

    componentDidMount() {

    }

    render(){
        return (
            <div id="homepage">

            </div>
        );
    }
}