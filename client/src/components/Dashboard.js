import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from '../actions/authActions';

export class Dashboard extends React.Component {
    deleteUser = (e) => {
        this.props.deleteUser(this.props.history)
    }

    render() {
        const { user } = this.props.auth;
        const applicantLinks = (
            <div className="dashboard-item">
                <ul>
                    <Link className="user-panel-link" to="/edituser"><li className="dashboard-button">Edit user account</li></Link>
                    <Link className="user-panel-link" to="/cv-form"><li className="dashboard-button">Create CV</li></Link>
                    <Link className="user-panel-link" to={`/editcv/${user.id}`}><li className="dashboard-button">Edit CV</li></Link>
                    <li className="dashboard-button" onClick={this.deleteUser}>Delete account</li>
                </ul>
            </div>
        );
        const companyLinks = (
            <div className="dashboard-item">
                <ul>
                <Link className="user-panel-link" to="/edituser"><li className="dashboard-button">Edit user account</li></Link>
                <Link className="user-panel-link" to="/company-form"><li className="dashboard-button">Create company profile</li></Link>    
                <Link className="user-panel-link" to={`/editcompany/${user.id}`}><li className="dashboard-button">Edit company profile</li></Link>    
                <li className="dashboard-button" onClick={this.deleteUser}>Delete account</li>
                </ul>
            </div>
        );

        return(
            <div className="container">
                <div className="dashboard-wrapper">
                    <div className="dashboard-item">
                        <h1>Dashboard</h1>
                        <h2>Hello, <span>{user.first_name}</span></h2>
                    </div>
                    <div className="user-panel">
                        {user.type === 'applicant' ? applicantLinks : companyLinks}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

Dashboard = connect(mapStateToProps, { deleteUser })(Dashboard)