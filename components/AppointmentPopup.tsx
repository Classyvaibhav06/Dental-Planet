"use client";
import { useEffect, useState } from "react";
import BookAppointment from "@/app/book-appointment/page";

export default function AppointmentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("appointmentPopupShown");

    setShow(true);
    if (!hasVisited) {
      localStorage.setItem("appointmentPopupShown", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-4">
          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Book an Appointment</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShow(false)}
              suppressHydrationWarning
            />
          </div>

          {/* BODY */}
          <div className="modal-body p-0">
            <BookAppointment />
          </div>
        </div>
      </div>
    </div>
  );
}
