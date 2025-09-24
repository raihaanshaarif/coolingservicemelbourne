import { Archivo, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--body-font",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default:
      "Cooling Service Melbourne | Air Conditioning Repair & Installation",
    template: "%s | Cooling Service Melbourne",
  },
  description:
    "Professional air conditioning services in Melbourne. Expert split system repair, evaporative cooling, ducted refrigeration installation & 24/7 emergency repairs. Call 0405 133 761 for same-day service.",
  keywords:
    "air conditioning Melbourne, split system repair, evaporative cooling, ducted refrigeration, emergency aircon repair, cooling service melbourne, aircon installation melbourne",
  authors: [{ name: "Cooling Service Melbourne" }],
  generator: "Next.js",
  applicationName: "Cooling Service Melbourne",
  referrer: "origin-when-cross-origin",
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://coolingservicemelbourne.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://coolingservicemelbourne.com.au",
    siteName: "Cooling Service Melbourne",
    title:
      "Professional Air Conditioning Services Melbourne | Same-Day Repairs",
    description:
      "Melbourne's trusted cooling specialists. Professional split system repair, evaporative cooling service, ducted refrigeration & 24/7 emergency repairs. Licensed technicians across metro Melbourne.",
    images: [
      {
        url: "/openGraphImage.jpg",
        width: 1200,
        height: 630,
        alt: "Cooling Service Melbourne - Professional Air Conditioning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooling Service Melbourne | Air Conditioning Repair & Installation",
    description:
      "Professional air conditioning services in Melbourne. Expert repairs, installation & 24/7 emergency service. Call 0405 133 761",
    images: ["/openGraphImage.jpg"],
    creator: "@coolingservicemelb",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
