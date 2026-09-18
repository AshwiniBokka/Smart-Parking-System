import { useEffect, useState } from "react";

function Parking() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [holdTime, setHoldTime] = useState(300);
  const [isHolding, setIsHolding] = useState(false);

  const slots = [
    { id: "A-01", status: "available" },
    { id: "A-02", status: "occupied" },
    { id: "A-03", status: "available" },
    { id: "A-04", status: "available" },
    { id: "A-05", status: "occupied" },
    { id: "A-06", status: "available" },
    { id: "A-07", status: "available" },
    { id: "A-08", status: "occupied" },
    { id: "A-09", status: "available" },
    { id: "A-10", status: "available" },
    { id: "A-11", status: "occupied" },
    { id: "A-12", status: "available" },
    { id: "A-13", status: "available" },
    { id: "A-14", status: "occupied" },
    { id: "A-15", status: "available" },
    { id: "A-16", status: "available" },
    { id: "A-17", status: "available" },
    { id: "A-18", status: "occupied" },
  ];

  useEffect(() => {
    if (!isHolding) return;

    if (holdTime <= 0) {
      setIsHolding(false);
      setSelectedSlot(null);
      setHoldTime(300);
      alert("Your slot hold has expired. Please select a slot again.");
      return;
    }

    const timer = setInterval(() => {
      setHoldTime((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isHolding, holdTime]);

  const handleSlotClick = (slot) => {
    if (slot.status === "available" && !isHolding) {
      setSelectedSlot(slot.id);
    }
  };

 const handleContinue = () => {
  if (!selectedSlot) return;

  sessionStorage.setItem("selectedSlot", selectedSlot);
  sessionStorage.setItem(
    "holdStartTime",
    Date.now().toString()
  );

  window.location.href = "/booking";
};

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="parking-page">
      <header className="parking-header">
        <a href="/dashboard" className="parking-logo">
          Smart<span>Park</span>
        </a>

        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/parking" className="active-nav">
            Find Parking
          </a>
          <a href="/bookings">My Bookings</a>
        </nav>

        <div className="parking-user">
          <div className="user-avatar">A</div>

          <div>
            <strong>Ashwini</strong>
            <span>User</span>
          </div>
        </div>
      </header>

      <main className="parking-main">
        <div className="parking-top">
          <div>
            <p className="breadcrumb">Dashboard / Find Parking</p>

            <h1>Find a Parking Slot</h1>

            <p>
              Select an available parking slot at your preferred parking area.
            </p>
          </div>

          <a href="/dashboard" className="back-button">
            Back to Dashboard
          </a>
        </div>

        <section className="parking-location">
          <div>
            <h2>SmartPark Central</h2>
            <p>MG Road, Vijayawada</p>
          </div>

          <div className="availability">
            <strong>18</strong>
            <span>Available Slots</span>
          </div>
        </section>

        {isHolding && (
          <section className="hold-banner">
            <div>
              <span>Slot {selectedSlot} is temporarily reserved for you</span>
              <strong>Complete your booking before the timer expires.</strong>
            </div>

            <div className="hold-timer">
              {formatTime(holdTime)}
            </div>
          </section>
        )}

        <section className="slot-section">
          <div className="section-title-row">
            <h2>Select Your Slot</h2>

            <div className="slot-legend">
              <span>
                <i className="legend available"></i>
                Available
              </span>

              <span>
                <i className="legend occupied"></i>
                Occupied
              </span>

              <span>
                <i className="legend selected"></i>
                Selected
              </span>
            </div>
          </div>

          <div className="parking-layout">
            <div className="parking-lane">
              <span>ENTRY</span>
              <div className="arrow">↓</div>
            </div>

            <div className="slot-grid">
              {slots.map((slot) => (
                <button
                  key={slot.id}
                  className={`parking-slot ${slot.status} ${
                    selectedSlot === slot.id ? "selected" : ""
                  }`}
                  onClick={() => handleSlotClick(slot)}
                  disabled={
                    slot.status === "occupied" ||
                    isHolding
                  }
                >
                  <span className="slot-number">
                    {slot.id}
                  </span>

                  <span className="slot-status">
                    {selectedSlot === slot.id && isHolding
                      ? "Held"
                      : selectedSlot === slot.id
                      ? "Selected"
                      : slot.status === "occupied"
                      ? "Occupied"
                      : "Available"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedSlot && !isHolding && (
          <section className="selected-slot-card">
            <div>
              <span>Selected Parking Slot</span>

              <h2>{selectedSlot}</h2>

              <p>
                Your slot will be held for 5 minutes after
                proceeding.
              </p>
            </div>

           <button
  className="continue-button"
  onClick={handleContinue}
>
  Continue
</button>
          </section>
        )}
      </main>
    </div>
  );
}

export default Parking;