const express= require("express")
const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("Server Works")
})

const PORT = 5000
app.listen(PORT, ()=>console.log('listening'))

app.get('/tasks',(req, res)=>{
    res.json(tasks)
})


app.post('/tasks',(req, res)=>{
    tasks.push(req.body)

    res.json(tasks)
})

app.delete('/tasks/:id',(req, res)=>{
    let delID =parseInt( req.params.id)
    tasks.forEach((elem, index) =>{
        if(elem.id === delID){
            tasks.splice(index, 1);
        }
    })
    res.json(tasks)
})


const tasks = [
    {
      id: 1,
      title: "Download Zoom",
      isCompleted: false
    },
    {
      id: 2,
      title: "Eat Fried Chicken",
      isCompleted: true
    },
    {
      id: 3,
      title: "Play Games",
      isCompleted: false
    },
    {
      id: 4,
      title: "Go for Shopping",
      isCompleted: true
    },
    {
      id: 5,
      title: "Watch Movie",
      isCompleted: false
    }
   ]