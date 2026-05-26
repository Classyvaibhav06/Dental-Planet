"use client";

import React, { useState } from "react";

type Testimonial = {
  name: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
};

export default function ReviewsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [start, setStart] = useState(0);
  const perPage = 3;
  const len = testimonials.length || 1;

  const next = () => setStart((s) => (s + perPage) % len);
  const prev = () => setStart((s) => (s - perPage + len) % len);

  return (
    <div className="reviews-carousel">
      <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
        <button
          className="btn btn-outline-secondary rounded-pill px-3"
          onClick={prev}
          aria-label="Previous"
          suppressHydrationWarning
        >
          ‹ Previous
        </button>
        <button
          className="btn btn-outline-secondary rounded-pill px-3"
          onClick={next}
          aria-label="Next"
          suppressHydrationWarning
        >
          Next ›
        </button>
      </div>

      <div className="row g-4 justify-content-center">
        {Array.from({ length: perPage }).map((_, i) => {
          const idx = (start + i) % len;
          const t = testimonials[idx];
          return (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(201, 162, 77, 0.15)",
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.05)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px -10px rgba(201, 162, 77, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(201, 162, 77, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px -15px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor =
                    "rgba(201, 162, 77, 0.15)";
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white shadow-sm"
                        style={{
                          width: "46px",
                          height: "46px",
                          fontSize: "0.95rem",
                          background: `linear-gradient(135deg, ${
                            idx % 3 === 0
                              ? "#C9A227, #E8C14A"
                              : idx % 3 === 1
                                ? "#34A853, #54C273"
                                : "#4285F4, #66A2FF"
                          })`,
                        }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <h5
                          className="fw-bold mb-0 text-dark"
                          style={{ fontSize: "1rem" }}
                        >
                          {t.name}
                        </h5>
                        <span
                          className="text-muted small"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {t.date}
                        </span>
                      </div>
                    </div>

                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>

                  <div className="mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-warning fs-5">
                        ★
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-muted lh-lg mb-0"
                    style={{ fontSize: "0.9rem", fontStyle: "italic" }}
                  >
                    "{t.review}"
                  </p>
                </div>

                <div className="d-flex align-items-center gap-1 mt-3 pt-3 border-top border-light-subtle">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="#34A853"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span
                    className="text-success fw-medium"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Verified Patient Review
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
