const layout = require("../layout");
const { getError } = require("../../helper");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
    <div class="container">
    <div class="card">
        <div class="user signup_form">
            <div class="form">
                <div class="flag-text"> <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select> </div>
                <div class="text_signup">
                    <h2>Sign up for free</h2>
                    <p>Already have an account <a href="/accounts/login" class="signin-click">Sign In</a></p>
                </div>
                <form method="POST">
                <div class="input-text-signup"> <input type="text" name="name" required> <i class="fa fa-user"></i><div class="danger">${getError(errors, 'name')}</div>  <label>Full Name</label> </div>
                <div class="input-text-signup"> <input type="text" name="email" required> <i class="fa fa-envelope-o"></i><div class="danger">${getError(errors, 'email')}</div> <label>Enter Your e-mail</label> </div>
                <div class="input-text-signup"> <input type="password" name="Password" id="password_input" required> <i class="fa fa-eye-slash"></i><div class="danger">${getError(errors, 'Password')}</div> <label>Password</label> </div>
                <div class="input-text-signup"> <input type="password" name="cnfPassword" id="password_input" required> <i class="fa fa-eye-slash"></i><div class="danger">${getError(errors, 'cnfPassword')}</div> <label>Confirm Password</label> </div>
                <div class="signup-button"> <button>Registre Your Account</button> </div>
                <div class="signup-button"> <button>Signup With Google</button> </div>
                </form>
                <div class="policy">
                    <p>By clicking Sign up,you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Use Policy</a> ,including our <a href="#">Cookie Use</a>. </p>
                </div>
            </div>
            <div class="image-box"> <img src="https://imgur.com/KLu8tNX.jpg"> </div>
        </div>
    </div>
</div>
        `,
  });
};
