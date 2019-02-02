import React from 'react';
import axios from 'axios';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount() {
        console.log(this.props);
    }

    render(){
        return (
            <div id="navigation">
                <a className="nav-image form-inline" href="/">
                    <img src="https://lh3.googleusercontent.com/proxy/ObbegQ6HOCDa6LtZzNOM5SQ0QeHXCRkJsyBmIsgtKXxJa_sUsiUGc0Uh_kC4tDMyJ1U0QEsE9-axlfC-4CrupGaCxWbcUOL62LKQuOuuK5VFX3Wq28P7ssfRH17GoVt0gOkBBNdJ3W3Dazv_dc2u93AmgC25GBFGIIsbcALfmyTK8yHGB_UDH9Gvv4Cd_A3suJsMIJcP2GMPq60495M=s32-pd-e365-pc0xffffff" />
                </a>
                <div className="search-bar form-inline">
                    <input
                    className="search-input"
                    type="text"
                    placeholder="Search Diddit"
                    onKeyPress={(e) => {
                        if(e.key == 'Enter') {
                            this.props.handleSearchInputChange(e.target.value);
                        }
                    }}
                    />
                </div>
            </div>
        );
    }
}