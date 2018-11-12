import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';
import pouchDebugPlugin from 'pouchdb-debug';

PouchDB.plugin(pouchDebugPlugin);

export default Adapter.extend({
  init() {
    this._super(...arguments);
    this.set('db', new PouchDB('example'));
  }
});
