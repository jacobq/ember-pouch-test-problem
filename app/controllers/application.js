import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addPerson(name) {
      this.get('store').createRecord('person', {
        name
      }).save();
    }
  }
});
