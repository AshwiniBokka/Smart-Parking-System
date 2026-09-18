
import { useEffect, useState } from "react";

function Confirmation() {
  const [bookingId, setBookingId] = useState("");

  const selectedSlot = sessionStorage.getItem("selectedSlot");
  const vehicleNumber = sessionStorage.getItem("vehicleNumber");
  const vehicleType = sessionStorage.getItem("vehicleType");
  const bookingDate = sessionStorage.getItem("bookingDate");
  const startTime = sessionStorage.getItem("startTime");
  const duration = sessionStorage.getItem("duration");

  const amount = Number(duration || 0) * 30;
   const calculateEndTime = (start, hours) => {
    if (!start || !hours) return "";

    const [time, period] = start.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if (period === "PM" && hour !== 12) {
      hour += 12;
    }

    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    hour += Number(hours);

    if (hour >= 24) {
      hour -= 24;
    }

    const newPeriod = hour >= 12 ? "PM" : "AM";
    let displayHour = hour % 12;

    if (displayHour === 0) {
      displayHour = 12;
    }

    return `${displayHour}:${minute
      .toString()
      .padStart(2, "0")} ${newPeriod}`;
  };

  useEffect(() => {
    let existingBookingId = sessionStorage.getItem("bookingId");

    if (!existingBookingId) {
      existingBookingId =
        "SP" + Date.now().toString().slice(-8);

      sessionStorage.setItem(
        "bookingId",
        existingBookingId
      );
    }

    setBookingId(existingBookingId);

    // Save the completed booking
    const booking = {
      id: existingBookingId,
      slot: selectedSlot,
      parkingArea: "SmartPark Central",
      date: bookingDate,
      time: `${startTime} – ${calculateEndTime(startTime, duration)}`,
      vehicle: `${vehicleType} • ${vehicleNumber}`,
      amount: `₹${amount}`,
      status: "Confirmed",
    };

    sessionStorage.setItem(
      "latestBooking",
      JSON.stringify(booking)
    );
  }, []);



  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="confirmation-page">

      <header className="dashboard-header confirmation-header">
        <div className="dashboard-logo">
          <span className="logo-mark">P</span>
          <span>SmartPark</span>
        </div>

        <nav className="dashboard-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/parking">Find Parking</a>
          <a href="/bookings">My Bookings</a>
        </nav>

        <div className="dashboard-user">
          <div className="user-avatar">A</div>
          <div>
            <strong>Ashwini</strong>
            <span>User</span>
          </div>
        </div>
      </header>

      <main className="confirmation-container">

        <div className="confirmation-success">
          <div className="success-icon">✓</div>

          <h1>Booking Confirmed!</h1>

          <p>
            Your parking slot has been successfully reserved.
          </p>
        </div>

        <div className="confirmation-card">

          <div className="confirmation-booking-header">
            <div>
              <span className="booking-label">BOOKING ID</span>
              <h2>{bookingId}</h2>
            </div>

            <span className="confirmed-badge">
              Confirmed
            </span>
          </div>

          <div className="confirmation-details">

            <div className="confirmation-detail">
              <span className="booking-label">
                PARKING AREA
              </span>
              <strong>SmartPark Central</strong>
            </div>

            <div className="confirmation-detail">
              <span className="booking-label">
                PARKING SLOT
              </span>
              <strong>{selectedSlot}</strong>
            </div>

            <div className="confirmation-detail">
              <span className="booking-label">
                VEHICLE
              </span>
              <strong>
                {vehicleType} • {vehicleNumber}
              </strong>
            </div>

            <div className="confirmation-detail">
              <span className="booking-label">
                DATE
              </span>
              <strong>{bookingDate}</strong>
            </div>

            <div className="confirmation-detail">
              <span className="booking-label">
                START TIME
              </span>
              <strong>{startTime}</strong>
            </div>

            <div className="confirmation-detail">
              <span className="booking-label">
                DURATION
              </span>
              <strong>{duration} hour(s)</strong>
            </div>

          </div>

          <div className="parking-pass">

            <div className="qr-placeholder">
              <div className="qr-pattern">
                ▦
              </div>
              <span>Parking Pass</span>
            </div>

            <div className="pass-info">
              <h3>Digital Parking Pass</h3>

              <p>
                Show this pass when you arrive at the
                parking area.
              </p>

              <div className="pass-amount">
                <span>Total Amount</span>
                <strong>₹{amount}</strong>
              </div>
            </div>

          </div>

          <div className="confirmation-actions">

            <button
              className="print-button"
              onClick={handlePrint}
            >
              Print Parking Pass
            </button>

            <a
              href="/bookings"
              className="dashboard-button"
            >
              View My Bookings
            </a>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Confirmation;

