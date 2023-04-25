const layout = require("../layout");
const { getError } = require("../../helper");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
    <div class="container">
    <div class="card">
    <div class="user signin_form">
    <div class="image-box"> <img src="https://imgur.com/FUfgyLv.jpg"> </div>
    <div class="form">
        <div class="flag-text"> <select>
                <option>English</option>
                <option>Hindi</option>
            </select> </div>
        <div class="text_signup">
            <h4>Start your journey</h4>
            <h2>Welcome back</h2>
            <p>Don't have an account?<a href="/accounts/signup" class="signup-click"> Sign Up</a></p>
        </div>
        <form method="POST">
        <div class="input-text-signup"> <input type="text" name="email" required> <i class="fa fa-envelope-o"></i><div class="danger">${getError(
          errors,
          "email"
        )}</div> <label>E-mail</label> </div>
        <div class="input-text-signup"> <input type="password" name="Password" id="password_input_signin" required> <i class="fa fa-eye-slash change_eye"></i><div class="danger">${getError(
          errors,
          "Password"
        )}</div> <label>Password</label> </div>
        <div class="signup-button"> <button>Sign in</button> </div>
        <div class="policy">
            <p>By clicking Sign In,you agree to our <a href="#">Terms & Condation</a> and that you have read our <a href="#">Data Use Policy</a> ,including our <a href="#">Cookie Use</a>. </p>
        </div>
        </form>
    </div>
</div>
    </div>
</div>
        `,
  });
};
