import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BorderGlow from '../../../components/BorderGlow/BorderGlow';
import GradientText from '../../../components/GradientText/GradientText';
import './sections.css';

const servicesData = [
  {
    num: '01',
    title: 'Website Design',
    desc: 'Custom, fast-loading websites designed for your business. We combine premium visuals with clean code to help you attract customers and generate local leads.',
    link: '/web-designing-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '02',
    title: 'Custom E-commerce Store Design',
    desc: 'Bespoke online stores built to sell your products. We design custom shopping carts, seamless checkout systems, and secure databases tailored for your brand.',
    link: '/custom-ecommerce-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '03',
    title: 'Shopify E-commerce store Store',
    desc: 'Professional Shopify store setup and customization. We optimize your store for Google search rankings, mobile speed, and higher checkout conversions.',
    link: '/shopify-store-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '04',
    title: 'Android / IOS App Development',
    desc: 'High-performance mobile applications for Android and iOS devices. We build fast, secure apps with clean layouts to keep your users engaged.',
    link: '/app-development-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '05',
    title: 'Social Media Advertising',
    desc: 'Paid ad campaigns on Facebook, Instagram, and Meta networks. We handle targeting, creative design, and conversion tracking to increase your business sales.',
    link: '/social-advertising-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '06',
    title: 'Search Engine Optimisation (SEO)',
    desc: 'Improving your website visibility on search engines like Google. We optimize site structure, page content, and keywords to attract organic visitors looking for your products or services.',
    link: '/seo-optimization-indore',
    spanClass: 'grid-w-2'
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
        style={{ border: 'none', background: 'transparent', textAlign: 'left' }}
      >
        <GradientText
          colors={["#ffffff", "#8b5cf6", "#ffffff", "#8b5cf6", "#ffffff"]}
          animationSpeed={5}
          showBorder={false}
        >
          Our Services
        </GradientText>
      </motion.h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
            className={service.spanClass}
          >
            <BorderGlow
              edgeSensitivity={60}
              glowColor="40 80 80"
              backgroundColor="rgba(0, 0, 0, 0.2)"
              borderRadius={25}
              glowRadius={20}
              glowIntensity={0.35}
              coneSpread={25}
              animated={true}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              fillOpacity={0.0}
            >
              <div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
              <Link to={service.link} className="service-card-link">
                Know More →
              </Link>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
