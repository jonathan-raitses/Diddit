
import React from 'react';
import NavbarContainer from '../containers/navbarContainer.js';
import changeTop from '../actions/topThreadsAction.js';
import changeNew from '../actions/newThreadsAction.js';
import store from '../store/store.js';


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
        this.getTopThreads = this.getTopThreads.bind(this);
    };

    getTopThreads() {

    }

    componentWillMount() {
        store.dispatch(changeTop({name:"lol"}));
    }

    render(){
        return (
            <div id="main-page">
                <NavbarContainer />
            </div>
        );
    }
}