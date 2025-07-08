import express from 'express'
const app=express()
let host='127.0.0.1'
let port= 8000

app.get('/',(req,resp)=>{
    resp.send('root required')
})

app.post('/user/create',(req,resp)=>{
    resp.send('user created')
})
app.put('/user/put',(req,resp)=>{
   resp.send("user updated")
})
app.delete('/user/delete',(req,resp)=>{
    resp.send('user deleted')
})

app.listen(port, host, (err) => {
  if (err) throw err
  console.log(`Server running.... at http://${host}:${port}/`)
})