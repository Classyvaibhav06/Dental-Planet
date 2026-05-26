"use client";

import { useState } from "react";

export default function GalleryPage() {
  const images = [
    "/images/gallary1.jpeg",
    "/images/gallary2.jpeg",
    "/images/gallary3.jpeg",
    "/images/gallary4.jpeg",
    "/images/gallary5.jpeg",
    "/images/gallary6.jpeg",
    "/images/gallary7.jpeg",
  ];
const goldenFrame = {
  background: "linear-gradient(135deg, #FFD700, #C9A227, #FFD700)",
  padding: "2px",
  borderRadius: "16px",
  boxShadow: "0 0 18px rgba(212,175,55,0.5)",
  cursor: "pointer"
};

const innerFrame = {
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  height: "100%"
};
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <main className="gallery-page">
        <div className="container">
          {/* HEADER */}
          <div className="gallery-header text-center">
            <span className="gallery-badge">Our Clinic</span>
            <h1>Clinic Gallery</h1>
            <p>
              Explore our modern infrastructure, equipment & patient-friendly
              spaces
            </p>
          </div>

          {/* GRID */}
          <div className="gallery-grid">
            {images.map((src, i) => (
              <div
  key={i}
  className={`gallery-item gallery-item-${i + 1}`}
  onClick={() => setPreview(src)}
  style={goldenFrame}
>
  <div style={innerFrame}>
    <img
      src={src}
      alt="Dental clinic Tilak Nagar Indore – Dental Planet"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "0.3s ease"
      }}
    />
  </div>
</div>
            ))}
          </div>
        </div>
      </main>

      {/* PREVIEW */}
      {preview && (
        <div
  className="gallery-modal"
  onClick={() => setPreview(null)}
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  }}
>
  <div style={{
    background: "linear-gradient(135deg, #FFD700, #C9A227, #FFD700)",
    padding: "8px",
    borderRadius: "18px",
    boxShadow: "0 0 25px rgba(212,175,55,0.8)"
  }}>
    <img
      src={preview}
      alt="'Dental clinic Tilak Nagar Indore – Dental Planet"
      style={{
        maxWidth: "90vw",
        maxHeight: "80vh",
        borderRadius: "12px",
        display: "block"
      }}
    />
  </div>
</div>
      )}
    </>
  );
}
