module.exports = function (req, res, next) {
  // next()
  // 設定等待0.5秒才回傳
  setTimeout(next, 1000)
}
