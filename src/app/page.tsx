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
import { Shield } from "lucide-react";

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
      logoText="Empowering Local Businesses with Web Presence"
      description="We build professional, responsive, and high-converting websites tailored for your local business to thrive online."
      buttons={[{ text: "Get Started", href: "#contact" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-high-tech-agency-dashboard-interface-d-1777592546396-33b70c48.png"
      imageAlt="A high-tech agency dashboard interface displaying local business website analytics. Sleek modern UI"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Mission"
      title="We bridge the digital gap for local shops"
      description="Local businesses are the heart of the community. We ensure they have the digital tools needed to reach every customer, everywhere."
      subdescription="From design to maintenance, we handle the technical side so you can focus on your business."
      icon={Shield}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/professional-team-collaborating-in-a-mod-1777592555785-626f0be6.png"
      mediaAnimation="slide-up"
      imageAlt="Professional team collaborating in a modern office space, digital agency atmosphere. Warm natural li"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        { title: "Responsive Design", description: "Mobile-first approach that looks perfect on every device.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592563399-0e06a83a.png" },
        { title: "SEO Optimized", description: "Designed to rank higher and attract more local traffic.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592650529-8b9e5a1f.png" },
        { title: "Full Support", description: "Ongoing technical maintenance and rapid support.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/a-set-of-three-clean-ui-icons-representi-1777592660853-582120c2.png" },
      ]}
      title="Everything you need to grow"
      description="Custom websites, SEO-friendly architecture, and blazing-fast hosting in one package."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "150+", title: "Clients Helped", description: "Growing community of local partners.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592572957-2159e341.png" },
        { id: "m2", value: "45%", title: "Avg Growth", description: "Increase in digital customer traffic.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592670511-8db84a57.png" },
        { id: "m3", value: "98%", title: "Retention Rate", description: "Businesses stay and grow with us.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/infographic-showing-business-growth-char-1777592678017-816ea5b7.png" },
      ]}
      title="Proven Results"
      description="Our sites deliver measurable impact for small businesses."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Johnson", role: "Cafe Owner", testimonial: "My cafe was invisible before this site. Now we have orders coming in daily!", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-confident-local-small-busi-1777592583678-66142838.png" },
        { id: "2", name: "Mark Miller", role: "Workshop Owner", testimonial: "Professional work, quick support, and actual results. Simply amazing.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-local-cafe-owner-looking-s-1777592592267-1d33be97.png" },
        { id: "3", name: "Jenny Chen", role: "Boutique Owner", testimonial: "Everything I needed to launch my store online in one place.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D2Qk1okt1zvqqOBkpMsWoBGPUB/portrait-of-a-local-workshop-owner-1777592602553-3dde518f.png" },
      ]}
      title="Loved by Business Owners"
      description="See how we've helped local businesses transition to the digital age."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
        faqs={[
          { id: "q1", title: "How long does it take?", content: "Most sites are completed within 2 weeks." },
          { id: "q2", title: "Do I need technical skills?", content: "Absolutely not! We manage everything." },
          { id: "q3", title: "What about security?", content: "We include SSL and security protocols on all sites." },
        ]}
        title="Questions? Answers."
        description="Everything you need to know."
        faqsAnimation="slide-up"
        useInvertedBackground={false}
        textboxLayout="split"
        imageSrc="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop"
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
        title="Ready to get started?"
        description="Fill out the form below and we'll be in touch within 24 hours."
        inputs={[
          { name: "name", type: "text", placeholder: "Full Name", required: true },
          { name: "email", type: "email", placeholder: "Email Address", required: true }
        ]}
        buttonText="Submit Request"
        useInvertedBackground={false}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
        logoText="NexaSites.com"
        columns={[
          { title: "Navigation", items: [
            { label: "Home", href: "#hero" },
            { label: "Services", href: "#features" },
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