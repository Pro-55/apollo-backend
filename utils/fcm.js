const firebaseAdmin = require('./initializeFirebaseAdmin')

/**
 * Generic function to fire Firebase Cloud Messgages
 * @param {String[]} tokens
 * @param {Object} payload
 */
function sendNotification(tokens, payload) {
  const payloadObject = payload
  payloadObject.notification.sound = 'default'

  if (tokens) {
    tokens.map((token) => {

      if (token) {
        firebaseAdmin.messaging().sendToDevice(token, payload).
          catch((err) => {
            console.log(err)
          })
      }
      return token
    })
  }
}


async function createPayloadAndSend(token, title, body) {

  const payload = {
    notification: {
      title,
      body,
      android_channel_id: 'channel_test',
      channel_id: 'channel_test',
      color: '#FFA699FF',
      icon: 'ic_notification_badge',
    },
    data: {
      title,
      body,
      channel_id: 'channel_test',
      color: '#FFA699FF'
    }
  }

  sendNotification([token], payload)

}

const fcm = {
  sendNotification,
  createPayloadAndSend
}

module.exports = fcm