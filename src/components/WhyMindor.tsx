import React from 'react';
import { motion } from 'framer-motion';

const WhyMindor: React.FC = () => {
  return (
    <section id="why-mindor" className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="w-full mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Mindor?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Built for Speed</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Launch MVPs and full-scale systems in weeks—not months.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-First Approach</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                From RAG chatbots to intelligent automation, we harness cutting-edge AI for real-world impact.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise-Grade Security</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We ensure data privacy, complianceand robust architecture.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth-Focused Delivery</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Whether you need a digital presence or end-to-end tech strategy—we drive ROI.
              </p>
            </motion.div>
          </div>

          {/* SEO Keywords Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 border border-white/20">
                AI development company India
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 border border-white/20">
                Custom software development
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 border border-white/20">
                AI chatbot solutions
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 border border-white/20">
                Digital transformation for startups
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMindor; 