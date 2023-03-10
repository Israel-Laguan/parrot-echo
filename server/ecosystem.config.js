module.exports = {
  apps: [
    {
      name: 'dev',
      script: './index.js',
      env: {
        PORT: 8000
      }
    },
    {
      name: 'stage',
      script: './index.js',
      env: {
        PORT: 8080
      }
    },
    {
      name: 'prod',
      script: './index.js',
      env: {
        PORT: 9000
      }
    },
  ]
}
