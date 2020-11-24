if (!document.monetization) {
  document.monetization = document.createElement('div')
  document.monetization.state = 'stopped'
  window.addEventListener('message', function(event) {
    if (event.source === window && event.data.webMonetization) {
      if (event.data.type === 'monetizationstatechange') {
        document.monetization.state = event.data.detail.state
      } else {
        document.monetization.dispatchEvent(
          new CustomEvent(event.data.type, {
            detail: event.data.detail
          }))
      }
    }
  })
}
