import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/Collections.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.myJumbo.events({
	'click js-add'(event, instance){
		var Title = $("#exampleModal input[name='Title']").val();
  console.log("The Title is",Title);

  var Author = $("#exampleModal input[name='Author']").val();
  console.log("The Author is",Author);

  var Discription = $("#exampleModal input[name='Discription']").val();
  console.log("The Discription is",Discription);

  var BookCover = $("#exampleModal input[name='BookCover']").val();
  console.log("The BookCover is",BookCover);

   $("#exampleModal input[name='Title']").val('');
   $("#exampleModal input[name='Author']").val('');
   $("#exampleModal input[name='Discription']").val('');
   $("#exampleModal input[name='BookCover']").val('');


    $("#exampleModal").modal("hide");

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
})