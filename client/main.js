import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  resolutions: function() {
    if(Session.get('hideFinished')) {

      return Resolutions.find({ checked: { $ne: true } });

    } else {

      return Resolutions.find();

    }
  },
  hideFinished: function() {
    return Session.get('hideFinished');
  }
});

Template.body.events({
  'submit .new-resolution': function(event){
    var title = event.target.title.value;

    Resolutions.insert({
      title: title,
      createdAt: new Date()
    });

    event.target.title.value = "";

    return false;
  },
  'change .hide-finished': function(event) {
    Session.set('hideFinished', event.target.checked);
  }
});

Template.resolution.events({
  'click .toggle-checked': function() {
    Resolutions.update(this._id, { $set: { checked: !this.checked } });
  },
  'click .delete': function() {
    Resolutions.remove(this._id);
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
