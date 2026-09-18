import { useEffect, useState } from "react";

function OTP() {
  const [otp, setOtp] = useState("");
  const [holdTime, setHoldTime] = useState(300);
  const [resendTime, setResendTime] = useState(30);
  const [message, setMessage] = useState("");

  const selectedSlot = sessionStorage.getItem("selectedSlot");
  const vehicleNumber = sessionStorage.getItem("vehicleNumber");

  useEffect(() => {
    const holdStartTime = sessionStorage.getItem("holdStartTime");

    if (!selectedSlot || !holdStartTime) {
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
  }, [selectedSlot]);

  useEffect(() => {
    if (resendTime <= 0) return;

    const timer = setInterval(() => {
      setResendTime((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOtpChange = (event) => {
    const value = event.target.value;

    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setMessage("");
    }
  };

  const handleVerify = (event) => {
    event.preventDefault();

    if (otp.length !== 6) {
      setMessage("Please enter a 6-digit OTP.");
      return;
    }

    if (otp !== "123456") {
      setMessage("Incorrect OTP. Please try again.");
      return;
    }

    sessionStorage.setItem("otpVerified", "true");

    window.location.href = "/payment";
  };

  const handleResend = () => {
    if (resendTime > 0) return;

    setResendTime(30);
    setMessage("A new OTP has been sent.");
  };

  return (
    <div className="otp-page">
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

      <main className="otp-main">
        <div className="otp-card">
          <div className="otp-icon">✓</div>

          <p className="otp-step">
            Step 2 of 4
          </p>

          <h1>Verify Your Mobile Number</h1>

          <p className="otp-description">
            Enter the 6-digit OTP sent to the mobile number
            associated with vehicle{" "}
            <strong>{vehicleNumber || "your vehicle"}</strong>.
          </p>

          <div className="otp-hold">
            <span>Parking Slot {selectedSlot}</span>

            <strong>
              {formatTime(holdTime)}
            </strong>
          </div>

          <form onSubmit={handleVerify}>
            <label htmlFor="otp">
              Enter OTP
            </label>

            <input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength="6"
              placeholder="000000"
              value={otp}
              onChange={handleOtpChange}
              className="otp-input"
            />

            {message && (
              <p className="otp-message">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="otp-button"
            >
              Verify OTP
            </button>
          </form>

          <div className="resend-section">
            {resendTime > 0 ? (
              <p>
                Resend OTP in{" "}
                <strong>{resendTime}s</strong>
              </p>
            ) : (
              <button
                className="resend-button"
                onClick={handleResend}
              >
                Resend OTP
              </button>
            )}
          </div>

          <a
            href="/booking"
            className="otp-back"
          >
            ← Back to Booking Details
          </a>
        </div>
      </main>
    </div>
  );
}

export default OTP;