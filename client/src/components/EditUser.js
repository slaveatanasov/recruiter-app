import React from "react";
import { connect } from "react-redux";
import { updateUser } from '../actions/authActions';

export class EditUser extends React.Component {
	constructor(props) {
        super();
		this.state = {
            id: props.auth.user.id,
			first_name: props.auth.user.first_name,
			last_name: props.auth.user.last_name,
			email: props.auth.user.email,
			password: ""
			};
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
    }
    
	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({
                ...this.state})
		}
	}

    handleChange(e) {
		this.setState({
		[e.target.name]: e.target.value
		});
	}

	submitForm(e) {
		let user = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		};
		this.props.updateUser(user, this.props.history); 
	}

    render() {
        return(
            <div className="forms-container" >
                <div className="edit-box">
                    <div className="top-input-box">
                        <img src={require("../assets/images/sign-up.png")} className="sign-up-logo" alt="" />
                        <p className="register-section">Edit user account</p>
                        <form>
                            <div className="input-box">
                                <div className="edit-user-info-box">
                                    <p>First name:</p>
                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="edit-user-info-box">
                                    <p>Last name:</p>
                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="edit-user-info-box">
                                    <p>Email:</p>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="edit-user-info-box">
                                    <p>Password:</p>
                                    <input type="password" name="password" onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="button" onClick={this.submitForm} className="button-signup">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

EditUser = connect(mapStateToProps, { updateUser })(EditUser)