import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../../components/Magnetic/Magnetic';
import './ServiceDetails.css';

const serviceData = {
  'web-designing-indore': {
    title: 'Website Design',
    subtitle: 'High-converting digital showrooms that balance premium aesthetics with flawless performance.',
    intro: 'We build custom, fast-loading websites designed to turn visitors into long-term clients. In a crowded digital space, to stand out you need a website that feels premium, loads instantly, and leads users directly to a conversion. We combine clean editorial aesthetics with modern React technology to build beautiful, responsive storefronts.',
    features: [
      { name: 'Custom UI/UX Design', desc: 'Completely tailored visual designs that match your premium branding and outline your identity.' },
      { name: 'Speed & Optimization', desc: 'Ultra-fast load speeds using modern build pipelines and responsive image assets.' },
      { name: 'Mobile Responsive', desc: 'Fluid layouts that scale flawlessly from large monitors to compact smartphones.' },
      { name: 'SEO & Structured Data', desc: 'Built-in schema markup and semantic tags so search engines know exactly what you offer.' }
    ]
  },
  'custom-ecommerce-indore': {
    title: 'Custom E-commerce Store Design',
    subtitle: 'Tailored online storefronts built from scratch for maximum conversions and unique customer experiences.',
    intro: 'Stand out with a fully customized checkout flow, bespoke animations, and layout architectures tailored precisely for your product catalog. We ensure your e-commerce platform scales efficiently under heavy traffic and integrates with key inventory platforms.',
    features: [
      { name: 'Bespoke UI/UX Layouts', desc: 'Tailored storefront visual hierarchy for your product lines to maximize brand value.' },
      { name: 'High-Speed Checkout', desc: 'Optimized multi-step or single-page checkout flows designed to reduce cart abandonment.' },
      { name: 'Scale & Performance', desc: 'Robust database structures and server setups built to handle high peak traffic seasons.' },
      { name: 'ERP & CRM Integration', desc: 'Sync customer orders, shipping labels, and accounting logs automatically with backend tools.' }
    ]
  },
  'shopify-store-indore': {
    title: 'Shopify E-commerce Store',
    subtitle: 'High-converting Shopify stores optimized for speed, search visibility, and seamless conversions.',
    intro: 'Set up your online store on the world\'s leading e-commerce engine. We build custom Shopify templates, integrate key marketing and sales channels, and coordinate payment gateways so you can start selling immediately.',
    features: [
      { name: 'Custom Theme Setup', desc: 'Beautiful custom-designed Shopify themes that reflect your true branding and color palette.' },
      { name: 'App Integrations', desc: 'Connect key loyalty programs, product reviews, and email marketing apps seamlessly.' },
      { name: 'Payment Gateway Sync', desc: 'Safe, reliable credit card and local payment gateways setup for global commerce.' },
      { name: 'Inventory Dashboard', desc: 'Simple backend panel setups to track inventory levels, shipments, and customer data.' }
    ]
  },
  'app-development-indore': {
    title: 'Android / IOS App Development',
    subtitle: 'Premium cross-platform mobile applications running smoothly on iOS and Android.',
    intro: 'Engage your customers directly on their mobile screens. We build high-performance mobile applications using React Native and Flutter, ensuring native-like performance, clean visual layouts, and secure backend integration.',
    features: [
      { name: 'Cross-Platform Apps', desc: 'Write once, run beautifully on both Apple App Store and Google Play.' },
      { name: 'Secure Authentication', desc: 'Safe user logins, social logins, and encrypted database connections for security.' },
      { name: 'Push Notifications', desc: 'Direct customer re-engagement funnels directly to user screens for promo drops.' },
      { name: 'Offline Functionality', desc: 'Ensure key application functions work seamlessly without active internet connection.' }
    ]
  },
  'social-advertising-indore': {
    title: 'Social Media Advertising',
    subtitle: 'Targeted campaigns across Facebook, Instagram, and Meta networks driving conversions.',
    intro: 'Direct traffic that converts. We coordinate end-to-end Meta advertising funnels, build stopping graphics and video ads, write engaging copy, and monitor conversion pixels to maximize your return on ad spend (ROAS).',
    features: [
      { name: 'Precision Targeting', desc: 'Target high-intent audiences using regional, demographic, and interest metrics.' },
      { name: 'Creative Production', desc: 'Produce stops-scrolling graphic and video ads that increase click-through rates.' },
      { name: 'ROAS Maximization', desc: 'Continuous budget scaling and bids optimization to reduce conversion costs.' },
      { name: 'Pixel & API Tracking', desc: 'Integrate conversion API and Meta pixels to measure true sales and lead attributions.' }
    ]
  },
  'seo-optimization-indore': {
    title: 'Search Engine Optimisation',
    subtitle: 'Rank #1 on Google and modern search engines to capture organic search traffic.',
    intro: 'Organic visibility drives long-term business growth. We audit your technical SEO, optimize metadata and local citations, and write content strategy that establishes high topical authority on Google search and AI engines.',
    features: [
      { name: 'On-Page SEO', desc: 'Optimizing header structures, titles, images, and sitemaps for indexing.' },
      { name: 'Topical Authority', desc: 'Strategic content creation targeting high-intent buyer keywords to dominate search.' },
      { name: 'Technical Audits', desc: 'Fixing site speed, crawl errors, structured schema data, and broken redirects.' },
      { name: 'Local Maps SEO', desc: 'Optimizing business listings and citations to maximize maps search visibility.' }
    ]
  }
};

export default function ServiceDetails() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const data = serviceData[serviceSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!data) {
    return (
      <div className="service-detail-page container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '24px' }}>404</h2>
        <p style={{ marginBottom: '32px' }}>Page not found. The service you are looking for does not exist.</p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Go Home</Link>
      </div>
    );
  }

  const handleEnquireClick = () => {
    navigate('/', { state: { scrollTo: 'enquiry-section' } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="service-detail-page container"
    >
      <div className="service-detail-content">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="service-detail-title shimmer-text"
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
  );
}
