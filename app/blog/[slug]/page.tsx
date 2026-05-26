import Link from "next/link";
import { Metadata } from "next";
import { faqSchemas } from "@/app/lib/faqSchemas";
import Script from "next/script";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// ✅ Dynamic SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch(
    `${API}/api/blogs/get-blog-by-slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return {
      title: "Blog Not Found | Dental Planet",
    };
  }

  const { blog } = await res.json();

  return {
    title: `${blog.title} | Dental Planet`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [`${API}/api/blogs/get-blog-photo/${blog._id}`],
    },
  };
}

// ✅ Page
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug.toLowerCase();
  const faqSchema = faqSchemas[slug];

  const blogRes = await fetch(
    `${API}/api/blogs/get-blog-by-slug/${slug}`,
    { cache: "no-store" }
  );

  if (!blogRes.ok) {
    return (
      <div className="container py-5 text-center">
        <h2>Blog not found</h2>
      </div>
    );
  }

  const { blog } = await blogRes.json();

  const allRes = await fetch(
    `${API}/api/blogs/get-all-blogs`,
    { cache: "no-store" }
  );

  const allData = await allRes.json();

  const recentBlogs = allData.blogs
    .filter((b: any) => b._id !== blog._id)
    .slice(0, 5);

  return (
    <>
    {faqSchema && (
  <Script
    id="faq-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema),
    }}
  />
)}
<div className="container py-5">
      <div className="mb-4">
        <Link href="/blog" className="btn btn-outline-info">
          ← Back to Blogs
        </Link>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          <article>
            <h1>{blog.title}</h1>

            <p className="text-muted">
              {new Date(blog.createdAt).toLocaleDateString("en-IN")} •{" "}
              {blog.author}
            </p>

            <img
              src={`${API}/api/blogs/get-blog-photo/${blog._id}`}
              alt={blog.title}
              style={{ width: "100%", borderRadius: "12px" }}
            />

            <div style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
              {blog.content}
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          <aside>
            <h5>Recent Posts</h5>

            {recentBlogs.map((b: any) => (
              <Link key={b._id} href={`/blog/${b.slug}`}>
                <p>{b.title}</p>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}