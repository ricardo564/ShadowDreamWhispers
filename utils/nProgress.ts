import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({ easing: 'ease', speed: 1000 })
export const doneNprogress = function () {
  Nprogress.done()
}

export const startNprogress = function () {
  Nprogress.start()
  doneNprogress()
}
