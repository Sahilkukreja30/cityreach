import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../../components/Magnetic/Magnetic';
import './ServiceDetails.css';

const serviceData = {
  'web-designing-indore': {
    title: 'Web Designing',
    subtitle: 'High-converting digital showrooms that balance premium aesthetics with flawless performance.',
    intro: 'We build custom, fast-loading websites designed to turn visitors into long-term clients. In Indore, the digital space is crowded. To stand out, you need a website that feels premium, loads instantly, and leads users directly to a conversion. We combine clean editorial aesthetics with modern React technology to build beautiful storefronts.',
    features: [
      { name: 'Custom UI/UX Design', desc: 'Completely tailored visual designs that match your premium branding and outline your identity.' },
      { name: 'Speed & Optimization', desc: 'Ultra-fast load speeds using modern build pipelines and responsive image assets.' },
      { name: 'Mobile Responsive', desc: 'Fluid layouts that scale flawlessly from large monitors to compact smartphones.' },
      { name: 'SEO & Structured Data', desc: 'Built-in schema markup and semantic tags so Google knows exactly what you sell.' }
    ]
  },
  'gmb-optimization-indore': {
    title: 'GMB Optimization',
    subtitle: 'Maximizing local search exposure is the fastest way to grow in Indore.',
    intro: 'If your business is not ranking in the Indore Google Maps Local Pack, you are leaving massive revenue on the table. We optimize your GMB profile to drive direct calls, maps navigation directions, and website visits. We manage your local citations, coordinate reviews, and establish your presence in local directories.',
    features: [
      { name: 'Maps Rank Optimization', desc: 'Optimize reviews, categories, and posts to rank higher in local search maps.' },
      { name: 'Citation Audit & Sync', desc: 'Sync your name, address, and phone number across the web to build Google authority.' },
      { name: 'Review Growth Systems', desc: 'Set up systematic templates to acquire high-quality reviews from satisfied customers.' },
      { name: 'GMB Analytics & Insights', desc: 'Track local phone calls, navigation clicks, and impressions on a simple dashboard.' }
    ]
  },
  'seo-services-indore': {
    title: 'SEO & GEO Dominance',
    subtitle: 'Ensuring your brand remains visible on Google and new generative AI engines.',
    intro: 'Traditional search engine optimization is no longer enough. Modern users search via AI platforms like Gemini, ChatGPT, and Perplexity. We specialize in Generative Engine Optimization (GEO) alongside standard SEO, ensuring your business is recommended when users ask complex conversational questions.',
    features: [
      { name: 'AI Search Optimization', desc: 'Optimize website structure and data format to feed generative AI engine scrapers.' },
      { name: 'Indore Local SEO', desc: 'Optimize for regional search queries, ensuring you capture maximum Indore traffic.' },
      { name: 'Technical SEO', desc: 'Clean up crawlers errors, broken links, robots.txt, and sitemaps for deep indexing.' },
      { name: 'Keywords Research', desc: 'Identify high-value, intent-rich search phrases that lead to actual enquiries.' }
    ]
  },
  'meta-ads-indore': {
    title: 'Meta Ads Management',
    subtitle: 'Targeted Facebook & Instagram advertising that drives lead generation.',
    intro: 'Stop boosting posts without tracking conversions. We design data-backed Meta Ads funnels targeting buyers with high intent. We build creative assets, write engaging copies, write custom landing pages, and optimize your pixel event triggers to guarantee the highest possible ROI.',
    features: [
      { name: 'Advanced Targeting', desc: 'Target local Indore audiences or national markets using demographics and behaviors.' },
      { name: 'Ad Creative Design', desc: 'Develop beautiful, scrolling-stopping graphics, video assets, and copy.' },
      { name: 'A/B Split Testing', desc: 'Continuous testing of creatives, headings, and targets to find the best converter.' },
      { name: 'Retargeting Funnels', desc: 'Re-engage site visitors who left without placing an enquiry, converting them late.' }
    ]
  },
  'smm-indore': {
    title: 'Social Media Management',
    subtitle: 'Building a brand narrative that people actually want to follow.',
    intro: 'Social media is about storytelling. We curate premium visual feeds, plan reels, edit high-quality content, and write copies that reflect your true branding. We ensure your feeds are cohesive, active, and represent the premium stature of your business.',
    features: [
      { name: 'Content Styling', desc: 'Curate a luxury grid aesthetic with custom color grading and templates.' },
      { name: 'Reels Shoots & Editing', desc: 'Help produce high-retention vertical videos to grow organic reach.' },
      { name: 'Community Care', desc: 'Maintain direct engagement with followers, direct messages, and comments.' },
      { name: 'Cohesive Strategy', desc: 'Coordinated social campaigns matching your business goals and seasonal promos.' }
    ]
  },
  'digital-management-indore': {
    title: 'Digital Management',
    subtitle: 'The ultimate hands-off solution for your brand\'s digital trajectory.',
    intro: 'We function as your in-house CMO and digital marketing team. We take full ownership of your website development, SEO strategies, local listings, ads budget management, and content creation. You receive regular ROI reports while we drive the digital engine.',
    features: [
      { name: 'CMO-on-Demand', desc: 'Direct strategic guidance and resource allocation to maximize digital growth.' },
      { name: 'End-to-End Execution', desc: 'All-inclusive execution of web edits, search ranking, social channels, and ad accounts.' },
      { name: 'Clear ROI Reporting', desc: 'No vanity metrics. We report leads, calls, sales, and total customer acquisition costs.' },
      { name: 'Brand Coherency', desc: 'Ensuring your voice is consistent across SEO pages, socials, newsletters, and ad graphics.' }
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
