import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
    >
      <div className="relative">
        {/* Animated background circles */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-32 bg-blue-400/30 rounded-full absolute -top-16 -left-16"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-24 h-24 bg-purple-400/30 rounded-full absolute -bottom-12 -right-12"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="w-20 h-20 bg-indigo-400/30 rounded-full absolute top-8 right-8"
          />
        </div>
        <div className="relative z-10 text-center">
         
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Mindor.Tech</h1>
            <p className="text-white/80 text-sm">Loading your digital experience...</p>
          </motion.div>

          {/* Loading spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <svg
              className="w-full h-full text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            />
          </div>

          {/* Loading dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="w-3 h-3 bg-white rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1,
              }}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${80 + Math.random() * 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;