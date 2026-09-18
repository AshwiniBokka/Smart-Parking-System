
function Home() {
  return (
    <div className="home-page">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">P</span>
          <span>SmartPark</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
        </nav>

        <div className="nav-actions">
          <a href="/login" className="login-button">
            Login
          </a>

          <a href="/signup" className="signup-button">
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="hero-section">

          <div className="hero-content">

            <div className="hero-badge">
              ✓ Smart & Secure Parking
            </div>

            <h1>
              Park smarter.
              <br />
              <span>Save your time.</span>
            </h1>

            <p>
              Find available parking slots, reserve your space,
              make a secure payment, and get your digital parking
              pass — all in one place.
            </p>

            <div className="hero-buttons">
              <a href="/parking" className="primary-button">
                Find Parking →
              </a>

              <a href="#how-it-works" className="secondary-button">
                How It Works
              </a>
            </div>

          </div>

          {/* Parking Preview */}
          <div className="hero-card">

            <div className="parking-card-header">
              <div>
                <span className="small-label">PARKING AREA</span>
                <h3>SmartPark Central</h3>
              </div>

              <span>📍</span>
            </div>

            <div className="availability">
              <div>
                <span>Available Slots</span>
                <strong>18</strong>
              </div>

              <div>
                <span>Total Slots</span>
                <strong>50</strong>
              </div>
            </div>

            <div className="mini-slots">
              <span className="available"></span>
              <span className="available"></span>
              <span className="occupied"></span>
              <span className="available"></span>
              <span className="held"></span>
              <span className="available"></span>
              <span className="occupied"></span>
              <span className="available"></span>
            </div>

            <a href="/parking" className="card-button">
              View Slots →
            </a>

          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section">

          <div className="section-heading">
            <span>HOW IT WORKS</span>

            <h2>Parking made simple</h2>

            <p>
              Reserve your parking space in just a few simple steps.
            </p>
          </div>

          <div className="steps">

            <div className="step-card">
              <div className="step-number">01</div>
              <div className="simple-icon">⌖</div>

              <h3>Find a Slot</h3>

              <p>
                Check available parking slots and choose the one
                that works for you.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="simple-icon">◷</div>

              <h3>Reserve</h3>

              <p>
                Select your slot and complete the booking before
                the reservation timer expires.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="simple-icon">▦</div>

              <h3>Park & Go</h3>

              <p>
                Complete payment and receive your digital QR
                parking pass.
              </p>
            </div>

          </div>
        </section>

        {/* Features */}
        <section id="features" className="section features-section">

          <div className="section-heading">
            <span>FEATURES</span>

            <h2>Everything you need to park</h2>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="simple-icon">⌖</div>

              <h3>Live Availability</h3>

              <p>
                View the current status of parking slots.
              </p>
            </div>

            <div className="feature-card">
              <div className="simple-icon">◷</div>

              <h3>Slot Reservation</h3>

              <p>
                Hold your selected slot while completing your booking.
              </p>
            </div>

            <div className="feature-card">
              <div className="simple-icon">▦</div>

              <h3>Digital Parking Pass</h3>

              <p>
                Get a QR-based digital pass after successful booking.
              </p>
            </div>

            <div className="feature-card">
              <div className="simple-icon">✓</div>

              <h3>Secure Booking</h3>

              <p>
                Authentication and verification keep your booking secure.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">

        <div>
          <strong>SmartPark</strong>

          <p>
            Smart parking for a better experience.
          </p>
        </div>

        <p>
          © 2026 Smart Parking System
        </p>

      </footer>

    </div>
  );
}

export default Home;

