import BreadCumb from "@/app/Components/Common/BreadCumb";
import SplitSystemServiceDetails from "@/app/Components/ServiceDetails/SplitSystemServiceDetails";
import splitSystemData from "@/app/Data/splitSystemServices.json";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const serviceData = splitSystemData.find(
    (service) => service.slug === "split-system-installation-melbourne"
  );

  if (!serviceData) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    keywords:
      "split system installation melbourne, air conditioning installation, split system installer melbourne, aircon installation melbourne, split system setup",
    openGraph: {
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      images: [serviceData.bannerImage],
      type: "website",
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: serviceData.metaTitle,
      description: serviceData.metaDescription,
      images: [serviceData.bannerImage],
    },
    alternates: {
      canonical: "/service/split-system/split-system-installation-melbourne",
    },
  };
}

const page = () => {
  const serviceData = splitSystemData.find(
    (service) => service.slug === "split-system-installation-melbourne"
  );

  if (!serviceData) {
    notFound();
  }

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title={serviceData.title}
      />
      <SplitSystemServiceDetails serviceData={serviceData} />
    </div>
  );
};

export default page;
