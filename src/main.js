import emitter from 'temi'
import hashpath from 'hashpath'
import createRender from './render'
import createModel from './model'
import start from './app'

start(
  createModel(),
  createRender(document.getElementById('app')),
  emitter(),
  hashpath()
)
