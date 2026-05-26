"use client";

import { useState } from "react";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">
                {/* HEADER */}
                <div className="text-center mb-4">
                  <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">
                    Book Appointment
                  </span>
                  <h2 className="fw-bold mb-1">Schedule Your Visit</h2>
                  <p className="text-muted mb-0">
                    Quick & easy dental consultation booking
                  </p>
                </div>

                {/* SUCCESS */}
                {success && (
                  <div className="alert alert-success text-center rounded-pill mb-4">
                    ✅ Appointment booked! Confirmation email sent.
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-3 col-6">
                    <label className="form-label fw-semibold">Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-3 col-6">
                    <label className="form-label fw-semibold">Time</label>
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Message <span className="text-muted">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Describe your concern"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 text-center mt-3">
                    <button
                      type="submit"
                      className="btn btn-warning px-5 py-2 fw-semibold rounded-pill"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Booking...
                        </>
                      ) : (
                        "Confirm Appointment"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
