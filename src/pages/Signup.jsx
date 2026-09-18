
function Signup() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <span className="logo-icon">P</span>
          <span>SmartPark</span>
        </div>

        <div className="auth-heading">
          <h1>Create your account</h1>
          <p>Register to reserve and manage parking slots.</p>
        </div>

        <form className="auth-form">

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

        <a href="/" className="back-home">
          ← Back to Home
        </a>

      </div>

    </div>
  );
}

export default Signup;

