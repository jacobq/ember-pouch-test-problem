import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    const store = this.get('store');
    return hash({
      people: store.findAll('person')
    });
  }
});
