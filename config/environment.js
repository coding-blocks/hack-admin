'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'hack-admin',
    podModulePrefix: 'hack-admin/pods',
    environment,
    rootURL: '/admin/',
    namespace: 'api/admin',
    oneauthURL: 'https://account.codingblocks.com',
    locationType: 'auto',
    'ember-simple-auth-token': {
      identificationField: 'code',
      passwordField: 'code',
      tokenPropertyName: 'jwt',
      refreshAccessTokens: true,
      tokenExpireName: 'exp',
      refreshLeeway: 60, //send a request for refresh_token 60sec before actual expiration
      authorizationPrefix: 'JWT ',
    },
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {}
  };

  if (environment === 'development') {
    ENV.apiHost = 'http://test.hackbackend'
    ENV.publicUrl = 'http://test.hackerblocks/admin/'
    ENV.clientId = '3680446660'
  }

  if (environment === 'production') {
    ENV.apiHost = 'https://hack-api.codingblocks.com'
  }

  ENV['ember-simple-auth'] = {
    refreshTokenPropertyName: "refresh_token"
  }
	ENV['ember-simple-auth-token'].serverTokenEndpoint = ENV.apiHost + "/api/v2/jwt/login/"
	ENV['ember-simple-auth-token'].serverTokenRefreshEndpoint = ENV.apiHost + "/api/v2/jwt/refresh/"

  return ENV;
};
