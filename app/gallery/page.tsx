import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Dental Clinic Gallery | Smile Transformations in Indore",
  description:
    "View before & after smile transformations and clinic images of Dental Planet, a leading dental clinic in Indore.",
  keywords: [
    "dental clinic gallery",
    "dental clinic Indore photos",
    "dentist clinic images",
    "Dental Planet gallery",
  ],
  openGraph: {
    title: "Dental Planet Gallery",
    description: "Modern dental clinic images and infrastructure",
    images: ["/images/gallary1.jpeg"],
  },
};

export default function Page() {
  return <GalleryClient />;
}