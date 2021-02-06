if (!document.monetization) {
  document.monetization = document.createElement('div')
  document.monetization.state = 'stopped'
  document.addEventListener('monetization-v1', function(event) {
    const {type, detail} = event.detail
    if (type === 'monetizationstatechange') {
      document.monetization.state = detail.state
    } else {
      document.monetization.dispatchEvent(
        new CustomEvent(type, {
          detail: detail
        }))
    }
  })
}
