import React from 'react';
import '../../style/SignIn.css';
import $ from 'jquery';
import { Col, Container } from "react-bootstrap";

class SignIn extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    };

    render(){

        
        
        
        $('.login-reg-panel input[type="radio"]').on('change', function() {
            if($('#log-login-show').is(':checked')) {
                $('.register-info-box').fadeOut(); 
                $('.login-info-box').fadeIn();
                
                $('.white-panel').addClass('right-log');
                $('.register-show').addClass('show-log-panel');
                $('.login-show').removeClass('show-log-panel');
                
            }
            else if($('#log-reg-show').is(':checked')) {
                $('.register-info-box').fadeIn();
                $('.login-info-box').fadeOut();
                
                $('.white-panel').removeClass('right-log');
                
                $('.login-show').addClass('show-log-panel');
                $('.register-show').removeClass('show-log-panel');
            }
        });
          
        
        return(
<div>
    <Container>
        <Col style={{marginTop:'400px'}}>

               <div class="login-reg-panel" >

		<div class="login-info-box">
			<h2>Have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-register" for="log-reg-show">Login</label>
			<input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked"/>
		</div>

           

           <div class="register-info-box">
			<h2>Don't have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-login" for="log-login-show">Register</label>
			<input type="radio" name="active-log-panel" id="log-login-show"/>
		</div>

        <div class="white-panel">
			<div class="login-show">
				<h2>LOGIN</h2>
				<input type="text" placeholder="Email"/>
				<input type="password" placeholder="Password"/>
				<input type="button" value="Login"/>
				<a href="">Forgot password?</a>
			</div>

            <div class="register-show">
				<h2>REGISTER</h2>
				<input type="text" placeholder="Email"/>
				<input type="password" placeholder="Password"/>
				<input type="password" placeholder="Confirm Password"/>
				<input type="button" value="Register"/>
			</div>
            </div>
</div>
</Col>
</Container>
</div>
        )
    
    }
}
export default SignIn;