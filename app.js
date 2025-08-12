import express from 'express'
import { pool } from './db.js'
import { PORT } from "./config.js";



const app = express()

app.get('/', (req, res) =>{
    res.send('bienvenido a server')
})


app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("dar")')
  res.json(result)
})

app.get('/consultar', async (req, res) => {
  const result = await pool.query('select * from users')
  res.json(result)
})

app.listen(PORT)
console.log('server puerto 3000', PORT)