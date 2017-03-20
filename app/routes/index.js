import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('rental');
   },
   actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
//a method within an Ember class is called a hook. This model hook returns our hard coded array of rentals when we render our index.hbs template. When we refer to model in index.hbs we are referring to this array in this route-handler.
