import emitter from 'temi'
import router from 'hashedpath'
import scheduler from 'rafsch'
import createRender from './render'
import createModel from './model'
import start from './app'

start(
  createModel(),
  createRender(document.getElementById('app'), scheduler()),
  emitter(),
  router()
)
