module.exports = {
  apps: [
    {
      name: 'parrot-echo-server',
      script: './index.js',
      instances: 'max',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
