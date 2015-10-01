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
}

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signUp: function(params) {
      ref.createUser({
        email    : params.email,
        password : params.password,
        username : 'dude'
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
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
