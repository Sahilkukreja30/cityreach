import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './sections.css';

const servicesData = [
  {
    num: '01',
    title: 'Web Designing',
    desc: 'High-converting digital showrooms that balance premium aesthetics with flawless performance. We build custom, fast-loading websites designed to turn visitors into long-term clients.',
    link: '/web-designing-indore',
    spanClass: 'grid-w-3'
  },
  {
    num: '02',
    title: 'Google My Business Mastery',
    desc: 'Maximizing local search exposure is the fastest way to grow in Indore. We optimize your GMB profile to drive direct calls, maps navigation requests, and store visits.',
    link: '/gmb-optimization-indore',
    spanClass: 'grid-w-3'
  },
  {
    num: '03',
    title: 'SEO & GEO',
    desc: 'Ensuring your brand remains visible not just on Google search, but also within new AI-driven Generative Engines and voice assistants.',
    link: '/seo-services-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '04',
    title: 'Meta Ads',
    desc: 'Targeted advertising (Facebook & Instagram) that hits the right audience. We manage your ad spend to ensure maximum ROI and high-quality lead generation.',
    link: '/meta-ads-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '05',
    title: 'Social Media Management',
    desc: 'Building a brand that people actually follow. We handle your social narrative with high-quality content and reels that keep your audience engaged.',
    link: '/smm-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '06',
    title: 'Complete Digital Management',
    desc: 'The ultimate hands-off solution. We take full ownership of your digital trajectory, website, local SEO, GMB optimization, ads, and socials while you focus entirely on running your business operations.',
    link: '/digital-management-indore',
    spanClass: 'grid-w-6'
  }
];

export default function Services() {
  return (
    <section id="services-section" className="services-container container">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="services-title"
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
            className={`service-card glass ${service.spanClass}`}
          >
            <div>
              <div className="service-card-num">{service.num}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
            <Link to={service.link} className="service-card-link">
              Know More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
