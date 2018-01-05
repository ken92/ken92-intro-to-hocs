import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Header extends Component {
	authButton() {
		const text = this.props.logged_in? "Sign Out" : "Sign In";
		return <button onClick={() => {this.props.authenticate(!this.props.logged_in)}}>{text}</button>;
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>

					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>

					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		logged_in: state.authenticated
	};
};

export default connect(mapStateToProps, actions)(Header);
