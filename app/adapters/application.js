import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

export default Adapter.extend({
  db: new PouchDB('example')
});
