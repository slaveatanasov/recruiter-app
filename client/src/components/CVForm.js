import React from "react";
import axios from "axios";

export class CVForm extends React.Component {
	constructor(){
		super();
		this.state = {
			first_name: "",
			last_name: "",
			birth_date: "",
			email: "",
			phone: "",
			location_country: "",
			location_city: "",
			location_zip_code: "",
			location_address: "",
			education_institution: "",
			education_level: "",
			education_degree: "",
			education_start_at: "",
			education_finish_at: "",
			experience_position: "",
			experience_job_description: "",
			experience_tags: "",
			experience_employer: "",
			experience_start_at: "",
			experience_finish_at: "",
			skills_languages: "",
			skills_communication_skills: "",
			skills_organizational_skills: "",
			skills_digital_skills: "",
			errors: ""
		}
	}

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitForm = (e) => {
		let cv = {...this.state};
		cv.location_zip_code = parseInt(cv.location_zip_code);
		axios.post('http://127.0.0.1:80/cvs', cv)
		.then (res => console.log(res))
		.then(res => this.props.history.push('/dashboard'))
		.catch(err => console.log(err.response.data));
	}

	render() {
		return (
			<div className="cv-form">
				<div className="cv-icon-div">
					<img src={require("../assets/images/cv-logo.png")} className="cv-icon" alt="" />
				</div>
					<h1>Create your CV</h1>
					<br />
				<form>
					<h3 className="cv-form-section">General info</h3>
					<br />
					<p>First name</p>
					<input type="text" name="first_name" onChange={this.handleChange} />
					<p>Last name</p>
					<input type="text" name="last_name" onChange={this.handleChange} />
					<p>Birth date</p>
					<input type="date" name="birth_date" onChange={this.handleChange} />
					<p>Email</p>
					<input type="text" name="email" onChange={this.handleChange} />
					<p>Telephone number</p>
					<input type="text" name="phone" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Location</h3>
					<br />
					<p>Country</p>
					<input type="text" name="location_country" onChange={this.handleChange} />
					<p>City</p>
					<input type="text" name="location_city" onChange={this.handleChange} />
					<p>ZIP Code</p>
					<input type="text" name="location_zip_code" onChange={this.handleChange} />
					<p>Address</p>
					<input type="text" name="location_address" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Education</h3>
					<br />
					<p>Institution</p>
					<input type="text" name="education_institution" onChange={this.handleChange} />
					<p>Level of education</p>
					<input type="text" name="education_level" onChange={this.handleChange} />
					<p>Type of degree</p>
					<input type="text" name="education_degree" onChange={this.handleChange} />
					<p>Year started</p>
					<input type="date" name="education_start_at" onChange={this.handleChange} />
					<p>Year ended</p>
					<input type="date" name="education_finish_at" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Experience</h3>
					<br />
					<p>Position</p>
					<input type="text" name="experience_position" onChange={this.handleChange} />
					<p>Job description</p>
					<textarea id="job-description" name="experience_job_description" rows="5" cols="20" onChange={this.handleChange} />
					<p>Tags</p>
					<input type="text" name="experience_tags" placeholder="(separate tags by empty space)" onChange={this.handleChange} />
					<p>Employer</p>
					<input type="text" name="experience_employer" onChange={this.handleChange} />
					<p>Year started</p>
					<input type="date" name="experience_start_at" onChange={this.handleChange} />
					<p>Year ended</p>
					<input type="date" name="experience_finish_at" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Skills</h3>
					<br />
					<p>Languages</p>
					<input type="text" name="skills_languages" onChange={this.handleChange} />
					<p>Communication Skills</p>
					<input type="text" name="skills_communication_skills" onChange={this.handleChange} />
					<p>Organizational Skills</p>
					<input type="text" name="skills_organizational_skills" onChange={this.handleChange} />
					<p>Digital Skills</p>
					<input type="text" name="skills_digital_skills" onChange={this.handleChange} />
					<br />
					<button type="button" onClick={this.submitForm} className="button-create">Create CV</button>
				</form>
			</div>
		)
	}
}
