// next.config.js
module.exports = {
  reactStrictMode: true, // Enable React strict mode
  env: {
    // Define environment variables
    API_KEY: process.env.API_KEY,
  },
  webpack: (config) => {
    // Customize webpack configuration
    return config;
  },
  // Add other configurations as needed
};
