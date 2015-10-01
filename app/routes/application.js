import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signUp: function(params) {
      var ref = new Firebase("https://moldy-mangos.firebaseio.com");
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
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
      });
    },
    signIn: function(provider, params) {
      var ref = new Firebase("https://moldy-mangos.firebaseio.com");
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
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
