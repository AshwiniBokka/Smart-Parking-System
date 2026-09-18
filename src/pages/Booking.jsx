import { useEffect, useState } from "react";

function Booking() {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [holdTime, setHoldTime] = useState(300);

  const [vehicleType, setVehicleType] = useState("Car");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("2");

  useEffect(() => {
    const slot = sessionStorage.getItem("selectedSlot");
    const startTimeValue = sessionStorage.getItem("holdStartTime");

    if (!slot || !startTimeValue) {
      window.location.href = "/parking";
      return;
    }

    setSelectedSlot(slot);

    const updateTimer = () => {
      const elapsed = Math.floor(
        (Date.now() - Number(startTimeValue)) / 1000
      );

      const remaining = 300 - elapsed;

      if (remaining <= 0) {
        sessionStorage.removeItem("selectedSlot");
        sessionStorage.removeItem("holdStartTime");

        alert(
          "Your slot hold has expired. Please select a slot again."
        );

        window.location.href = "/parking";
        return;
      }

      setHoldTime(remaining);
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleProceed = (event) => {
    event.preventDefault();

    if (!vehicleNumber || !bookingDate || !startTime) {
      alert("Please fill in all booking details.");
      return;
    }

    sessionStorage.setItem("vehicleType", vehicleType);
    sessionStorage.setItem("vehicleNumber", vehicleNumber);
    sessionStorage.setItem("bookingDate", bookingDate);
    sessionStorage.setItem("startTime", startTime);
    sessionStorage.setItem("duration", duration);

    window.location.href = "/otp";
  };

  return (
    <div className="booking-page">
      <header className="booking-header">
        <a href="/dashboard" className="booking-logo">
          Smart<span>Park</span>
        </a>

        <div className="booking-user">
          <div className="user-avatar">A</div>

          <div>
            <strong>Ashwini</strong>
            <span>User</span>
          </div>
        </div>
      </header>

      <main className="booking-main">
        <div className="booking-heading">
          <p>Find Parking / Booking Details</p>

          <h1>Complete Your Booking</h1>

          <span>
            Enter your vehicle and parking details to continue.
          </span>
        </div>

        <div className="booking-layout">
          <section className="booking-form-card">
            <div className="hold-banner booking-hold">
              <div>
                <span>Slot {selectedSlot} is held for you</span>

                <strong>
                  Complete your booking before the timer expires.
                </strong>
              </div>

              <div className="hold-timer">
                {formatTime(holdTime)}
              </div>
            </div>

            <form onSubmit={handleProceed}>
              <h2>Vehicle Details</h2>

              <div className="form-row">
                <div className="form-group">
                  <label>Vehicle Type</label>

                  <select
                    value={vehicleType}
                    onChange={(event) =>
                      setVehicleType(event.target.value)
                    }
                  >
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="SUV">SUV</option>
                    <option value="EV">Electric Vehicle</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Vehicle Number</label>

                  <input
                    type="text"
                    placeholder="e.g. AP 39 AB 1234"
                    value={vehicleNumber}
                    onChange={(event) =>
                      setVehicleNumber(
                        event.target.value.toUpperCase()
                      )
                    }
                  />
                </div>
              </div>

              <h2 className="booking-section-heading">
                Parking Details
              </h2>

              <div className="form-row">
                <div className="form-group">
                  <label>Booking Date</label>

                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(event) =>
                      setBookingDate(event.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Start Time</label>

                  <input
                    type="time"
                    value={startTime}
                    onChange={(event) =>
                      setStartTime(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Parking Duration</label>

                <select
                  value={duration}
                  onChange={(event) =>
                    setDuration(event.target.value)
                  }
                >
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="5">5 Hours</option>
                </select>
              </div>

              <button
                type="submit"
                className="booking-submit"
              >
                Proceed to OTP Verification
              </button>
            </form>
          </section>

          <aside className="booking-summary">
            <h2>Booking Summary</h2>

            <div className="summary-location">
              <span>Parking Area</span>
              <strong>SmartPark Central</strong>
              <p>MG Road, Vijayawada</p>
            </div>

            <div className="summary-row">
              <span>Parking Slot</span>
              <strong>{selectedSlot}</strong>
            </div>

            <div className="summary-row">
              <span>Vehicle</span>
              <strong>{vehicleType}</strong>
            </div>

            <div className="summary-row">
              <span>Duration</span>
              <strong>{duration} Hours</strong>
            </div>

            <div className="summary-total">
              <span>Estimated Amount</span>
              <strong>₹{Number(duration) * 30}</strong>
            </div>

            <p className="summary-note">
              Final payment will be completed after OTP
              verification.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Booking;