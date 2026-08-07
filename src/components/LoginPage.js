import "./LoginPage.css";

function LoginPage() {
  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>
          Sign in to access your reservations and enjoy a personalized dining experience.
        </p>

        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" aria-label="Sign In">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;