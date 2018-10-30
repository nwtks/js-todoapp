import emi from 'emi'
import hashpath from 'hashpath'
import createRender from './view'
import createModel from './model'
import start from './app'

start(
  createModel(),
  createRender(document.getElementById('app')),
  emi(),
  hashpath()
)
