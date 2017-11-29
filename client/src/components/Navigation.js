import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="logo"></div>
                <ul className="link">
                    { !this.props.connected && <li key="con"><Link to="/accounts">Se connecter</Link></li> }
                    { this.props.connected && [<li key="acc"><Link to="/accounts">Ma Synthese</Link></li>, <li key="disc"><Link to="/disconnect">Deconnexion</Link></li>] }
                </ul>
            </nav>
        );
    }
}

export default Navigation;