import React from "react";

export const ShowCV = (props) => {
    return (
        <React.Fragment>
            <div className="show-cv-company-view-wrapper">
                <div className="show-cv-company-view">
                    <div className="cv-form">
                        <div className="cv-icon-div">
                            <img src={require("../assets/images/cv-logo.png")} className="cv-icon" alt="" />
                        </div>
                        <div className="dashboard-item">
                            <h2><span>{props.cv.first_name + " " + props.cv.last_name}'s CV</span></h2>
                            <br />
                        </div>
                        <form>
                            <h3 className="cv-form-section">General info</h3>
                            <br />
                            <p>First name</p>
                            <input type="text" name="first_name" defaultValue={props.cv.first_name} readOnly />
                            <p>Last name</p>
                            <input type="text" name="last_name" defaultValue={props.cv.last_name} readOnly />
                            <p>Birth date</p>
                            <input type="text" name="birth_date" defaultValue={props.cv === "" ? "" : new Date(props.cv.birth_date).toLocaleDateString()} readOnly />
                            <p>Email</p>
                            <input type="text" name="email" defaultValue={props.cv.email} readOnly />
                            <p>Telephone number</p>
                            <input type="text" name="phone" defaultValue={props.cv.phone} readOnly />
                            <br />
                            <h3 className="cv-form-section">Location</h3>
                            <br />
                            <p>Country</p>
                            <input type="text" name="country" defaultValue={props.cv.location_country} readOnly />
                            <p>City</p>
                            <input type="text" name="city" defaultValue={props.cv.location_city} readOnly />
                            <p>ZIP Code</p>
                            <input type="text" name="zip_code" defaultValue={props.cv.location_zip_code} readOnly />
                            <p>Address</p>
                            <input type="text" name="address" defaultValue={props.cv.location_address} readOnly />
                            <br />
                            <h3 className="cv-form-section">Education</h3>
                            <br />
                            <p>Institution</p>
                            <input type="text" name="institution" defaultValue={props.cv.education_institution} readOnly />
                            <p>Level of education</p>
                            <input type="text" name="level" defaultValue={props.cv.education_level} readOnly />
                            <p>Type of degree</p>
                            <input type="text" name="degree" defaultValue={props.cv.education_degree} readOnly />
                            <p>Year started</p>
                            <input type="text" name="start_at" defaultValue={props.cv === "" ? "" : new Date(props.cv.education_start_at).toLocaleDateString()} readOnly />
                            <p>Year ended</p>
                            <input type="text" name="finish_at" defaultValue={props.cv === "" ? "" : new Date(props.cv.education_finish_at).toLocaleDateString()} readOnly />
                            <br />
                            <h3 className="cv-form-section">Experience</h3>
                            <br />
                            <p>Position</p>
                            <input type="text" name="position" defaultValue={props.cv.experience_position} readOnly />
                            <p>Job description</p>
                            <input type="text" name="job_description" defaultValue={props.cv.experience_job_description} readOnly />
                            <p>Tags</p>
                            <input type="text" name="tags" defaultValue={props.cv.experience_tags} readOnly />
                            <p>Employer</p>
                            <input type="text" name="employer" defaultValue={props.cv.experience_employer} readOnly />
                            <p>Year started</p>
                            <input type="text" name="start_at" defaultValue={props.cv === "" ? "" : new Date(props.cv.experience_start_at).toLocaleDateString()} readOnly />
                            <p>Year ended</p>
                            <input type="text" name="finish_at" defaultValue={props.cv === "" ? "" : new Date(props.cv.experience_start_at).toLocaleDateString()} readOnly />
                            <br />
                            <h3 className="cv-form-section">Skills</h3>
                            <br />
                            <p>Languages</p>
                            <input type="text" name="languages" defaultValue={props.cv.skills_languages} readOnly />
                            <p>Communication Skills</p>
                            <input type="text" name="communication_skills" defaultValue={props.cv.skills_communication_skills} readOnly />
                            <p>Organizational Skills</p>
                            <input type="text" name="organizational_skills" defaultValue={props.cv.skills_organizational_skills} readOnly />
                            <p>Digital Skills</p>
                            <input type="text" name="digital_skills" defaultValue={props.cv.skills_digital_skills} readOnly />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}