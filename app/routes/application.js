import Ember from 'ember';

var ref = new Firebase("https://moldy-mangos.firebaseio.com");

var signIn = function(provider, params) {
  ref.authWithPassword({
    email    : params.email,
    password : params.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      window.location.reload();
    }
  });
};

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  user() {
    var user = this.store.findRecord('user', this.get('session.currentUser.email'));
    return user ? user : 'blah';
  },
  actions: {
    signUp: function(params) {
      var self = this;
      var session = this.get('session');

      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);

          var newUser = self.store.createRecord('user', params);
          newUser.save();
          session.id = newUser.id;
          self.set('session', session);
          debugger;
        }

        // auto sign in
        signIn('password', params);
      });
    },
    signIn: function(provider, params) {
      signIn(provider, params);
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
