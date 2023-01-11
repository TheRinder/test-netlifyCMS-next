import React from 'react'
import { BannerSection } from "./BannerSection";
import { ContactSection } from './ContactSection';
import { PackageSection } from "./PackageSection";
import { PartnersSection } from "./PartnersSection";
import { ServiceSection } from "./ServiceSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyUsSection } from "./WhyUsSection";

export default function HomePage() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <BannerSection />
      <ServiceSection />
      <WhyUsSection />
      <PackageSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <div className='btnGoUp'>
        <button onClick={() => ScrollToTop()}>
          Go Up!
        </button>
      </div>
    </>
  )
}