'use client';
// import Link from 'next/link'
import "../globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FlashSale from "@/components/FlashSale";
import BestSells from "@/components/BestSells";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function HomeLayout({ children }: { children: React.ReactNode }) {

    return (
      <>
      
      <Header />
      <div className="home">
      <HeroSection />
      <div className="container">
      <FeaturedCategories />
      <main>{children}</main>
      <Footer />
        
      </div>
      </div>
      </>
    )
  }