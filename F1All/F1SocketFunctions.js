export const sendFingerPrint = function (socket) {
  sendMessage('fingerprint', window.navigator.userAgent, socket)
}
export const sendMessage = function (type, message, socket) {
  const send = {
    type,
    message
  }
  socket.send(JSON.stringify(send))
}
export const receiveMessage = function (json) {
  const obj = JSON.parse(json)
  if (obj.type === 'tweet') {
    return 'nice tweet'
  }
  return obj
}

export default { receiveMessage, sendFingerPrint, sendMessage }
