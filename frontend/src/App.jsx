import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import {Buffer} from "buffer";

function App(){

    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()


    const api = () => {
        const credentials = Buffer.from (userName + ':' + userPassword).toString('base64')

        const headers = new Headers({
            'Authorization' : `Basic ${credentials}`,
            'Content-type' : 'application/x-www-form-urlencoded'

        })

        const data = new URLSearchParams({
            name : userName,
            password : userPassword
        })
        fetch('http://localhost:2345/endpoint.php', {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: data,
            mode: "cors"
        }).then(r =>r.json()).then(data => console.log(data))
    }
    const handleSubmit =(e) =>{
        e.preventDefault()

    }
    useEffect(() => {
        api()
    }, [userName, userPassword])


    return (
    <div className="App">
      <header className="App-header">
       <Form setUserName={setUserName} setPassword={setUserPassword}></Form>
      </header>
    </div>
  )
}

export default App
