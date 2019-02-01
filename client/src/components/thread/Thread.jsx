import React from 'react';
import axios from 'axios';

export default class Thread extends React.Component {
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
        return(
            <div id="Thread">

            </div>
        );
    }
}