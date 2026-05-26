import AboutClient from "./AboutClient";

export const metadata = {
  title: "Modern Dental Clinic in Indore | Expert Care for Healthy Smiles",
  description:
    "Experience advanced dental care in Indore with skilled dentists, latest technology, and personalized treatments for long-lasting oral health.",
  keywords: [
    "about dental planet",
    "dentist in Indore",
    "dental clinic Indore",
    "best dentist Indore",
  ],
  openGraph: {
    title: "About Dental Planet",
    description: "Meet our expert dentists and clinic story",
    images: ["/images/bg1.jpeg"],
  },
};

export default function Page() {
  return <AboutClient />;
}