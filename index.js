const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT

const data ={
    "login": "Nishu026",
    "id": 123758300,
    "node_id": "U_kgDOB2Bm3A",
    "avatar_url": "https://avatars.githubusercontent.com/u/123758300?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Nishu026",
    "html_url": "https://github.com/Nishu026",
    "followers_url": "https://api.github.com/users/Nishu026/followers",
    "following_url": "https://api.github.com/users/Nishu026/following{/other_user}",
    "gists_url": "https://api.github.com/users/Nishu026/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Nishu026/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Nishu026/subscriptions",
    "organizations_url": "https://api.github.com/users/Nishu026/orgs",
    "repos_url": "https://api.github.com/users/Nishu026/repos",
    "events_url": "https://api.github.com/users/Nishu026/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Nishu026/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nishigandha Patil",
    "company": null,
    "blog": "",
    "location": "Mumbai, Maharashtra",
    "email": null,
    "hireable": null,
    "bio": "💡 Exploring the world of technology and coding!\r\n",
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-01-27T16:16:40Z",
    "updated_at": "2024-05-23T08:11:13Z"
  }


app.get('/', (req,res)=>{
    res.json(data)
})

app.get('/login', (req,res)=>{
    res.send("Hello Login")
})

app.get('/logout', (req,res)=>{
    res.send("<h1>Yo are logged Out</h1>")
})

app.get('/signup', (req,res)=>{
    res.send("<h6>Please signup</h6>")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})


//This is a server code.