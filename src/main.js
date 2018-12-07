import createEmitter from 'temi'
import createRouter from 'hashedpath'
import createScheduler from 'rafsch'
import patch from 'patch2dom'
import start from './app'

const emitter = createEmitter()
const router = createRouter()
const scheduler = createScheduler()
const entry = document.getElementById('app')
const render = (view, state) =>
  scheduler(() => patch(entry, view({ state: state, emit: emitter.emit })))
start(render, emitter, router)
