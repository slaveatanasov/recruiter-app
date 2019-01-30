import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { registerNewUser } from '../actions/authActions';

import isEmpty from '../utils/isEmptyValidation';

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export class RegisterUser extends React.Component {
	constructor() {
		super();
		this.state = {
			type: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			errors: ""
		}
		this.addNotification = this.addNotification.bind(this);
		this.notificationDOMRef = React.createRef();	
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors})
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
			type: this.state.type,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		};
		this.props.registerNewUser(user, this.props.history);
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
			<div className="forms-container" >
			<ReactNotification ref={this.notificationDOMRef} />
				<div className="sign-up-box">
					<div className="top-input-box">
						<img src={require("../assets/images/sign-up.png")} className="sign-up-logo" alt="" />
						<p className="register-section">Sign up to Recruiter App</p>

						<div className="input-box">
						<span><i className="fas fa-compass"></i></span>
							<select className="select-user-type" name="type" onChange={this.handleChange}>
								<option value="" disabled selected>Select User Type</option>
								<option className="option-color-selected" value="applicant">Applicant</option>
								<option className="option-color-selected" value="company">Company</option>
							</select>
						</div>

						<form onSubmit={this.submitForm}> 
							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="first_name" placeholder="Your first name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="text" onChange={this.handleChange} name="last_name" placeholder="Your last name" />
								<span><i className="fas fa-file-signature"></i></span>
							</div>

							<div className="input-box">
								<input type="email" onChange={this.handleChange} name="email" placeholder="Your email" />
								<span><i className="fas fa-envelope"></i></span>
							</div>

							<div className="input-box">
								<input type="password" onChange={this.handleChange} name="password" placeholder="Password" />
								<span><i className="fas fa-unlock-alt"></i></span>
							</div>

							<button type="submit" className="button-signup">Sign up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

RegisterUser = connect(mapStateToProps, { registerNewUser })(withRouter(RegisterUser));