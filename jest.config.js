const config = {
  collectCoverage: true,
  coverageThreshold: {
    'sum.js': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
    'product.js': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = config;
