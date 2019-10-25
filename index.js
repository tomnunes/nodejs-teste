const express = require('express')

const server = express()

server.use(express.json())

const projects = [
    {
        id: "1",
        title: "Primeiro",
        tasks: []
    }
]
server.get('/projects', (req, res) => {
    return res.json(projects)
})
server.post('/projects', (req, res) => {
    const { id, title } = req.body
    
    projects.push({id: id, title: title, tasks: []})
    return res.json(projects)
})
server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params
    const { title } = req.body
    
    res.json(projects.find((element) => {
        if (element.id == id) {
            return element.tasks.push(title)
        } 
    }))
})
server.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { title } = req.body

    res.json(projects.find((element) => {
        if (element.id == id) {
            return element.title = title
        } 
    }))
})
server.delete('/projects/:id', (req, res) => {
    const { id } = req.params

    res.json(projects.find((element) => {
        if (element.id == id) {
            return projects.splice((id - 1), 1)
        } 
    }))
})


server.listen(3000)