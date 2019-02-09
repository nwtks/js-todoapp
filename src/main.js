import createEmitter from 'temi';
import createRouter from 'hashedpath';
import createStore from './store';
import createRender from './render';
import createStorage from './storage';
import start from './app';

const emitter = createEmitter();
const store = createStore(emitter.emit, 'updateStore');
const render = createRender(emitter.emit, document.getElementById('app'));
const router = createRouter();
const storage = createStorage('js-todoapp');
start(emitter, store, render, router, storage);
