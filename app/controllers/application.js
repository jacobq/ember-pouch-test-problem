import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addPerson(name) {
      this.get('store').createRecord('person', {
        name
      }).save();
    },
    deleteAllPeople(name) {
      this.get('store').findAll('person').then(people => {
        people.forEach(person => person.deleteRecord());
      });
    },
    destroyAllPeople(name) {
      this.get('store').findAll('person').then(people => {
        people.forEach(person => person.destroyRecord());
      });
    }
  }
});
