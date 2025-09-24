import BreadCumb from "@/app/Components/Common/BreadCumb";
import DuctedSystemServiceDetails from "@/app/Components/ServiceDetails/DuctedSystemServiceDetails";
import ductedSystemData from "@/app/Data/ductedSystemServices.json";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const serviceData = ductedSystemData.find(
    (service) => service.slug === "emergency-ducted-system-repairs-melbourne"
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
      "emergency ducted system repair melbourne, 24/7 ducted repair, urgent ducted system fix, emergency ducted aircon repair, same day ducted repair melbourne",
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
      canonical:
        "/service/ducted-system/emergency-ducted-system-repairs-melbourne",
    },
  };
}

const page = () => {
  const serviceData = ductedSystemData.find(
    (service) => service.slug === "emergency-ducted-system-repairs-melbourne"
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
      <DuctedSystemServiceDetails serviceData={serviceData} />
    </div>
  );
};

export default page;
