Options = new Mongo.Collection('options');

if(Meteor.isClient){
  
  Template.optionList.helpers({
      'option': function(){
          return Options.find();
      }
  });


  
  Template.addOptions.events({
      'submit form': function(event){
          event.preventDefault();
          Options.insert({
              name: event.target.optionName.value,
              url: event.target.optionURL.value
          });
          event.target.playerName.value = "";
          event.target.optionURL.value = "";          
      }
  });
  
  Template.modal.events({
    'click .myBtn': function(){
      $(".modal").css('display', 'block');
    },
    'click .close': function(){
      $(".modal").css('display', 'none');
    }
  });

}
