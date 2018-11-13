import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';
//import pouchInMemoryPlugin from 'pouchdb-adapter-memory';
//import pouchDebugPlugin from 'pouchdb-debug';

const enablePouchDBDebug = false;
const useInMemoryAdapter = false;

export default Adapter.extend({
  init() {
    this._super(...arguments);

    const options = {};
    if (enablePouchDBDebug) {
      //PouchDB.plugin(pouchDebugPlugin);
    }
    if (useInMemoryAdapter) {
      //PouchDB.plugin(pouchInMemoryPlugin);
      options.adapter = 'memory';
    }

    this.set('db', new PouchDB('example', options));
  }
});
