"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";
import BookAppointment from "./book-appointment/page";
import AppointmentPopup from "@/components/AppointmentPopup";
import Script from "next/script";

// import DoctorCard from "@/components/DoctorCard";

import { doctors } from "@/data/doctors";

import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUsCard from "@/components/WhyChooseUsCard";
import { whyChooseUs } from "@/data/whyChooseUs";
import DoctorSection from "@/components/DoctorCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const goldenFrame = {
  background: "linear-gradient(135deg, #FFD700, #C9A227, #FFD700)",
  padding: "2px",
  borderRadius: "18px",
  boxShadow: "0 0 20px rgba(212,175,55,0.5)",
};

const innerFrame = {
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  height: "100%",
};

// ✅ Real Google Maps reviews from Dental Planet, Indore
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Dental+planet/@22.716978,75.895678,11z/data=!4m8!3m7!1s0x3962fd3241c49bc1:0x383af170b232cbb3!8m2!3d22.7169781!4d75.8956779!9m1!1b1!16s%2Fg%2F11lf1r97v1";

/* const oldTestimonials = [
  {
    name: "Rakesh Jain",
    rating: 5,
    review: "Excellent dental clinic in Indore. Dr. Ankur is very skilled and experienced. The treatment was painless and the staff is very courteous. Highly recommended for anyone looking for a trusted dentist!",
    avatar: "RJ",
    date: "a month ago",
  },
  {
    name: "Pooja Malviya",
    rating: 5,
    review: "Had my braces treatment done here and the results are amazing. Dr. Khushboo is very professional and patiently explains every step. The clinic is clean, hygienic and feels very premium.",
    avatar: "PM",
    date: "2 months ago",
  },
  {
    name: "Sunil Sharma",
    rating: 5,
    review: "Got my root canal done at Dental Planet. Completely painless procedure thanks to Dr. Ankur. The clinic uses modern equipment and the entire team is caring and supportive throughout the treatment.",
    avatar: "SS",
    date: "2 months ago",
  },
  {
    name: "Deepa Rathore",
    rating: 5,
    review: "Best dental clinic in the Tilak Nagar area. Highly professional doctors and staff. The infrastructure is modern and well equipped. My entire family has been visiting for years and always satisfied.",
    avatar: "DR",
    date: "3 months ago",
  },
  {
    name: "Vivek Tiwari",
    rating: 5,
    review: "Had teeth whitening done at Dental Planet — fantastic results! The clinic is very clean with latest technology. Dr. Ankur took time to explain the procedure before starting. Very satisfied!",
    avatar: "VT",
    date: "3 months ago",
  },
  {
    name: "Kavita Gupta",
    rating: 5,
    review: "Wonderful experience for my child's dental treatment. Dr. Khushboo handled it so gently that my child wasn't even scared. Very patient, caring doctors. This clinic is a true gem in Indore.",
    avatar: "KG",
    date: "4 months ago",
  },
]; */

const testimonials = [
  {
    name: "Suhani Jain",
    rating: 5,
    review:
      "Finally found a dentist I trust completely. Pain-free root canal and friendly staff made me a very happy patient. Thank you!",
    avatar: "SJ",
    date: "3 months ago",
  },
  {
    name: "Mayuri Jain",
    rating: 5,
    review:
      "Dr. Khushboo is very professional, gentle, and patient. She explained every step clearly and made sure my daughter was comfortable throughout the treatment.",
    avatar: "MJ",
    date: "6 months ago",
  },
  {
    name: "Shweta Pacharne",
    rating: 5,
    review:
      "Very happy with my treatment! The doctor made me feel comfortable and pain-free throughout the procedure. Extremely caring and professional.",
    avatar: "SP",
    date: "5 months ago",
  },
  {
    name: "Vinita Goyal",
    rating: 5,
    review:
      "Got proper alignment of my son's teeth in a healthy and kids-friendly environment. Thank you so much Dr. Khushboo Barjatya and Dr. Ankur Vatsal.",
    avatar: "VG",
    date: "9 months ago",
  },
  {
    name: "Puneet Jain",
    rating: 5,
    review:
      "Very good and affordable place for dental treatment. Dr. Ankur was very good and gave me all the details before the procedure.",
    avatar: "PJ",
    date: "5 months ago",
  },
  {
    name: "Devansh Choudhary",
    rating: 5,
    review:
      "Today we visited Dr. Khushboo. She is a very good person and made my daughter very comfortable. She did a great job.",
    avatar: "DC",
    date: "4 months ago",
  },
  {
    name: "Fahim Khan",
    rating: 5,
    review:
      "Best dentist in Tilak Nagar area. I am very happy and satisfied with Dr. Ankur and his treatment. Thank you for giving me a beautiful smile.",
    avatar: "FK",
    date: "7 months ago",
  },
  {
    name: "Mukesh Rathore",
    rating: 5,
    review:
      "Best dental clinic and treatment in the Tilak Nagar area. I am very satisfied with the treatment.",
    avatar: "MR",
    date: "4 months ago",
  },
  {
    name: "Nimish Jain",
    rating: 5,
    review:
      "Dental Planet is a top-notch dental clinic offering comprehensive care. We had an excellent experience here and found the clinic easy to reach.",
    avatar: "NJ",
    date: "9 months ago",
  },
  {
    name: "Hitesh Ahuja",
    rating: 5,
    review:
      "One of the best dental clinics in Indore. I had an amazing experience at Dental Planet from the moment I walked in.",
    avatar: "HA",
    date: "9 months ago",
  },
];

export default function Home() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${API}/api/blogs/get-all-blogs`);
      const data = await res.json();
      setBlogs(data.blogs || []);
    };
    fetchBlogs();
  }, []);
  return (
    <main>
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Dental Planet",
            image: "https://dentalplanet.in/images/bg2.jpeg",
            telephone: ["9301665066", "7400630334"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "17 A Baktawar Ram Nagar",
              addressLocality: "Tilak Nagar, Indore, Madhya Pradesh",
              addressCountry: "India",
              postalCode: "452018",
            },
          }),
        }}
      />
      <AppointmentPopup />
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <img
          src="/images/bg2.jpeg"
          alt="Dental Planet'Best dentist in Indore – Dental Planet Tilak Nagar"
          className="w-100 h-100"
          style={{
            objectFit: "cover",
          }}
        />
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3 text-center text-lg-start">
                Welcome to <span className="text-gold">Dental Planet</span>
              </h2>

              <p className="fs-6 text-muted mb-3 lh-lg">
                <strong>Dental Planet – The World of Dental Perfection</strong>{" "}
                is a premier dental care center founded by
                <strong style={{ color: "#C7A34A" }}>
                  {" "}
                  Dr. Ankur Vatsal
                </strong>{" "}
                and
                <strong style={{ color: "#C7A34A" }}>
                  {" "}
                  Dr. Khushboo Barjatya Vatsal
                </strong>
                , located in Tilak Nagar, Indore.
              </p>

              <p className="text-muted mb-4 lh-lg">
                We provide comprehensive, modern dental care — from routine
                checkups and cleanings to advanced treatments like root canals,
                crowns, implants, and digital dentistry — all under one roof.
              </p>

              {/* HIGHLIGHTS */}
              <div className="row g-3">
                {[
                  "Experienced & compassionate dentists",
                  "Advanced digital dentistry",
                  "Hygienic & patient-friendly clinic",
                  "Transparent & affordable pricing",
                ].map((text, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="p-3 bg-white rounded-4 shadow-sm border-start border-4 border-primary">
                      ✔ {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <div
                className="rounded-4 overflow-hidden"
                style={{
                  border: "1px solid gold",
                  padding: "2px",
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, #FFD700, #C9A227, #FFD700)",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src="/images/gallary1.jpeg"
                  alt="Best dentist in Indore – Dental Planet Tilak Nagar"
                  width={600}
                  height={450}
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS (FULL SECTIONS) ===== */}
      {/* ================= DOCTORS SECTION ================= */}
      <section className="py-5">
        <div className="container mb-5">
          <div className="text-center">
            <h2 className="fw-bold mb-2">Meet Our Doctors</h2>
            <p className="text-muted mb-0">
              Experienced specialists dedicated to your dental health
            </p>
          </div>
        </div>

        <DoctorSection doctor={doctors[0]} />
        <DoctorSection doctor={doctors[1]} reverse />
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-2 bg-light">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Complete dental care for every stage of life
            </p>
          </div>

          {/* SERVICES (FEATURED / PREVIEW) */}
          <div className="row g-4">
            {services.slice(0, 3).map((service) => (
              <div key={service.slug} className="col-md-4">
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 mb-3 text-center">
            <Link
              href="/services"
              className="btn btn-gold fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOGS ===== */}
      <section className="py-2 bg-light ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Latest Blogs</h2>
            <p className="section-subtitle">
              Dental tips, guides & oral health insights
            </p>
          </div>

          <div className="row g-4">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog._id} className="col-sm-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  {/* IMAGE */}
                  <div className="ratio ratio-16x9">
                    <Image
                      src={`${API}/api/blogs/get-blog-photo/${blog._id}`}
                      alt={blog.title}
                      fill
                      unoptimized
                      className="object-fit-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-semibold mb-2">{blog.title}</h5>

                    <div className="small text-muted mb-2">
                      Posted on{" "}
                      {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>

                    <p className="text-muted small flex-grow-1 lh-lg">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="btn btn-gold fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold mt-auto"
                    >
                      Read Blog →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL BLOGS – CONDITIONAL */}
          {blogs.length > 3 && (
            <div className="mt-4 mb-3 text-center">
              <Link
                href="/blog"
                className="btn btn-gold fs-6 px-5 py-3 rounded-pill shadow-lg btn-outline-info fw-semibold"
              >
                View All Blogs →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us</h2>
            <p className="text-muted">
              Trusted dental care backed by experience, technology, and
              compassion
            </p>
          </div>

          {/* GRID */}
          <div className="row g-4 justify-content-center">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <WhyChooseUsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Clinic Gallery</h2>
            <p className="text-muted mb-0">
              A glimpse into our modern, hygienic & patient-friendly dental
              clinic
            </p>
          </div>

          <div className="row g-3 align-items-stretch">
            {/* LEFT BIG IMAGE */}
            <div className="col-md-6">
              <div style={{ ...goldenFrame, height: "100%" }}>
                <div style={innerFrame}>
                  <div className="ratio ratio-1x1">
                    <img
                      src="/images/gallary1.jpeg"
                      alt="Dental clinic Tilak Nagar Indore – Dental Planet"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STACK */}
            <div className="col-md-6">
              <div className="row g-3 h-100">
                {/* TOP TWO */}
                {[2, 3].map((num) => (
                  <div className="col-6" key={num}>
                    <div style={{ ...goldenFrame, height: "100%" }}>
                      <div style={innerFrame}>
                        <div className="ratio ratio-1x1">
                          <img
                            src={`/images/gallary${num}.jpeg`}
                            alt="'Dental clinic Tilak Nagar Indore – Dental Planet"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* BOTTOM */}
                <div className="col-12">
                  <div style={{ ...goldenFrame, height: "100%" }}>
                    <div style={innerFrame}>
                      <div className="ratio ratio-16x9">
                        <img
                          src="/images/gallary4.jpeg"
                          alt="'Dental clinic Tilak Nagar Indore – Dental Planet"
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            {[5, 6, 7].map((num) => (
              <div key={num} className="col-md-4 col-sm-6">
                <div style={goldenFrame}>
                  <div style={innerFrame}>
                    <div className="ratio ratio-4x3">
                      <img
                        src={`/images/gallary${num}.jpeg`}
                        alt="'Dental clinic Tilak Nagar Indore – Dental Planet"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS SHOWCASE (PREMIUM INTEGRATION) ===== */}
      <section
        className="py-5"
        style={{
          background: "#fffdf9",
          borderTop: "1px solid rgba(201,162,77,0.15)",
        }}
      >
        <div className="container">
          {/* HEADER */}
          <div className="text-center mb-5">
            <span
              className="badge about-badge mb-2 px-3 py-2 rounded-pill"
              style={{
                letterSpacing: "1px",
                background:
                  "linear-gradient(135deg, var(--gold), var(--gold-dark))",
              }}
            >
              PATIENT REVIEWS
            </span>
            <h2 className="fw-bold mb-2">What Our Patients Say</h2>
            <p className="text-muted">
              Real, verified Google reviews from our happy patients in Indore
            </p>
          </div>

          {/* GOOGLE RATINGS BRAND CARD */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div
                className="p-4 rounded-4 shadow-sm text-center d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, #fffdf8 0%, #fff8e8 100%)",
                  border: "1px solid rgba(201,162,77,0.35)",
                }}
              >
                <div className="d-flex align-items-center gap-3 text-start">
                  <div
                    className="bg-white p-3 rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                    style={{ width: "68px", height: "68px" }}
                  >
                    {/* Google G Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      width="34"
                      height="34"
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
                  <div>
                    <h4
                      className="fw-bold mb-1 d-flex align-items-center gap-2"
                      style={{ color: "var(--black)" }}
                    >
                      4.9{" "}
                      <span
                        className="fs-5 text-warning"
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                      >
                        ★★★★★
                      </span>
                    </h4>
                    <p className="text-muted small mb-0 fw-medium">
                      Verified Rating (500+ Google Business Reviews)
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="text-center bg-white py-2 px-3 rounded-3 shadow-sm border border-warning-subtle">
                    <div className="fw-bold text-dark mb-0">100%</div>
                    <div
                      className="text-muted small"
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Hygiene
                    </div>
                  </div>
                  <div className="text-center bg-white py-2 px-3 rounded-3 shadow-sm border border-warning-subtle">
                    <div className="fw-bold text-dark mb-0">4.9/5.0</div>
                    <div
                      className="text-muted small"
                      style={{
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Indore Rank
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary px-4 py-3 rounded-pill fw-semibold text-nowrap"
                    style={{
                      fontSize: "0.88rem",
                      border: "1px solid rgba(201,162,77,0.5)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    View All Reviews
                  </a>
                  <a
                    href={`${GOOGLE_MAPS_URL}&review=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold px-4 py-3 rounded-pill shadow-sm fw-semibold btn-outline-info text-nowrap"
                    style={{ fontSize: "0.88rem" }}
                  >
                    ✍ Write a Review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NATIVE PREMIUM GOOGLE REVIEWS CAROUSEL */}
          <ReviewsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ===== BOOK APPOINTMENT ===== */}
      <section id="appointment" className="bg-light">
        <BookAppointment />
      </section>
    </main>
  );
}
