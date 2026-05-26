"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 6; // optimal 6 blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/blogs/get-all-blogs?page=${page}&limit=${limit}`);
        const data = await res.json();
        setBlogs(data.blogs || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Failed fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [page]);

  return (
    <main>
      <section className="pt-5 pb-0 blogs-section-blue">
        <div className="container text-center">
          <div className="text-center mb-0">
            <h2 className="section-title">Latest Blogs</h2>
            <p className="section-subtitle">
              Dental tips, guides & oral health insights
            </p>
          </div>
        </div>
      </section>

      {/* ANCHOR FOR SMOOTH SCROLL */}
      <div id="blog-grid-top" style={{ scrollMarginTop: "100px" }} />

      {/* BLOG GRID */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-gold" role="status" style={{ color: "var(--gold)" }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {blogs.map((blog) => (
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
                          })}{" "}
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

              {/* PAGINATION CONTROLS */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
                  <button
                    className="pagination-btn"
                    disabled={page === 1}
                    onClick={() => {
                      setPage((p) => Math.max(p - 1, 1));
                      document.getElementById("blog-grid-top")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    ← Prev
                  </button>
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                      <button
                        key={pageNum}
                        className={`pagination-number ${page === pageNum ? "active" : ""}`}
                        onClick={() => {
                          setPage(pageNum);
                          document.getElementById("blog-grid-top")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    className="pagination-btn"
                    disabled={page === totalPages}
                    onClick={() => {
                      setPage((p) => Math.min(p + 1, totalPages));
                      document.getElementById("blog-grid-top")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
