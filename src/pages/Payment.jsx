import { useEffect, useState } from "react";

function Payment() {
  const [holdTime, setHoldTime] = useState(300);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const selectedSlot = sessionStorage.getItem("selectedSlot");
  const vehicleNumber = sessionStorage.getItem("vehicleNumber");
  const duration = sessionStorage.getItem("duration") || "2";
  const otpVerified = sessionStorage.getItem("otpVerified");

  const amount = Number(duration) * 30;

  useEffect(() => {
    if (!selectedSlot || otpVerified !== "true") {
      window.location.href = "/parking";
      return;
    }

    const holdStartTime = sessionStorage.getItem("holdStartTime");

    if (!holdStartTime) {
      window.location.href = "/parking";
      return;
    }

    const updateHoldTimer = () => {
      const elapsed = Math.floor(
        (Date.now() - Number(holdStartTime)) / 1000
      );

      const remaining = 300 - elapsed;

      if (remaining <= 0) {
        sessionStorage.clear();

        alert(
          "Your slot hold has expired. Please select a slot again."
        );

        window.location.href = "/parking";
        return;
      }

      setHoldTime(remaining);
    };

    updateHoldTimer();

    const timer = setInterval(updateHoldTimer, 1000);

    return () => clearInterval(timer);
  }, [selectedSlot, otpVerified]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePayment = (event) => {
    event.preventDefault();

    sessionStorage.setItem("paymentStatus", "success");

    window.location.href = "/confirmation";
  };

  return (
    <div className="payment-page">
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

      <main className="payment-main">
        <div className="payment-heading">
          <p>Booking / OTP / Payment</p>
          <h1>Complete Payment</h1>
          <span>
            Complete the payment to confirm your parking reservation.
          </span>
        </div>

        <div className="payment-layout">
          <section className="payment-card">
            <div className="payment-hold">
              <div>
                <span>Slot {selectedSlot} is held for you</span>
                <strong>
                  Complete payment before the timer expires.
                </strong>
              </div>

              <div className="hold-timer">
                {formatTime(holdTime)}
              </div>
            </div>

            <h2>Payment Method</h2>

            <div className="payment-methods">
              <button
                type="button"
                className={
                  paymentMethod === "UPI"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() => setPaymentMethod("UPI")}
              >
                <strong>UPI</strong>
                <span>Google Pay, PhonePe, Paytm</span>
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "Card"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() => setPaymentMethod("Card")}
              >
                <strong>Card</strong>
                <span>Credit or Debit Card</span>
              </button>

              <button
                type="button"
                className={
                  paymentMethod === "Cash"
                    ? "payment-method active"
                    : "payment-method"
                }
                onClick={() => setPaymentMethod("Cash")}
              >
                <strong>Pay at Parking</strong>
                <span>Pay at the parking facility</span>
              </button>
            </div>

            {paymentMethod === "UPI" && (
              <div className="payment-input-section">
                <label>UPI ID</label>

                <input
                  type="text"
                  placeholder="example@upi"
                />
              </div>
            )}

            {paymentMethod === "Card" && (
              <div className="payment-input-section">
                <label>Card Number</label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />

                <div className="card-row">
                  <div>
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "Cash" && (
              <div className="cash-notice">
                You have selected Pay at Parking. Your reservation
                will be confirmed after selecting the payment option.
              </div>
            )}

            <button
              className="pay-button"
              onClick={handlePayment}
            >
              Confirm Payment · ₹{amount}
            </button>

            <p className="demo-payment-note">
              Development mode: no real money will be charged.
            </p>
          </section>

          <aside className="payment-summary">
            <h2>Order Summary</h2>

            <div className="payment-location">
              <span>Parking Area</span>
              <strong>SmartPark Central</strong>
              <p>MG Road, Vijayawada</p>
            </div>

            <div className="payment-row">
              <span>Parking Slot</span>
              <strong>{selectedSlot}</strong>
            </div>

            <div className="payment-row">
              <span>Vehicle</span>
              <strong>{vehicleNumber}</strong>
            </div>

            <div className="payment-row">
              <span>Duration</span>
              <strong>{duration} Hours</strong>
            </div>

            <div className="payment-row">
              <span>Rate</span>
              <strong>₹30 / hour</strong>
            </div>

            <div className="payment-total">
              <span>Total Amount</span>
              <strong>₹{amount}</strong>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Payment;