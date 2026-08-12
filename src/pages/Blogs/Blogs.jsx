import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';
import Magnetic from '../../components/Magnetic/Magnetic';
import { useCountry } from '../../hooks/useCountry';
import { fetchBlogs } from '../../services/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Blogs.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const country = useCountry();

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      const fetched = await fetchBlogs();
      if (fetched && fetched.length > 0) {
        setBlogs(fetched);
      } else {
        setBlogs([]);
      }
      setLoading(false);
    }
    loadBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedBlog]);

  // Filter based on country
  const filteredBlogs = blogs.filter((blog) => {
    if (!blog.country) return true; // Show on all if country field is missing
    if (blog.country === 'all') return true;
    return blog.country === country;
  });

  // Handle edge case: "if something fails... show all the blogs" (or if no blogs match the localization)
  const displayBlogs = filteredBlogs.length > 0 ? filteredBlogs : blogs;

  const renderBlogContent = (content) => {
    if (!content) return null;
    if (React.isValidElement(content)) {
      return content;
    }
    if (typeof content === 'string') {
      return content.split('\n\n').map((para, i) => (
        <p key={i}>{para}</p>
      ));
    }
    // Contentful Rich Text document
    try {
      return documentToReactComponents(content);
    } catch (err) {
      console.error('Error rendering Rich Text:', err);
      return null;
    }
  };

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

              <h1 className="service-detail-title" style={{ marginBottom: '24px' }}>
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
                {renderBlogContent(selectedBlog.content)}
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
                <h1 className="blogs-page-title">Insights &amp; <br />Thoughts</h1>
                <p className="blogs-page-desc">
                  Explore our research on design aesthetics, Google algorithms, and Generative Engine Optimization for {country.toUpperCase() === 'IN' ? 'India' : 'UAE'}.
                </p>
              </div>

              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '3px solid rgba(139, 92, 246, 0.1)',
                      borderTopColor: '#8b5cf6',
                    }}
                  />
                  <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Fetching latest insights...</p>
                </div>
              ) : displayBlogs.length > 0 ? (
                <>
                  {/* Featured Blog */}
                  <div className="featured-post-card glass">
                    <div className="featured-post-info">
                      <div>
                        <div className="post-meta">
                          <span className="post-tag">Featured</span>
                          <span className="post-date">{displayBlogs[0].date}</span>
                        </div>
                        <h2 className="featured-post-title">{displayBlogs[0].title}</h2>
                        <p className="featured-post-desc">{displayBlogs[0].desc}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedBlog(displayBlogs[0])} 
                        className="read-more-btn"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Read Article →
                      </button>
                    </div>
                  </div>

                  {/* Grid of other blogs */}
                  {displayBlogs.length > 1 && (
                    <div className="posts-grid">
                      {displayBlogs.slice(1).map((blog) => (
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
                  )}
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
                  <p>No blogs yet.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
