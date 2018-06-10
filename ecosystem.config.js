module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : './server.js',
      env: {
        PORT: '8090',
        SENDER_USER: null, // change
        SENDER_PASS: null, // change
        CONTACT_EMAIL: null // change
      },
      instances  : 4,
      exec_mode  : "cluster"
    }
  ],
};
