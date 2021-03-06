import { on } from 'rsvp';
import Ember from 'ember';
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

if (config.environment === 'production') {

  Ember.onerror = function(error) {

    if (window.trackJs) {
      window.trackJs.track(error);
    }

    console.error(error); // eslint-disable-line no-console

  };

  on('error', function(error) {

    if (window.trackJs) {
      window.trackJs.track(error);
    }

    console.error(error); // eslint-disable-line no-console

  });
}

if (config.environment === 'development' || config.environment === 'test') {
  Error.stackTraceLimit = 200;
}

export default App;
