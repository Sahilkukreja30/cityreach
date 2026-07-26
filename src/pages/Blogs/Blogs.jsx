import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';
import Magnetic from '../../components/Magnetic/Magnetic';
import './Blogs.css';

const blogsData = [
  {
    id: 1,
    title: 'The Future of Search: Preparing for Generative Engine Optimization (GEO)',
    date: 'July 24, 2026',
    tag: 'SEO & AI',
    desc: 'As users migrate from Google searching to conversational AI assistants like ChatGPT and Gemini, standard SEO is dying. Learn how GEO helps your business be the recommended solution.',
    content: (
      <>
        <p>Search engines are undergoing their biggest revolution since the inception of the internet. The traditional page of blue links is being supplemented—and in some areas, entirely replaced—by Generative Search Experiences. When a user asks, <em>"Who is the best premium web designer in Indore for a luxury restaurant?"</em>, they don't want a list of directories. They want a single, well-reasoned recommendation.</p>
        <br />
        <h3>What is Generative Engine Optimization (GEO)?</h3>
        <p>GEO is the process of optimizing your digital footprint so that Large Language Models (LLMs) like ChatGPT, Google Gemini, and Claude cite your brand as the primary reference when answering user queries. These models do not search keywords; they compile relationships, semantic authority, and reputation metrics.</p>
        <br />
        <h3>Key Pillars of GEO</h3>
        <p>To prepare your website for AI-driven engines, you must focus on the following strategies:</p>
        <br />
        <ul>
          <li><strong>Semantic Breadth:</strong> Write deep, contextual descriptions of your services. Instead of listing "web development," explain the design philosophy, standard libraries used, and performance metrics achieved.</li>
          <li><strong>JSON-LD Schema Markup:</strong> AI crawlers ingest structured metadata. Implement exhaustive LocalBusiness and Service schemas so machines can read your details with absolute certainty.</li>
          <li><strong>Digital PR & Citations:</strong> LLMs are trained on news, blogs, and public forums. Having reviews and mentions across local Indore media and industry blogs builds the reputational anchor AI models seek.</li>
        </ul>
        <br />
        <p>At CityReach, we are already engineering websites with GEO-optimized layouts. We don't just optimize for the Google of today; we build authority for the AI search ecosystem of tomorrow.</p>
      </>
    )
  },
  {
    id: 2,
    title: 'Why Asymmetrical Design Wins in Modern Web Development',
    date: 'July 18, 2026',
    tag: 'Web Design',
    desc: 'Standard templated grids look generic and cheap. Explore how asymmetrical layouts, custom cursor interactions, and spring physics build luxury digital experiences.',
    content: (
      <>
        <p>The modern web is flooded with standard templates. Most users can immediately spot a standard Wordpress site or a generic Bootstrap landing page. For premium brands, template fatigue is a conversion killer. If your website looks like everyone else's, your product is perceived as generic.</p>
        <br />
        <h3>The Psychology of Asymmetry</h3>
        <p>Asymmetrical grids break visual monotony. They force the user's eye to move organically across the page, pausing on key statements and visual assets. Rather than scanning in a robotic 'F-shape,' users engage with the page as an editorial layout—similar to a high-end fashion magazine.</p>
        <br />
        <h3>Micro-interactions: The Digital Texture</h3>
        <p>Premium web design relies on tactile feedback. When elements react with spring physics (like buttons that gently pull toward the cursor, or cursors that morph over sliders), the interface feels alive. These small micro-animations build trust, indicating that the brand values craftsmanship and detail.</p>
        <br />
        <p>Building these layouts requires modern toolkits like React and Framer Motion. By utilizing native Canvas particles instead of heavy 3D files, we achieve these luxury aesthetic interactions without sacrificing mobile load speeds.</p>
      </>
    )
  },
  {
    id: 3,
    title: 'Maximizing Indore Local Search Volume: A GMB Masterclass',
    date: 'June 29, 2026',
    tag: 'Local SEO',
    desc: 'Ranking #1 in the Google Maps Indore Local Pack drives direct store visits and phone calls. We unpack 3 citation errors hurting your rankings and how to fix them.',
    content: (
      <>
        <p>For regional businesses in Indore, local search visibility is the single most valuable acquisition channel. When a customer searches for services "near me," their purchase intent is immediate. If your business isn't ranking in the Google Maps 3-Pack, you are effectively invisible to local searchers.</p>
        <br />
        <h3>The GMB Optimization Formula</h3>
        <p>Google rankings are determined by three core pillars: Relevance, Distance, and Prominence. While you can't control distance, you can heavily optimize relevance and prominence.</p>
        <br />
        <h3>Steps to Maximize Map Visibility</h3>
        <br />
        <ol>
          <li><strong>Maintain NAP Consistency:</strong> Ensure your Name, Address, and Phone Number are identical across GMB, your website, Facebook, and local directories (Justdial, Sulekha, etc.). Even a slight difference in address formatting can confuse Google's algorithms.</li>
          <li><strong>Geotargeted Reviews:</strong> Encourage clients to mention "Indore" and their specific service in their reviews (e.g., "Best web design agency in Indore"). Google scans review content for local semantic signals.</li>
          <li><strong>Weekly GMB Posts & Photos:</strong> Keep your GMB profile active by publishing weekly updates and geotagged team photos. Active profiles indicate a healthy, operational business.</li>
        </ol>
        <br />
        <p>At CityReach, we specialize in local GMB mastery. We help businesses audit their citation footprints, set up review acquisition funnels, and scale maps traffic within weeks.</p>
      </>
    )
  }
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedBlog]);

  return (
    <div className="blogs-page">
      <div className="blogs-content">
        <AnimatePresence mode="wait">
          {selectedBlog ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={() => setSelectedBlog(null)} 
                className="back-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <ArrowLeft size={16} /> Back to Insights
              </button>

              <h1 className="service-detail-title shimmer-text" style={{ marginBottom: '24px' }}>
                {selectedBlog.title}
              </h1>

              <div className="post-meta" style={{ marginBottom: '40px' }}>
                <span className="post-tag">{selectedBlog.tag}</span>
                <span className="post-date">
                  <Clock size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                  {selectedBlog.date}
                </span>
                <span className="post-date">
                  <User size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                  CityReach Editorial
                </span>
              </div>

              <div className="service-detail-intro" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                {selectedBlog.content}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="blogs-header">
                <h1 className="blogs-page-title shimmer-text">Insights &amp; <br />Thoughts</h1>
                <p className="blogs-page-desc">Explore our research on design aesthetics, Google algorithms, and Generative Engine Optimization.</p>
              </div>

              {/* Featured Blog */}
              <div className="featured-post-card glass">
                <div className="featured-post-info">
                  <div>
                    <div className="post-meta">
                      <span className="post-tag">Featured</span>
                      <span className="post-date">{blogsData[0].date}</span>
                    </div>
                    <h2 className="featured-post-title">{blogsData[0].title}</h2>
                    <p className="featured-post-desc">{blogsData[0].desc}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedBlog(blogsData[0])} 
                    className="read-more-btn"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Read Article →
                  </button>
                </div>
              </div>

              {/* Grid of other blogs */}
              <div className="posts-grid">
                {blogsData.slice(1).map((blog) => (
                  <div 
                    key={blog.id} 
                    className="post-grid-card glass"
                  >
                    <div>
                      <div className="post-meta">
                        <span className="post-tag">{blog.tag}</span>
                        <span className="post-date">{blog.date}</span>
                      </div>
                      <h3 className="post-grid-title">{blog.title}</h3>
                      <p className="post-grid-desc">{blog.desc}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedBlog(blog)} 
                      className="read-more-btn"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      Read Article &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
