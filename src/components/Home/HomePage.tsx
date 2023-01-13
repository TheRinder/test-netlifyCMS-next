import React from 'react'
import { Author } from '../News/NewsPage';
import { BannerSection } from "./BannerSection";
import { ContactSection } from './ContactSection';
import { PackageSection } from "./PackageSection";
import { PartnersSection } from "./PartnersSection";
import { ServiceSection } from "./ServiceSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyUsSection } from "./WhyUsSection";

export interface Testimonials {
  author: Author,
  text: string
}

export interface Partner {
  logo: string,
  description: string,
}

interface HomePageProps {
  testimonials: Testimonials[],
  partners: Partner[]
}

export default function HomePage(props: HomePageProps) {
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
      <PartnersSection partners={props.partners} />
      <TestimonialsSection testimonials={props.testimonials} />
      <ContactSection />
      <div className='btnGoUp'>
        <button onClick={() => ScrollToTop()}>
          Go Up!
        </button>
      </div>
    </>
  )
}