import React from 'react';

export const ShowCompany = (props) => {
        // Part of alternative option:
        // let date;
        // if (props.company === "") {
        //    date = "";
        // } else {
        //     date = new Date(props.company.established).toLocaleDateString();
        // }
   
    return (
        <React.Fragment>
            <div className="show-cv-company-view-wrapper">
                <div className="show-cv-company-view">
                    <div className="company-details-form">
                        <div className="company-icon-div">
                            <img src={require("../assets/images/company-logo.png")} className="company-icon" alt="" />
                        </div>
                        <div className="dashboard-item">
                            <h2><span>{props.company.company_name}'s company</span></h2>
                            <br />
                        </div>
                        <br />
                        <form>
                            <h3 className="company-form-section">General info</h3>
                            <br />
                            <p>Company name</p>
                            <input type="text" name="company_name" defaultValue={props.company.company_name} readOnly />
                            <p>Year established</p>
                            <input type="text" name="established" defaultValue={props.company === "" ? "" : new Date(props.company.established).toLocaleDateString()} readOnly />
                            {/* <input type="text" name="established" defaultValue={date} readOnly /> Alternative option to have.*/}
                            <p>Email</p>
                            <input type="email" name="email" required defaultValue={props.company.email} readOnly />
                            <p>Website</p>
                            <input type="text" name="website" required defaultValue={props.company.website} readOnly />
                            <p>Telephone number</p>
                            <input type="text" name="phone" defaultValue={props.company.phone} readOnly />
                            <br />
                            <h3 className="company-form-section">Location</h3>
                            <br />
                            <p>Country</p>
                            <input type="text" name="country" defaultValue={props.company.location_country} readOnly />
                            <p>City</p>
                            <input type="text" name="city" defaultValue={props.company.location_city} readOnly />
                            <p>ZIP Code</p>
                            <input type="text" name="zip_code" defaultValue={props.company.location_zip_code} readOnly />
                            <p>Address</p>
                            <input type="text" name="address" defaultValue={props.company.location_address} readOnly />
                            <br />
                            <h3 className="company-form-section">Company information</h3>
                            <br />
                            <p>Industry</p>
                            <input type="text" name="industry" defaultValue={props.company.company_information_industry} readOnly />
                            <p>Scope of work</p>
                            <input type="text" name="scope_of_work" defaultValue={props.company.company_information_scope_of_work} readOnly />
                            <p>Number of employees</p>
                            <input type="text" name="no_of_employees" defaultValue={props.company.company_information_no_of_employees} readOnly />
                            <p>Expected number of hires</p>
                            <input type="text" name="expected_hires_per_year" defaultValue={props.company.company_information_expected_hires_per_year} readOnly />
                            <p>Company vision</p>
                            <input type="text" name="company_vision" defaultValue={props.company.company_information_vision} readOnly />
                            <p>Portfolio</p>
                            <input type="text" name="portfolio" defaultValue={props.company.company_information_portfolio} readOnly />
                            <br />
                            <h3 className="company-form-section">Opportunities</h3>
                            <br />
                            <p>Programs and projects</p>
                            <input type="text" name="programs_projects" defaultValue={props.company.opportunities_programs_projects} readOnly />
                            <p>HR</p>
                            <input type="text" name="HR" defaultValue={props.company.opportunities_HR} readOnly />
                            <p>Amenities</p>
                            <input type="text" name="amenities" defaultValue={props.company.opportunities_amenities} readOnly />
                            <p>Current openings</p>
                            <input type="text" name="current_openings" defaultValue={props.company.opportunities_current_openings} readOnly />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
