import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = "Lista de restaurantes";
const APP_DEFAULT_TITLE = "Lista de restaurantes";
const APP_TITLE_TEMPLATE = "%s - Lista de restaurantes";
const APP_DESCRIPTION = "Lista de restaurantes";

export const metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Lista de restaurantes</title>
        <meta name="description" content="Best PWA app in the world!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" /> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:url" content="https://yourdomain.com" /> */}
        <meta name="twitter:title" content="My awesome PWA app" />
        <meta name="twitter:description" content="Best PWA app in the world!" />
        {/* <meta name="twitter:image" content="/icons/twitter.png" /> */}
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My awesome PWA app" />
        <meta property="og:description" content="Best PWA app in the world!" />
        <meta property="og:site_name" content="My awesome PWA app" />
        {/* <meta property="og:url" content="https://yourdomain.com" /> */}
        {/* <meta property="og:image" content="/icons/og.png" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
