import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import http from 'http'
import fs from 'fs'
import * as myApp from './app.js'

const port = process.env.PORT ? process.env.PORT : 1613

const app = myApp.appSrc(express, bodyParser, fs.createReadStream, crypto, http)

app.listen(port, () => {console.log(port)})