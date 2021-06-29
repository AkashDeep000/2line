module.exports = {
  images: {
    domains: ['cdn.sharemyfeel.com'],
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