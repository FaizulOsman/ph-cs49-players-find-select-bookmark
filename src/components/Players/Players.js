import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({ players, cart, setCart }) => {
    return (
        <div className='players-container'>
            <div className="player-card">
                {
                    players.map(player =>
                        <Player
                            player={player}
                            key={player.idPlayer}
                            cart={cart}
                            setCart={setCart}
                        ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;