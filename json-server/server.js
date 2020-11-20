const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const postResponse = require(path.join(__dirname, 'postResponse.js'))
const routes = require(path.join(__dirname, 'routes.json'))

// 模擬POST /example response的資料
server.post('/example', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1010')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(200).jsonp([
    {
      districtName: '香港區',
      subDistrictName: '中西區',
      storeId: '183',
      displayName: '183 EMP豪行(金鐘太古廣場)',
      address: '香港金鐘太古廣場L1層139號',
      telephoneNumber: '+852 2154 0061',
      givenName: 'EMPHASIS金鐘太古廣場店',
      operatingHour: '11:00-20:00',
      dsLatitude: '22.277368',
      dsLongitude: '114.165130'
    }
  ])
})

server.use(middlewares)
server.use(jsonServer.rewriter(routes))
server.use(postResponse)
server.use(router)
server.listen(1011, () => {
  console.log('JSON Server is running')
})
