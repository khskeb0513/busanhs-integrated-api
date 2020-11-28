const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

const frontend = {
    index: require('./frontend/index'),
    students: require('./frontend/students'),
    systems: require('./frontend/systems')
}
const api = {
    neis: require('./api/routes/neis'),
    internal: require('./api/routes/internal')
}
Object.keys(frontend).forEach(key => {
    app.use(`/${key === 'index' ? '' : key}`, frontend[key])
})
Object.keys(api).forEach(key => {
    app.use(`/api/${key}`, api[key])
})
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        status: err.status || 500,
        e: req.app.get('env') === 'development' ? err : {message: err.message}
    })
})

module.exports = app
