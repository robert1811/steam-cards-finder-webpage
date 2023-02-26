import './App.css'
import { useState } from 'react'
import axios from './libs/axios'

import { game } from './types/game'

import Game from './components/Game'
import Form from './components/Form'

function App() {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const requestAPI = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sessionid = (e.currentTarget.elements[0] as HTMLInputElement).value.trim()
    const browserid = (e.currentTarget.elements[1] as HTMLInputElement).value.trim()
    const steamLoginSecure = (e.currentTarget.elements[2] as HTMLInputElement).value.trim()
    const webTradeEligibility = (e.currentTarget.elements[3] as HTMLInputElement).value.trim()
    const steamParental = (e.currentTarget.elements[3] as HTMLInputElement).value.trim()
    if(sessionid != '' && browserid != '' && steamLoginSecure != '' && webTradeEligibility != '') {
      setIsLoading(true)
      axios.get('/game-list', {
        params: {
          sessionid,
          browserid,
          steamLoginSecure,
          webTradeEligibility,
          steamParental
        }
      })
        .then(res => {
          console.log(res)
          setGames(res.data)
          setIsLoading(false)
        })
        .catch(err => {
          console.error(err)
          setIsLoading(false)
        })
        return
    }
    alert('Please complete the form')
  }

  return (
    <div className="App">
      <Form submitHandler={requestAPI} />
      {isLoading ? 
      <div className="loading-wrapper">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      : <div></div>}
      <div id='games-wrapper'>
        {games.length > 0 ? games.map((game:game, i:number) => {
          return(
            <Game game={game} key={i} />
          )
        }) : ''}
      </div>
    </div>
  )
}

export default App
