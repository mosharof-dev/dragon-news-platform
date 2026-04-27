import {  Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});



export const metadata = {
  title: {
    default: "Dragon News - Latest Breaking News Worldwide",
    template: "%s | Dragon News",
  },
  description:
    "Stay updated with Dragon News. Get latest breaking news, world news, tech updates, sports, and more in real-time.",

  keywords: [
    "news",
    "breaking news",
    "world news",
    "tech news",
    "sports news",
    "Dragon News",
  ],

  authors: [{ name: "Dragon News Team" }],

  openGraph: {
    title: "Dragon News - Latest Breaking News",
    description:
      "Get real-time updates on world news, technology, sports, and more.",
    url: "https://yourdomain.com",
    siteName: "Dragon News",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dragon News",
    description: "Latest breaking news and updates worldwide.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${poppins.className}  h-full antialiased`}
    >
      <body className={` min-h-full flex flex-col`}>
        

        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
