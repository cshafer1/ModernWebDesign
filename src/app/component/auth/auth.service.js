
function AuthService() {
  const puser = new Parse.User();
  var authData = null;
    

  function storeAuthData(response) {
    authData = response;
    return authData;
  }
    
  function onSignIn(user) {
    authData = user;
    
  }
    
  function clearAuthData() {
    authData = null;
  }
    
    
  this.login = function (user) {
      
    return Parse.User
      .logIn(user.email, user.password)
      .then(storeAuthData);
  };
    
  this.register = function (user) {

      puser.set("username", user.email);
      puser.set("password", user.password);
      puser.set("email", user.email); 
      puser.set("firstName",user.firstName);
      puser.set("lastName",user.lastName);
      
      return puser
        .signUp()
        .then(storeAuthData);
    
  };
    
  this.logout = function () {

    return puser
      .logOut()
      .then(clearAuthData);
  };
    
  this.requireAuthentication = function () {
    console.log("Required auth called");
    
    return new Promise((resolve,reject) => {
        this.isAuthenticated() ? resolve() : reject()
    })
  };


  this.isAuthenticated = function () {
    return !!(Parse.User.current() && Parse.User.current().authenticated());
  };
    
  this.getUser = function () {
    if (Parse.User.current()) {
      return Parse.User.current();
    }
  };

}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
  
