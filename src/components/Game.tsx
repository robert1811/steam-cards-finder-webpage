import { game } from "../types/game"

const Game = ({game}:game) => {
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
}

export default Game