import React from "react";
import axios from 'axios';

export class EditCV extends React.Component {
	state = {
		cv: ""
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		axios.get(`http://127.0.0.1:80/cvs/user/${id}`)
      .then((cv) => {
		this.setState(() => ({ ...this.state, cv: cv.data}))
	  })
	}

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value } )
	
	submitForm = (e) => {
		let cv = this.state;
		const id = this.state.cv._id;
		axios.put(`http://127.0.0.1:80/cvs/${id}`, cv)
		.then(res => console.log(res))
		.then(res => this.props.history.push('/dashboard'))
		.catch(err => console.log(err))
	}

  render() {
		return (
			<div className="cv-form">
				<div className="cv-icon-div">
					<img src={require("../assets/images/cv-logo.png")} className="cv-icon" alt="" />
				</div>
					<h1>Edit your CV</h1>
					<br />
				<form>
					<h3 className="cv-form-section">General info</h3>
					<br />
					<p>First name</p>
					<input type="text" name="first_name" defaultValue={this.state.cv.first_name} onChange={this.handleChange} />
					<p>Last name</p>
					<input type="text" name="last_name" defaultValue={this.state.cv.last_name} onChange={this.handleChange} />
					<p>Birth date</p>
					<input type="date" name="birth_date" onChange={this.handleChange} />
					<p>Email</p>
					<input type="text" name="email" defaultValue={this.state.cv.email} onChange={this.handleChange} />
					<p>Telephone number</p>
					<input type="text" name="phone" defaultValue={this.state.cv.phone} onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Location</h3>
					<br />
					<p>Country</p>
          <input type="text" name="location_country" defaultValue={this.state.cv.location_country} onChange={this.handleChange} />
					<p>City</p>
					<input type="text" name="location_city" defaultValue={this.state.cv.location_city} onChange={this.handleChange} />
					<p>ZIP Code</p>
					<input type="text" name="location_zip_code" defaultValue={this.state.cv.location_zip_code} onChange={this.handleChange} />
					<p>Address</p>
					<input type="text" name="location_address" defaultValue={this.state.cv.location_address} onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Education</h3>
					<br />
					<p>Institution</p>
					<input type="text" name="education_institution" defaultValue={this.state.cv.education_institution} onChange={this.handleChange} />
					<p>Level of education</p>
					<input type="text" name="education_level" defaultValue={this.state.cv.education_level} onChange={this.handleChange} />
					<p>Type of degree</p>
					<input type="text" name="education_degree" defaultValue={this.state.cv.education_degree} onChange={this.handleChange} />
					<p>Year started</p>
					<input type="date" name="education_start_at" onChange={this.handleChange} />
					<p>Year ended</p>
					<input type="date" name="education_finish_at" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Experience</h3>
					<br />
					<p>Position</p>
					<input type="text" name="experience_position" defaultValue={this.state.cv.experience_position} onChange={this.handleChange} />
					<p>Job description</p>
					<input type="text" name="experience_job_description" defaultValue={this.state.cv.experience_job_description} onChange={this.handleChange} />
					<p>Tags</p>
					<input type="text" name="experience_tags" defaultValue={this.state.cv.experience_tags} onChange={this.handleChange} />
					<p>Employer</p>
					<input type="text" name="experience_employer" defaultValue={this.state.cv.experience_employer} onChange={this.handleChange} />
					<p>Year started</p>
					<input type="date" name="experience_start_at" onChange={this.handleChange} />
					<p>Year ended</p>
					<input type="date" name="experience_finish_at" onChange={this.handleChange} />
					<br />
					<h3 className="cv-form-section">Skills</h3>
					<br />
					<p>Languages</p>
					<input type="text" name="skills_languages" defaultValue={this.state.cv.skills_languages} onChange={this.handleChange} />
					<p>Communication Skills</p>
					<input type="text" name="skills_communication_skills" defaultValue={this.state.cv.skills_communication_skills} onChange={this.handleChange} />
					<p>Organizational Skills</p>
					<input type="text" name="skills_organizational_skills" defaultValue={this.state.cv.skills_organizational_skills} onChange={this.handleChange} />
					<p>Digital Skills</p>
					<input type="text" name="skills_digital_skills" defaultValue={this.state.cv.skills_digital_skills} onChange={this.handleChange} />
					<br />
					<button type="button" onClick={this.submitForm} className="button-create">Save changes</button>
				</form>
			</div>
		)
	}
}
