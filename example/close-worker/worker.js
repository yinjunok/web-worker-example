onmessage = (e) => {
  console.log(e.data)
}

setTimeout(() => {
  console.log('the worker closed by itself!')
  close()
}, 5000)
