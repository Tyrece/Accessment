import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/Collections.js';

//Template.mainbody.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);
//});

//Template.mainbody.helpers({
  //counter() {
    //return Template.instance().counter.get();
  //},
//});

//Template.mainbody.events({
  //'click button'(event, instance) {
    // increment the counter when button is clicked
  //  instance.counter.set(instance.counter.get() + 1);
 // },
//});

Template.mainbody.helpers({
  cardAll(){
    return userDB.find({});
  }
  
})

Template.mainbody.events({
  'click .js-add'(event, instance){

  var Ttitle = $("#addbookModal input[name='Title']").val();
  var Aauthor = $("#addbookModal input[name='Author']").val();
  var discription = $("#addbookModal input[name='Discription']").val();
  var BbookCover = $("#addbookModal input[name='Bookcover']").val();
  if (BbookCover == ""){
          BbookCover="36124936.jpg";
  }

   $("#addbookModal input[name='Title']").val('');
   $("#addbookModal input[name='Author']").val('');
   $("#addbookModal input[name='Discription']").val('');
   $("#addbookModal input[name='Bookcover']").val('');

    $("#addbookModal").modal("hide");
    userDB.insert({'Title':Ttitle, 'Author':Aauthor, 'Discription': discription, 'Bookcover':BbookCover});

  },

  'click .js-like'(event, instance) { 
    var profID = this._id;
    var numLikes = userDB.findOne({_id:  profID}).like;
    if (!numLikes) {
      numLikes = 0;
    }
    numLikes = numLikes + 1;  
    userDB.update({_id:profID}, {$set:{'like': numLikes}});
  },
  'click .js-dislike'(event, instance){
    var profID = this._id;
    var numDisLikes = userDB.findOne({_id:  profID}).dislike;
    if (!numDisLikes) {
      numDisLikes = 0;
    }
    numDisLikes = numDisLikes + 1;  
    userDB.update({_id:profID}, {$set:{'dislike': numDisLikes}});
  },

});
