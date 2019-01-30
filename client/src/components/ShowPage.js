import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { ShowCV } from './ShowCV';
import { ShowCompany } from './ShowCompany';

export class ShowPage extends React.Component {
	state = {
		cv: "",
		company: ""
	}

	componentDidMount() {
		if (this.props.auth.user.type === "company") {
			const { id } = this.props.match.params;
			axios.get(`http://127.0.0.1:80/cvs/${id}`)
			.then((res) => {
				this.setState(() => ({ cv: res.data }))
			})
		} else {
			const { id } = this.props.match.params;
			axios.get(`http://127.0.0.1:80/companies/${id}`)
				.then((res) => {
					this.setState(() => ({ company: res.data }))
				})
		}
	}

	render() {
		const { user } = this.props.auth;
		return (
			<div>
				{user.type === "company" ? <ShowCV cv={this.state.cv} /> : <ShowCompany company={this.state.company} />}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

ShowPage = connect(mapStateToProps, { ShowCV, ShowCompany })(ShowPage)