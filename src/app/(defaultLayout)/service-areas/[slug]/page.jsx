import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceAreaDetails from "@/app/Components/ServiceAreas/ServiceAreaDetails";
import { notFound } from "next/navigation";

// Service areas data
const serviceAreas = [
  { name: "Armadale", slug: "armadale" },
  { name: "Ashwood", slug: "ashwood" },
  { name: "Attwood", slug: "attwood" },
  { name: "Avonsleigh", slug: "avonsleigh" },
  { name: "Badger Creek", slug: "badger-creek" },
  { name: "Bayswater", slug: "bayswater" },
  { name: "Baxter", slug: "baxter" },
  { name: "Beaconsfield", slug: "beaconsfield" },
  { name: "Belgrave", slug: "belgrave" },
  { name: "Bentleigh", slug: "bentleigh" },
  { name: "Bentleigh East", slug: "bentleigh-east" },
  { name: "Berwick", slug: "berwick" },
  { name: "Beaumaris", slug: "beaumaris" },
  { name: "Bittern", slug: "bittern" },
  { name: "Black Rock", slug: "black-rock" },
  { name: "Blackburn North", slug: "blackburn-north" },
  { name: "Blairgowrie", slug: "blairgowrie" },
  { name: "Boneo", slug: "boneo" },
  { name: "Boronia", slug: "boronia" },
  { name: "Botanic Ridge", slug: "botanic-ridge" },
  { name: "Box Hill", slug: "box-hill" },
  { name: "Briar Hill", slug: "briar-hill" },
  { name: "Broadmeadows", slug: "broadmeadows" },
  { name: "Brighton", slug: "brighton" },
  { name: "Brighton East", slug: "brighton-east" },
  { name: "Bundoora", slug: "bundoora" },
  { name: "Burwood 3125", slug: "burwood-3125" },
  { name: "Burwood Chadstone", slug: "burwood-chadstone" },
  { name: "Burwood East", slug: "burwood-east" },
  { name: "Caulfield", slug: "caulfield" },
  { name: "Chadstone", slug: "chadstone" },
  { name: "Chelsea", slug: "chelsea" },
  { name: "Chelsea Heights", slug: "chelsea-heights" },
  { name: "Chirnside Park", slug: "chirnside-park" },
  { name: "Clayton", slug: "clayton" },
  { name: "Clayton South", slug: "clayton-south" },
  { name: "Clyde", slug: "clyde" },
  { name: "Clyde North", slug: "clyde-north" },
  { name: "Dandenong", slug: "dandenong" },
  { name: "Dandenong North", slug: "dandenong-north" },
  { name: "Dandenong South", slug: "dandenong-south" },
  { name: "Doncaster", slug: "doncaster" },
  { name: "Doncaster East", slug: "doncaster-east" },
  { name: "Donvale", slug: "donvale" },
  { name: "Doveton", slug: "doveton" },
  { name: "Eaglehawk", slug: "eaglehawk" },
  { name: "Epping", slug: "epping" },
  { name: "Essendon", slug: "essendon" },
  { name: "Essendon Fields", slug: "essendon-fields" },
  { name: "Fawkner", slug: "fawkner" },
  { name: "Ferntree Gully", slug: "ferntree-gully" },
  { name: "Frankston", slug: "frankston" },
  { name: "Frankston North", slug: "frankston-north" },
  { name: "Frankston South", slug: "frankston-south" },
  { name: "Gembrook", slug: "gembrook" },
  { name: "Glen Waverley", slug: "glen-waverley" },
  { name: "Greensborough", slug: "greensborough" },
  { name: "Hallam", slug: "hallam" },
  { name: "Hampton", slug: "hampton" },
  { name: "Hampton Park", slug: "hampton-park" },
  { name: "Heatherton", slug: "heatherton" },
  { name: "Highett", slug: "highett" },
  { name: "Hillside", slug: "hillside" },
  { name: "Hoppers Crossing", slug: "hoppers-crossing" },
  { name: "Keilor", slug: "keilor" },
  { name: "Keilor Downs", slug: "keilor-downs" },
  { name: "Keilor Lodge", slug: "keilor-lodge" },
  { name: "Kings Park", slug: "kings-park" },
  { name: "Knoxfield", slug: "knoxfield" },
  { name: "Lakes Entrance", slug: "lakes-entrance" },
  { name: "Lalor", slug: "lalor" },
  { name: "Langwarrin", slug: "langwarrin" },
  { name: "Lara", slug: "lara" },
  { name: "Laverton", slug: "laverton" },
  { name: "Laverton North", slug: "laverton-north" },
  { name: "Lilydale", slug: "lilydale" },
  { name: "Little River", slug: "little-river" },
  { name: "Macleod", slug: "macleod" },
  { name: "Maroondah", slug: "maroondah" },
  { name: "Melbourne CBD", slug: "melbourne-cbd" },
  { name: "Melbourne Airport", slug: "melbourne-airport" },
  { name: "Melbourne East", slug: "melbourne-east" },
  { name: "Melbourne South", slug: "melbourne-south" },
  { name: "Melton", slug: "melton" },
  { name: "Melton South", slug: "melton-south" },
  { name: "Mordialloc", slug: "mordialloc" },
  { name: "Mornington", slug: "mornington" },
  { name: "Mount Eliza", slug: "mount-eliza" },
  { name: "Mount Evelyn", slug: "mount-evelyn" },
  { name: "Mount Waverley", slug: "mount-waverley" },
  { name: "Narre Warren", slug: "narre-warren" },
  { name: "Narre Warren North", slug: "narre-warren-north" },
  { name: "Narre Warren South", slug: "narre-warren-south" },
  { name: "North Melbourne", slug: "north-melbourne" },
  { name: "Northcote", slug: "northcote" },
  { name: "Oakleigh", slug: "oakleigh" },
  { name: "Oakleigh South", slug: "oakleigh-south" },
  { name: "Pakenham", slug: "pakenham" },
  { name: "Pakenham South", slug: "pakenham-south" },
  { name: "Pakenham Upper", slug: "pakenham-upper" },
  { name: "Parkdale", slug: "parkdale" },
  { name: "Pascoe Vale", slug: "pascoe-vale" },
  { name: "Pascoe Vale South", slug: "pascoe-vale-south" },
  { name: "Point Cook", slug: "point-cook" },
  { name: "Point Leo", slug: "point-leo" },
  { name: "Port Melbourne", slug: "port-melbourne" },
  { name: "Ringwood", slug: "ringwood" },
  { name: "Ringwood East", slug: "ringwood-east" },
  { name: "Ringwood North", slug: "ringwood-north" },
  { name: "Rivervale", slug: "rivervale" },
  { name: "Rowville", slug: "rowville" },
  { name: "Sandringham", slug: "sandringham" },
  { name: "Scoresby", slug: "scoresby" },
  { name: "Seaford", slug: "seaford" },
  { name: "Skye", slug: "skye" },
  { name: "Somerville", slug: "somerville" },
  { name: "South Melbourne", slug: "south-melbourne" },
  { name: "South Morang", slug: "south-morang" },
  { name: "Southbank", slug: "southbank" },
  { name: "Springvale", slug: "springvale" },
  { name: "Springvale South", slug: "springvale-south" },
  { name: "St Albans", slug: "st-albans" },
  { name: "St Kilda", slug: "st-kilda" },
  { name: "St Kilda East", slug: "st-kilda-east" },
  { name: "Sunshine", slug: "sunshine" },
  { name: "Sunshine North", slug: "sunshine-north" },
  { name: "Sunshine West", slug: "sunshine-west" },
  { name: "Tarneit", slug: "tarneit" },
  { name: "Tooradin", slug: "tooradin" },
  { name: "Toorak", slug: "toorak" },
  { name: "Truemans", slug: "truemans" },
  { name: "Tyabb", slug: "tyabb" },
  { name: "Upper Ferntree Gully", slug: "upper-ferntree-gully" },
  { name: "Wantirna", slug: "wantirna" },
  { name: "Wantirna South", slug: "wantirna-south" },
  { name: "Werribee", slug: "werribee" },
  { name: "Werribee South", slug: "werribee-south" },
  { name: "Wheelers Hill", slug: "wheelers-hill" },
  { name: "Yallambie", slug: "yallambie" },
  { name: "Yarra Glen", slug: "yarra-glen" },
  { name: "Yarra Junction", slug: "yarra-junction" },
  { name: "Yarraville", slug: "yarraville" },
  { name: "Yellingbo", slug: "yellingbo" },
  { name: "Yering", slug: "yering" },
];

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = serviceAreas.find((area) => area.slug === slug);

  if (!area) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `${area.name} Air Conditioning Services | Same Day Repair & Installation | 0405 133 761`,
    description: `Expert air conditioning services in ${area.name}, Melbourne. Emergency repairs, split system installation, ducted cooling, evaporative maintenance. Licensed technicians, 15+ years experience. Same-day service available. Call 0405 133 761 for free quotes.`,
    keywords: [
      `air conditioning ${area.name}`,
      `aircon repair ${area.name}`,
      `split system ${area.name}`,
      `ducted cooling ${area.name}`,
      `evaporative cooling ${area.name}`,
      `emergency aircon ${area.name}`,
      `cooling service ${area.name}`,
      `air conditioner installation ${area.name}`,
      `HVAC ${area.name}`,
      `refrigeration repair ${area.name}`,
      `${area.name} cooling specialist`,
      `same day aircon repair ${area.name}`,
      `24/7 air conditioning ${area.name}`,
      `licensed air conditioning ${area.name}`,
      `energy efficient cooling ${area.name}`,
    ].join(", "),
    authors: [{ name: "Cooling Service Melbourne" }],
    creator: "Cooling Service Melbourne",
    publisher: "Cooling Service Melbourne",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${area.name} Air Conditioning Services | Same Day Repair & Installation`,
      description: `Professional air conditioning services in ${area.name}, Melbourne. Emergency repairs, installations, maintenance. Licensed technicians, 15+ years experience, same-day service.`,
      url: `https://coolingservicemelbourne.com.au/service-areas/${area.slug}`,
      siteName: "Cooling Service Melbourne",
      images: [
        {
          url: "/assets/img/service_banner.jpg",
          width: 1200,
          height: 630,
          alt: `Air Conditioning Services in ${area.name} Melbourne`,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.name} Air Conditioning Services | Same Day Repair`,
      description: `Expert air conditioning services in ${area.name}, Melbourne. Emergency repairs, installations, maintenance. Call 0405 133 761`,
      creator: "@CoolingServiceMelb",
      images: ["/assets/img/service_banner.jpg"],
    },
    alternates: {
      canonical: `https://coolingservicemelbourne.com.au/service-areas/${area.slug}`,
    },
    other: {
      "geo.region": "AU-VIC",
      "geo.placename": `${area.name}, Melbourne, Victoria`,
      "geo.position": "-37.8136;144.9631",
      ICBM: "-37.8136, 144.9631",
      "business:contact_data:locality": area.name,
      "business:contact_data:region": "Victoria",
      "business:contact_data:country_name": "Australia",
      "business:contact_data:phone_number": "0405133761",
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const area = serviceAreas.find((area) => area.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title={`Air Conditioning Services ${area.name}`}
      />
      <ServiceAreaDetails areaName={area.name} areaSlug={area.slug} />
    </div>
  );
};

export default page;
