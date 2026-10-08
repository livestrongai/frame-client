import store from '../_redux/store'
import { setServer } from '../_redux/f-server'
const url = 'https://frame-server-x8qw.onrender.com'
let heartbeat = 0

const server = async () => {
  let status
  if (heartbeat === 0) console.logD('DEBUG: L2 : F1-Server ', '#34A853')
  const start = performance.now()
  try {
    // 200 - 299 for res.ok
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    status = res.ok
  } catch {
    status = false
  }
  if (heartbeat === 0) {
    const duration = (performance.now() - start).toFixed(2)
    console.logD(`DEBUG: L2 : F1-Server: status: ${status ? 'up' : 'down'}: duration: ${duration} ms`, '#34A853')
  }
  store.dispatch(setServer({ ready: status, heartbeat: ++heartbeat }))
}
server()
setInterval(server, 10000)
