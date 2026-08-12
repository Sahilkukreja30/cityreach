import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BorderGlow from '../../../components/BorderGlow/BorderGlow';
import GradientText from '../../../components/GradientText/GradientText';
import { useCountry } from '../../../hooks/useCountry';
import './sections.css';

const servicesData = [
  {
    num: '01',
    title: 'Web Design & Custom Web Development',
    desc: 'Award-winning web design company building responsive, custom websites and high-converting web applications. We blend premium UI/UX design with clean code to drive organic leads.',
    link: '/web-designing-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '02',
    title: 'Custom E-commerce Store Design',
    desc: 'Bespoke e-commerce website design and custom ecommerce development solutions. We build secure shopping carts, customized checkout systems, and high-performance databases.',
    link: '/custom-ecommerce-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '03',
    title: 'Shopify E-commerce Store Development',
    desc: 'Professional Shopify store setup and custom Liquid theme development. We optimize your store for Shopify SEO, mobile page speed, and maximum sales conversions.',
    link: '/shopify-store-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '04',
    title: 'Android & iOS App Development',
    desc: 'Premium mobile app development services building custom iOS and Android apps. We leverage React Native and Flutter for native-like performance and secure APIs.',
    link: '/app-development-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '05',
    title: 'Social Media & Paid Advertising',
    desc: 'Targeted Meta ad campaigns across Facebook, Instagram, and TikTok. We design high-CTR creatives, optimize retargeting funnels, and maximize ROAS.',
    link: '/social-advertising-indore',
    spanClass: 'grid-w-2'
  },
  {
    num: '06',
    title: 'Search Engine Optimisation (SEO)',
    desc: 'Comprehensive SEO optimization services to rank #1 on Google. We handle technical SEO audits, local SEO keywords, link building, and content strategy.',
    link: '/seo-optimization-indore',
    spanClass: 'grid-w-2'
  }
];

export default function Services() {
  const country = useCountry();

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
              <Link to={`/${country}${service.link}`} className="service-card-link">
                Know More →
              </Link>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
