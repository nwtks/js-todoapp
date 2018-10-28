import emi from 'emi/src/emi'
import createRender from './view'
import createModel from './model'
import start from './app'

start(createModel(), emi(), createRender(document.getElementById('app')))
