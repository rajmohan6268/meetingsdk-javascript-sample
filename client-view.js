ZoomMtg.setZoomJSLib('https://source.zoom.us/2.6.0/lib', '/av')

ZoomMtg.preLoadWasm()
ZoomMtg.prepareWebSDK()
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US')
ZoomMtg.i18n.reload('en-US')

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var signatureEndpoint = ''
var sdkKey = 'LoRzRfMtnMH2h0ZhlT0M3xvX7eX56K2Z4Lsn'
var meetingNumber = '84377032326'
var role = 0
var leaveUrl = 'https://zoom-meet-test.netlify.app/'
var userName = 'JavaScript'
var userEmail = 'rajmohan@edvoy.com'
var passWord = ''
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-meeting-with-registration-required
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-webinar-with-registration-required
var registrantToken = ''

function getSignature() {
  // fetch(signatureEndpoint, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     meetingNumber: meetingNumber,
  //     role: role
  //   })
  // }).then((response) => {
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  // }).catch((error) => {
  // 	console.log(error)
  // })

  startMeeting("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJMb1J6UmZNdG5NSDJoMFpobFQwTTN4dlg3ZVg1NksyWjRMc24iLCJtbiI6Ijg0Mzc3MDMyMzI2Iiwicm9sZSI6MCwiaWF0IjoxNjYwMTA5Mzc1LCJleHAiOjE2NjAxMTY1NzUsImFwcEtleSI6IkxvUnpSZk10bk1IMmgwWmhsVDBNM3h2WDdlWDU2SzJaNExzbiIsInRva2VuRXhwIjoxNjYwMTE2NTc1fQ.hX2-UqYe-ljuNaKXrn4I5xQ1aX6okn4jDScsQAkraQc")

}

function startMeeting(signature) {

  document.getElementById('zmmtg-root').style.display = 'block'

  ZoomMtg.init({
    leaveUrl: leaveUrl,
    success: (success) => {
      console.log(success)
      ZoomMtg.join({
        signature: signature,
        sdkKey: sdkKey,
        meetingNumber: meetingNumber,
        userName: userName,
        userEmail: userEmail,
        passWord: passWord,
        tk: registrantToken,
        success: (success) => {
          console.log(success)
        },
        error: (error) => {
          console.log(error)
        },
      })
    },
    error: (error) => {
      console.log(error)
    }
  })
}
