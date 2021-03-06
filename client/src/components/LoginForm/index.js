import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'

class LoginForm extends React.Component {
	// refs
	// form: null;
	// usernameElem: null;
	// passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
			
				<form>
					<div>
					{/* ref={(elem) => this.form = elem} onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}; */}
				</div>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						<Link to="/pagetwo"><button className="btn btn-success loginbtn" type='submit'>
							DeDe Says "Let's Do This!
						</button></Link>
					</div>
 			
				</form>
			
		)
	}
}

export default LoginForm