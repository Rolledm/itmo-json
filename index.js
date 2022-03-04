import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import http from 'http'
import { createReadStream } from 'fs'
import appSrc from './app.js'

const port = process.env.PORT ? process.env.PORT : 1613

const app = appSrc(express, bodyParser, createReadStream, crypto, http)

app.listen(port, () => {console.log(port)})