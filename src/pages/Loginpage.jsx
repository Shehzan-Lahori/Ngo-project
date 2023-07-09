import smileLady from "../images/susan-g-komen-3-day-CFkrwz1M_0s-unsplash.jpg";
import lock from "../images/padlock-1.png";
import eye from "../images/hide-1.png";
import email from "../images/email-1.png";
const Loginpage = () => {
  return (
    <div className="loginPage">
      <div className="login-col">
        <div className="loginImage">
          <img src={smileLady} alt="view problem" />
        </div>
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
        <div className="login-right">
          <div className="login-heading">
            <h1 className="welcome">Welcome back!</h1>
            <p>trust lorem ipsum </p>
          </div>
          <div className="loginForm">
            <img src={eye} alt="eye" className="eye" />
            <img src={lock} alt="lock" className="lock" />
            <img src={email} alt="email" className="email" />
            <input
              type="text"
              className="email-input"
              placeholder="you@example.com"
            />
            <input
              type="text"
              className="password-input"
              placeholder="At least 8 characters"
            />
            <p className="forgot-pass">Forgot Password?</p>

            <input type="button" value="Login" className="login-btn" />
            <div className="align-signup">
              <p className="no-account">Don’t have an account?</p>
              <p className="signup">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
