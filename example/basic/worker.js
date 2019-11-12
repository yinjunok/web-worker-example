this.addEventListener('message', (e) => {
  console.log('work', e.data)
  setTimeout(() => {
    this.postMessage('the response from work')
  }, 1000)
})
