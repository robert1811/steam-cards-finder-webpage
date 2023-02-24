import './App.css'
import { useState } from 'react'
import axios from './libs/axios'

function App() {
  interface game {
    cardAmmount: number,
    gameID: number,
    gameImg: string,
    gamePrice: number,
    gameUrl: string,
    name: string,
    profit: number
  }

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sessionid = (e.currentTarget.elements[0] as HTMLInputElement).value
    const browserid = (e.currentTarget.elements[1] as HTMLInputElement).value
    const steamLoginSecure = (e.currentTarget.elements[2] as HTMLInputElement).value
    const webTradeEligibility = (e.currentTarget.elements[3] as HTMLInputElement).value
    const steamParental = (e.currentTarget.elements[3] as HTMLInputElement).value
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
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
        
      <form onSubmit={submitHandler}>
        <h1>Steam Cards Finder</h1>
        <p><b>Rest API made by <a title='original repo' target='_blank' href="https://github.com/LucasGenovese/Steam-API">Lucas Genovese</a></b></p>
        <div className='input-container'>
          <label>Session ID</label>
          <input autoComplete='OFF' type="text" placeholder='Session ID'/>
          <label>Browser ID</label>
          <input autoComplete='OFF' type="text" placeholder='Browser ID'/>
          <label>Steam Login Secure</label>
          <input autoComplete='OFF' type="text" placeholder='Steam login secure'/>
          <label>Web trade eligibility</label>
          <input autoComplete='OFF' type="text" placeholder='Web trade eligibility'/>
          <label>Steam Parental (only if you have it)</label>
          <input autoComplete='OFF' type="text" placeholder='Steam parental'/>
          <button>Search</button>
        </div>
      </form>
      {isLoading ? 
      <div className="loading-wrapper">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      : <div></div>}
      <div id='games-wrapper'>
        {games.length > 0 ? games.map((game:game) => {
          return(
            <div className='game'>
              <div className="image-container">
                <a target='_blank' href={game.gameUrl}><img src={game.gameImg} alt="" /></a>
              </div>
              <div className="game-info">
                <h3 className='game-name'>{game.name}</h3>
                <div className='game-data'>
                  <ul>
                    <li><b>Card amount: </b>{game.cardAmmount}</li>
                    <li><b>Price: </b>{game.gamePrice}</li>
                    <li><b>Profit: </b><span className='green'>{game.profit}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }) : ''}
      </div>
    </div>
  )
}

export default App
