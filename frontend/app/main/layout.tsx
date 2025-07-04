'use client';
// import Link from 'next/link'
import "../globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }