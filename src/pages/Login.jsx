
function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <span className="logo-icon">P</span>
          <span>SmartPark</span>
        </div>

        <div className="auth-heading">
          <h1>Welcome back</h1>
          <p>Login to manage your parking bookings.</p>
        </div>

        <form className="auth-form">

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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Don't have an account?
          <a href="/signup"> Create an account</a>
        </p>

        <a href="/" className="back-home">
          ← Back to Home
        </a>

      </div>

    </div>
  );
}

export default Login;

