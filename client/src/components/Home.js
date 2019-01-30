import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Home extends React.Component {
  componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

  render() {
    return (
      <div className="container">
        <section id="app-info">
          <div className="container">
            <h1>Welcome to Recruiter App</h1>
            <p>
              Built for both job seekers and employers, Recruiter App will help
              you find job openings or candidates that best fit you!
            </p>
          </div>
        </section>

        <section id="register-section">
          <div className="container">
            <h1>If you are a job seeker or a company representative sign up below.</h1>
            <Link to="/register-user">Sign up</Link>
          </div>
        </section>

        <footer>
          <div className="footer-container">
            <div className="footer">
              <div className="footer-content">
                <div className="footer-content-wrapper">
                  <div className="footer-features">
                    <h2>Companies</h2>
                    <p> Via our system, <br/> companies can pinpoint the <br/> exact type of employee they <br/> are in search for.</p>
                  </div>
                  <div className="footer-features">
                    <h2>Applicants</h2>
                    <p>Via a digital CV searchable by tags, <br/> applicants can present themselves <br/> to a future employer.</p>
                  </div>
                  <div className="footer-features">
                    <h2>About us</h2>
                    <p>We are a company linking <br/> recruits to recruiters, <br/> and vice versa.</p>
                  </div>
                </div>
                  <div className="copyright">
                    <p>Copyright <span>&copy;</span> 2019 Slave Atanasov. All rights reserved.</p>
                  </div>
              </div>  
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content" />
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

Home = connect(mapStateToProps)(Home);