import React from "react";
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import isEmpty from '../utils/isEmptyValidation';

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Password = props => {
	return (
		<p>
			<input
				onChange={props.handleChange}
				value={props.password}
				name="password"
				type="password"
				placeholder="Password"
			/>
		</p>
	);
};
 
const Email = props => {
	return (
		<p>
			<input
				onChange={props.handleChange}
				value={props.email}
				name="email"
				type="email"
				placeholder="Email"
			/>
		</p>
	);
};

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: ""
			};

			this.addNotification = this.addNotification.bind(this);
			this.notificationDOMRef = React.createRef();	
	}
	
	

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (!isEmpty(this.state.errors))
			this.addNotification(this.state.errors.errors);
	}

	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value
		});
	}

	submitForm = (e) => {
		e.preventDefault();
		let user = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(user);
		// console.log(this.state.errors);
	
	}

	addNotification(message) {
		this.notificationDOMRef.current.addNotification({
			title: "Error",
			message: message,
			type: "danger",
			insert: "top",
			container: "bottom-center",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: { duration: 2000 },
			dismissable: { click: true }
		});
		this.setState({
			...this.state,
			errors: ""
		})
  }

	render() {
		return (
			<div className="forms-container">
				<ReactNotification ref={this.notificationDOMRef} />
			<div className="log-in-box">
				<div className="top-input-box">
					<img src={require("../assets/images/log-in.png")} alt="login" className="log-in-logo" />
						<h2>Log in</h2>

					<form onSubmit={this.submitForm} >
						<div className="input-box">
							<Email handleChange={this.handleChange} value={this.state.email} onChange={this.onEmailChange} />
							<span><i className="fas fa-envelope"></i></span>
						</div>

						<div className="input-box">
							<Password onChange={this.onPasswordChange} value={this.state.password} handleChange={this.handleChange} />
							<span><i className="fas fa-unlock-alt"></i></span>
						</div>
						<button className="button-login" type="submit">Log in</button>
					</form>
					
				</div>
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

Login = connect(mapStateToProps, { loginUser })(Login)