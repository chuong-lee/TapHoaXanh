// 📁 layout.tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import 'bootstrap/dist/css/bootstrap.min.css'
// import './client/css/bootstrap.min.css'
// import './client/css/all.min.css'
// import './client/css/animate.css'
// import './client/css/hover-min.css'
// import './client/css/flag-icons.min.css'
// import './client/css/style.css'
// import './client/styles/news-articles.css'
// import './client/slick/slick.css'
// import './client/fonts/fontstyle.css'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tạp Hóa Xanh - Thực Phẩm Sạch",
  description: "Tạp Hóa Xanh - Cung cấp thực phẩm sạch, an toàn cho sức khỏe",
  keywords: "thực phẩm sạch, rau củ quả, thịt cá, đồ khô, gia vị",
  icons: {
    icon: "/client/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/client/images/favicon.png" type="image/gif" sizes="16x16" />
        {/* Nếu cần font, bạn có thể import trong CSS hoặc ở đây */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
