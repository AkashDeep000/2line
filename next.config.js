module.exports = {
  images: {
    domains: ['cdn.sharemyfeel.com'],
    deviceSizes: [480, 560, 640, 720, 900, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
 experimental: { optimizeCss: true },
	webpack: (config, { webpack }) => {
	  
	  Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });

		return config;
	},
};