var reg_name, reg_pass;
var UserModel = Backbone.Model.extend({
    defaults: {
        name: null,
        pwd: null
    },
    initialize: function () {
        console.log("initialize initialized");
    }
});

// var ClientsCollection = Backbone.Collection.extend({
//     model: Client,
//     initialize: function () {
//         console.log("initialize clients collection");
//         this.bind("add", function (model) { console.log("Add", model.get('id'), model); });
//         this.bind("remove", function (el) { console.log("Remove", el.get('id'), el); });
//     }
// });


// var RegisterView = Backbone.View.extend{
//   el:$("#divRegister"),
//   initialize: function(){
//
//   },
//   events:{
//     'click #Register': 'register',
//   },
//   login:{
//     username: $("#username").val(),
//     password: $("#password").val(),
//     $.ajax({
//       type: "POST",
//       url: "register/",
//       data: data,
//       success: {
//         alert('success');
//       },
//       error: {
//         alert("error");
//       }
//     });
//   }
// }

var loginView = Backbone.View.extend({
  el:$("#divLogin"),
  initialize: function(){
    $("#divLogin").html(
      "UserName :<input type="text" id="user_name" placeholder="Username"><br/><br/>"+
      "Password :<input type="password" id="pass_word" placeholder="Paasword"><br/><br/>"+
      "<button id="login">Login</button>"
    );
  },
  events:{
    'click #login': 'login',
  },
  login:{
    username: $("#username").val(),
    password: $("#password").val(),
    $.ajax({
      type: "POST",
      url: "login/",
      data: {"username":username, "password":password},
      success: {
        alert('success');
      },
      error: {
        alert("error");
      }
    });
  }
});


//
// var ClientView = Backbone.View.extend({
//     el: $("#divClient"), /* Utilisation de zepto pour lier ClientView au DOM */
//     initialize: function () {
//         var that = this;
//         this.listeClients = new ClientsCollection();
//         this.listClients = new ClientsCollection();
//         this.listeClients.bind("add", function (model) {
//             that.addClientToList(model);
//         });
//         this.listClients.bind("add", function (model) {
//             that.addLoginToList(model);
//         });
//     },
//     events: {
//         'click #cmdAddClient': 'cmdAddClient_Click',
//         'click #login': 'login'
//     },
//     cmdAddClient_Click: function () {
//         var tmpClient = new Client({
//             name: $("#txtIdClient").val(),
//             pwd: $("#txtNomClient").val(),
//         });
//         this.listeClients.add(tmpClient);
//     },
//     login: function () {
//         var tmplogin = new Client({
//             name: $("#txtIdClient").val(),
//             pwd: $("#txtNomClient").val(),
//         });
//         this.listClients.add(tmplogin);
//     },
//     addClientToList: function (model) {
//         reg_name = model.get('name');
//         reg_pass = model.get('pwd');
//         $("#listeClient").html("<font size=5 color=green>You are Successfully Registered, Now you can Login</font>");
//     },
//     addLoginToList: function (model) {  ;
//         if (model.get('name') == reg_name && model.get('pwd') == reg_pass) {
//             $("#divClient").html("<font size=4 color=blue>Login sucessfull</font>");
//         }
//         else {
//             $("#listeClient").html("<font size=5 color=green>Failed Logged in, Retry</font>");
//         }
//     }
// });
// var clientView = new ClientView();
// Backbone.history.start();
