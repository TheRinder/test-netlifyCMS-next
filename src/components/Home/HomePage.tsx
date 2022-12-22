import React from 'react'
import { BannerSection } from "./BannerSection";
import { PackageSection } from "./PackageSection";
import { PartnersSection } from "./PartnersSection";
import { ServiceSection } from "./ServiceSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyUsSection } from "./WhyUsSection";

export default function HomePage () {
  return(
    <>
      <BannerSection />
      <ServiceSection />
      <WhyUsSection />
      <PackageSection />
      <PartnersSection />
      <TestimonialsSection />
    </>
  )
}