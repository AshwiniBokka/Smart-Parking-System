
function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Header */}
      <header className="dashboard-header">

        <div className="logo">
          <span className="logo-icon">P</span>
          <span>SmartPark</span>
        </div>

        <nav className="dashboard-nav">
          <a href="/dashboard" className="active">
            Dashboard
          </a>

          <a href="/parking">
            Find Parking
          </a>

          <a href="/bookings">
            My Bookings
          </a>
        </nav>

        <div className="dashboard-user">
          <div className="user-avatar">
            A
          </div>

          <div>
            <strong>Ashwini</strong>
            <span>User</span>
          </div>

          <a href="/" className="logout-button">
            Logout
          </a>
        </div>

      </header>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Welcome */}
        <section className="dashboard-welcome">

          <div>
            <span className="dashboard-label">
              USER DASHBOARD
            </span>

            <h1>
              Welcome back, Ashwini
            </h1>

            <p>
              Find a parking slot or manage your existing bookings.
            </p>
          </div>

          <a href="/parking" className="primary-button">
            Find Parking →
          </a>

        </section>

        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="stat-card">
            <span className="stat-label">
              AVAILABLE SLOTS
            </span>

            <strong>18</strong>

            <p>
              Currently available
            </p>
          </div>

          <div className="stat-card">
            <span className="stat-label">
              ACTIVE BOOKING
            </span>

            <strong>1</strong>

            <p>
              Currently reserved
            </p>
          </div>

          <div className="stat-card">
            <span className="stat-label">
              TOTAL BOOKINGS
            </span>

            <strong>5</strong>

            <p>
              All your bookings
            </p>
          </div>

        </section>

        {/* Active Booking */}
        <section className="dashboard-section">

          <div className="section-title-row">
            <div>
              <span className="dashboard-label">
                CURRENT BOOKING
              </span>

              <h2>Active Parking</h2>
            </div>

            <span className="status-badge">
              Confirmed
            </span>
          </div>

          <div className="active-booking">

            <div className="booking-slot">
              <span>Parking Slot</span>
              <strong>A-12</strong>
            </div>

            <div>
              <span>Parking Area</span>
              <strong>SmartPark Central</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>18 Sep 2026</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>10:00 AM – 12:00 PM</strong>
            </div>

            <a href="/booking/A12" className="view-booking">
              View Booking
            </a>

          </div>

        </section>

        {/* Recent Bookings */}
        <section className="dashboard-section">

          <div className="section-title-row">

            <div>
              <span className="dashboard-label">
                HISTORY
              </span>

              <h2>Recent Bookings</h2>
            </div>

            <a href="/bookings" className="view-all">
              View All
            </a>

          </div>

          <div className="booking-table">

            <div className="booking-row booking-header">
              <span>Slot</span>
              <span>Parking Area</span>
              <span>Date</span>
              <span>Status</span>
            </div>

            <div className="booking-row">
              <span>A-12</span>
              <span>SmartPark Central</span>
              <span>18 Sep 2026</span>
              <span className="status-badge">
                Confirmed
              </span>
            </div>

            <div className="booking-row">
              <span>B-07</span>
              <span>SmartPark Central</span>
              <span>15 Sep 2026</span>
              <span className="completed-badge">
                Completed
              </span>
            </div>

            <div className="booking-row">
              <span>C-21</span>
              <span>SmartPark East</span>
              <span>12 Sep 2026</span>
              <span className="completed-badge">
                Completed
              </span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;

