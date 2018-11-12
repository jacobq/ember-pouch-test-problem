import Controller from '@ember/controller';

export default Controller.extend({
  _doToAll(f) {
    this.get('store').findAll('person').then(people => {
      people.forEach(f);
    });
  },

  actions: {
    addPerson(name) {
      this.get('store').createRecord('person', {
        name
      }).save();
    },
    deleteAllPeople() {
      this._doToAll(person => person.deleteRecord());
    },
    destroyAllPeople() {
      this._doToAll(person => person.destroyRecord());
    },
    saveAllPeople() {
      this._doToAll(person => person.save());
    },
  }
});
