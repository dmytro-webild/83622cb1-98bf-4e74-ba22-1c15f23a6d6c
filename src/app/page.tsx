"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Shield, Wrench, Scissors, Coffee, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="NexaSites.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Digital Solutions for Local Businesses"
      description="Professional web presence for restaurants, auto shops, barbers, and coffee shops. We help your local business stand out."
      buttons={[{ text: "Get Started", href: "#contact" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-high-tech-agency-dashboard-interface-d-1777592546396-33b70c48.png"
      imageAlt="Modern local business dashboard showing web presence growth."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Focus"
      title="Tailored for your local industry"
      description="We understand the unique needs of service-based and retail local businesses."
      subdescription="Whether you are serving food, fixing engines, cutting hair, or roasting coffee, we build sites that bring customers to your door."
      icon={Shield}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/professional-team-collaborating-in-a-mod-1777592555785-626f0be6.png"
      mediaAnimation="slide-up"
      imageAlt="Dedicated support for local business owners."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        { title: "Restaurants", description: "Menu integration and booking features for local eateries.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592563399-0e06a83a.png" },
        { title: "Auto & Barber Shops", description: "Scheduling tools and service menus for high-turnover shops.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592650529-8b9e5a1f.png" },
        { title: "Coffee Shops", description: "Showcase your roasts and locations with a beautiful online presence.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592660853-582120c2.png" },
      ]}
      title="Industry Specialized Solutions"
      description="We provide targeted web solutions to ensure your business grows exactly where you need it most."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "50+", title: "Restaurants", description: "Serving hungry customers digitally.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592572957-2159e341.png" },
        { id: "m2", value: "30+", title: "Repair & Barbers", description: "Streamlined bookings for busy shops.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592670511-8db84a57.png" },
        { id: "m3", value: "20+", title: "Coffee Shops", description: "Brewing up brand loyalty.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592678017-816ea5b7.png" },
      ]}
      title="Proven Industry Success"
      description="Across all sectors, we help local businesses achieve their digital growth targets."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Elena V.", role: "Coffee Shop Owner", testimonial: "Our new site has tripled our online visibility and local traffic!", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-confident-local-small-busi-1777592583678-66142838.png" },
        { id: "2", name: "Mike R.", role: "Auto Shop Manager", testimonial: "Scheduling issues are gone. Our clients love the simplicity of booking online.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-local-cafe-owner-looking-s-1777592592267-1d33be97.png" },
        { id: "3", name: "David S.", role: "Barber", testimonial: "Professional layout helped me establish my brand perfectly.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-local-workshop-owner-1777592602553-3dde518f.png" },
      ]}
      title="Voices of Local Owners"
      description="Hear from local businesses that have successfully scaled with us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
        faqs={[
          { id: "q1", title: "Can you handle my specific menu?", content: "Yes, we create dynamic, easy-to-update menu displays for restaurants and cafes." },
          { id: "q2", title: "How do I integrate scheduling?", content: "We integrate standard booking software compatible with auto repair and barber shops." },
          { id: "q3", title: "Do you provide support?", content: "Yes, we provide continuous technical support for all our business partners." },
        ]}
        title="Your Questions, Answered"
        description="We ensure all your business needs are covered from the first day."
        faqsAnimation="slide-up"
        useInvertedBackground={false}
        textboxLayout="split"
        imageSrc="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop"
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
        title="Launch Your Business Online"
        description="Tell us about your business today and let's start your growth."
        inputs={[
          { name: "name", type: "text", placeholder: "Business Name", required: true },
          { name: "email", type: "email", placeholder: "Your Email", required: true }
        ]}
        buttonText="Start Now"
        useInvertedBackground={false}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
        logoText="NexaSites.com"
        columns={[
          { title: "Industries", items: [
            { label: "Restaurants", href: "#features" },
            { label: "Auto Repair", href: "#features" },
            { label: "Barber Shops", href: "#features" },
            { label: "Coffee Shops", href: "#features" },
          ] },
          { title: "Support", items: [
            { label: "Contact", href: "#contact" },
          ] }
        ]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
