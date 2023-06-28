const copyBtn = document.querySelector('#copyBtn')
const urlPath = document.querySelector('#urlPath')

copyBtn.addEventListener('click', () => {
  const range = document.createRange()
  const texts = urlPath
  range.selectNode(texts)

  const selection = window.getSelection()
  selection.addRange(range)
  document.execCommand('copy')

  copyBtn.innerHTML = '複製完成'
  copyBtn.className = 'btn btn-danger translation'
})
