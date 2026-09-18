import { useState } from "react";

function Bookings() {
  const [activeTab, setActiveTab] = useState("All");

  const bookings = [
    {
      id: "SP84923176",
      slot: "A-12",
      parkingArea: "SmartPark Central",
      date: "18 Sep 2026",
      time: "10:00 AM – 12:00 PM",
      vehicle: "Car • AP 39 AB 1234",
      amount: "₹60",
      status: "Confirmed",
    },
    {
      id: "SP73451682",
      slot: "B-07",
      parkingArea: "SmartPark Central",
      date: "15 Sep 2026",
      time: "02:00 PM – 04:00 PM",
      vehicle: "Car • AP 39 CD 5678",
      amount: "₹60",
      status: "Completed",
    },
    {
      id: "SP62519437",
      slot: "C-21",
      parkingArea: "SmartPark East",
      date: "12 Sep 2026",
      time: "09:00 AM – 11:00 AM",
      vehicle: "Bike • AP 39 EF 9012",
      amount: "₹60",
      status: "Completed",
    },
    {
      id: "SP51876324",
      slot: "A-05",
      parkingArea: "SmartPark Central",
      date: "08 Sep 2026",
      time: "05:00 PM – 07:00 PM",
      vehicle: "SUV • AP 39 GH 3456",
      amount: "₹60",
      status: "Cancelled",
    },
  ];

  const filteredBookings =
    activeTab === "All"
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  return (
    <div className="bookings-page">

      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <span className="logo-mark">P</span>
          <span>SmartPark</span>
        </div>

        <nav className="dashboard-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/parking">Find Parking</a>
          <a href="/bookings" className="active">
            My Bookings
          </a>
        </nav>

        <div className="dashboard-user">
          <div className="user-avatar">A</div>
          <div>
            <strong>Ashwini</strong>
            <span>User</span>
          </div>
          <a href="/login" className="logout-link">
            Logout
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="bookings-container">

        <div className="bookings-heading">
          <div>
            <h1>My Bookings</h1>
            <p>View and manage your parking reservations.</p>
          </div>

          <a href="/parking" className="find-parking-button">
            + Find Parking
          </a>
        </div>

        {/* Tabs */}
        <div className="booking-tabs">
          {["All", "Confirmed", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab-active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Booking Cards */}
        <div className="bookings-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div className="booking-card" key={booking.id}>

                <div className="booking-card-top">
                  <div>
                    <span className="booking-label">BOOKING ID</span>
                    <h3>{booking.id}</h3>
                  </div>

                  <span
                    className={`booking-status status-${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="booking-card-content">

                  <div className="booking-location">
                    <span className="booking-icon">P</span>
                    <div>
                      <span className="booking-label">PARKING AREA</span>
                      <strong>{booking.parkingArea}</strong>
                    </div>
                  </div>

                  <div className="booking-detail">
                    <span className="booking-label">SLOT</span>
                    <strong>{booking.slot}</strong>
                  </div>

                  <div className="booking-detail">
                    <span className="booking-label">DATE</span>
                    <strong>{booking.date}</strong>
                  </div>

                  <div className="booking-detail">
                    <span className="booking-label">TIME</span>
                    <strong>{booking.time}</strong>
                  </div>

                  <div className="booking-detail">
                    <span className="booking-label">VEHICLE</span>
                    <strong>{booking.vehicle}</strong>
                  </div>

                  <div className="booking-detail">
                    <span className="booking-label">AMOUNT</span>
                    <strong>{booking.amount}</strong>
                  </div>

                </div>

                <div className="booking-card-bottom">
                  <span>Parking reservation</span>

                  {booking.status === "Confirmed" && (
                    <button className="view-booking-button">
                      View Booking
                    </button>
                  )}

                  {booking.status === "Completed" && (
                    <button className="view-booking-button">
                      View Receipt
                    </button>
                  )}

                  {booking.status === "Cancelled" && (
                    <span className="cancelled-text">
                      Booking cancelled
                    </span>
                  )}
                </div>

              </div>
            ))
          ) : (
            <div className="no-bookings">
              <div className="no-bookings-icon">P</div>
              <h3>No bookings found</h3>
              <p>You don't have any {activeTab.toLowerCase()} bookings.</p>
              <a href="/parking" className="find-parking-button">
                Find Parking
              </a>
            </div>
          )}
        </div>

      </main>

    </div>
  );
}

export default Bookings;