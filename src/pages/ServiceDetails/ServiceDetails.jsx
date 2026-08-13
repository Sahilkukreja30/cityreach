import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../../components/Magnetic/Magnetic';
import DarkVeil from '../../components/DarkVeil/DarkVeil';
import Contact from '../Home/sections/Contact';
import { useCountry } from '../../hooks/useCountry';
import './ServiceDetails.css';

const serviceData = {
  'web-designing-indore': {
    title: 'Web Design & Custom Web Development',
    subtitle: 'High-performance web design services and custom React web applications built to scale.',
    intro: 'As a premium web design company, we specialize in building fast, secure, and SEO-optimized custom web developments. Whether you need a corporate website, high-converting landing pages, or a headless CMS setup, our web design agency combines premium UI/UX design with React frameworks to boost search engine rankings.',
    features: [
      { name: 'Custom UI/UX Design & Branding', desc: 'Tailored, scroll-stopping digital brand designs optimized for customer engagement.' },
      { name: 'Performance & PageSpeed Optimization', desc: 'Ultra-fast load speeds (95+ Core Web Vitals score) ensuring minimal bounce rates.' },
      { name: 'Mobile-First Responsive Layouts', desc: 'Fluid, touch-optimized web pages built to scale across all device screens.' },
      { name: 'SEO & Structured Schema Markup', desc: 'Built-in structured data, clean HTML semantics, and metadata to help your business rank easily.' }
    ]
  },
  'custom-ecommerce-indore': {
    title: 'Custom E-commerce Development & Online Store Design',
    subtitle: 'Bespoke ecommerce website design and headless commerce setups for high-volume sales.',
    intro: 'Scale your business with our custom ecommerce development solutions. We construct tailored shopping carts, seamless checkout architectures, and secure databases. Our ecommerce website designs focus on page speed, conversion rate optimization (CRO), and seamless payment gateway integrations to turn visitors into buyers.',
    features: [
      { name: 'Bespoke E-commerce UI/UX Layouts', desc: 'Conversion-focused shopping experiences designed uniquely for your product lines.' },
      { name: 'Frictionless One-Click Checkout', desc: 'Optimized shopping cart and checkout flows to reduce cart abandonment rates.' },
      { name: 'High-Performance Databases', desc: 'Scalable cloud-hosted databases configured to handle high seasonal traffic spikes.' },
      { name: 'ERP, CRM & API Integrations', desc: 'Synchronize inventory, tracking, shipping, and customer records with your dashboard.' }
    ]
  },
  'shopify-store-indore': {
    title: 'Shopify Store Setup & Custom Liquid Theme Development',
    subtitle: 'Custom Shopify e-commerce stores optimized for speed, Shopify SEO, and conversions.',
    intro: 'Launch a high-converting storefront with our Shopify store setup services. As certified Shopify custom theme developers, we optimize Liquid templates, set up payment methods, configure product bundles, and handle Shopify SEO to rank your store on Google, driving immediate organic sales.',
    features: [
      { name: 'Custom Shopify Theme Design', desc: 'Bespoke layouts tailored to represent your brand identity without clunky app slowdowns.' },
      { name: 'Shopify SEO & Speed Audits', desc: 'Optimized metadata, schema markup, and images to secure top Google search rankings.' },
      { name: 'App Integrations & Upselling', desc: 'Configure reviews, email marketing, upsell funnels, and loyalty program software.' },
      { name: 'Payment Gateway & Logistics Sync', desc: 'Configure safe checkout options (Stripe, PayPal, local solutions) and shipping feeds.' }
    ]
  },
  'app-development-indore': {
    title: 'Android & iOS Mobile App Development Services',
    subtitle: 'Cross-platform app development using React Native and Flutter for premium native performance.',
    intro: 'Capture the mobile market with our premium mobile app development services. We design and build hybrid mobile applications using React Native and Flutter, ensuring native-speed performance, clean layouts, and encrypted API integrations for secure database interactions.',
    features: [
      { name: 'Cross-Platform App Development', desc: 'Write once, deploy perfectly to both Apple App Store and Google Play Store.' },
      { name: 'Secure API & Authentication', desc: 'Enforce safe logins (OAuth, Social login) and encrypted databases to secure user data.' },
      { name: 'Push Notification Campaigns', desc: 'Direct customer messaging pipelines to broadcast discounts, updates, and reminders.' },
      { name: 'Offline Data Cache & Sync', desc: 'Enable local storage caching so core application features load instantly without internet.' }
    ]
  },
  'social-advertising-indore': {
    title: 'Social Media Advertising Agency & Paid Ad Management',
    subtitle: 'Targeted Facebook, Instagram, and Meta ad campaigns engineered to maximize ROAS.',
    intro: 'Direct targeted traffic that converts immediately. As a results-driven social media advertising agency, we manage full-funnel Meta advertising campaigns, create high-converting video ads, write persuasive copy, and implement conversion tracking pixels to scale your sales.',
    features: [
      { name: 'Meta Target Audience Optimization', desc: 'Pinpoint high-intent buyers using demographical data, lookalike audiences, and behaviors.' },
      { name: 'High-CTR Creative & Copywriting', desc: 'Produce eye-catching image and video ads that increase click-through rates.' },
      { name: 'Full-Funnel Retargeting Ads', desc: 'Re-engage website drop-offs and shopping cart abandoners with dynamic product ads.' },
      { name: 'Conversion API & Pixel Setup', desc: 'Accurately measure leads, sales, and return on ad spend (ROAS) across all networks.' }
    ]
  },
  'seo-optimization-indore': {
    title: 'Search Engine Organisation (SEO) & SEO Optimization Services',
    subtitle: 'Rank #1 on Google and capture high-intent organic traffic with modern search strategy.',
    intro: 'Grow your business organically. Our professional SEO optimization services combine technical SEO audits, on-page content strategy, local SEO keyword research, and white-hat link building to boost your search engine visibility, driving targeted leads to your site.',
    features: [
      { name: 'Advanced On-Page SEO', desc: 'Optimize headings, keywords density, URLs, and meta tags for maximum relevance.' },
      { name: 'Topical Authority Content Strategy', desc: 'Create high-intent blog posts and landing pages targeting buyer search terms.' },
      { name: 'Technical SEO & Core Web Vitals', desc: 'Eliminate crawl errors, fix broken redirects, and optimize sitemaps and site load speed.' },
      { name: 'Local SEO & Google Map Pack', desc: 'Claim top spots on regional search results and Google Maps listings with citations.' }
    ]
  }
};

export default function ServiceDetails() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const country = useCountry();
  const data = serviceData[serviceSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!data) {
    return (
      <div className="service-detail-page container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '24px' }}>404</h2>
        <p style={{ marginBottom: '32px' }}>Page not found. The service you are looking for does not exist.</p>
        <Link to={`/${country}`} className="btn-primary" style={{ textDecoration: 'none' }}>Go Home</Link>
      </div>
    );
  }

  const handleEnquireClick = () => {
    navigate(`/${country}`, { state: { scrollTo: 'enquiry-section' } });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="service-detail-page container"
      >
        <div className="service-detail-content">
          <Link to={`/${country}`} className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="service-detail-title"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="service-detail-subtitle"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="service-detail-intro"
          >
            <p>{data.intro}</p>
          </motion.div>

          <h2 className="features-section-title">What We Deliver</h2>

          <div className="features-grid">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="feature-item-card glass"
              >
                <h3 className="feature-item-title">{feature.name}</h3>
                <p className="feature-item-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="service-detail-cta glass-accent">
            <h3>Connect With Our Growth House</h3>
            <p>
              Ready to grow your brand's authority, drive conversion, and elevate your search rankings? Connect with our team today.
            </p>
            <Magnetic>
              <button onClick={handleEnquireClick} className="btn-primary">
                Enquire Now
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
      <Contact />
    </>
  );
}
