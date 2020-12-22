export default function (req, _, next) {
  console.log('middleware-logger: ', req.url)
  next()
}
