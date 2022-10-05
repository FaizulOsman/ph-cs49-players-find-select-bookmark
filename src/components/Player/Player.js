import React from 'react';
import './Player.css';
import Swal from 'sweetalert2';



const Player = ({ player, cart, setCart }) => {
    const { idPlayer, strPlayer, strRender, strThumb, strBanner, strDescriptionEN } = player

    const handleAddToCart = (player) => {
        if (cart) {
            const info = [...cart, player]
            setCart(info);
            Swal.fire(
                'Good job!',
                `You Added a ${player.strPlayer}!`,
                'success'
            )
        }
    }

    const handleBookmark = () => {
        const info = {
            strPlayer,
            idPlayer,
            bookmark: 'true',
            quantity: 1,
        }
        const oldBookmark = JSON.parse(localStorage.getItem('bookmark'));
        if (oldBookmark) {
            const isExist = oldBookmark.find(player => player.idPlayer === info.idPlayer)
            if (isExist) {
                isExist.quantity = parseInt(isExist.quantity) + 1
                const existPlayer = oldBookmark.filter(player => player.idPlayer !== info.idPlayer)
                alert("Already bookmarked")
                localStorage.setItem('bookmark', JSON.stringify([...existPlayer, isExist]))
                return;
            } else {
                localStorage.setItem('bookmark', JSON.stringify([...oldBookmark, info]))
            }
        } else {
            localStorage.setItem('bookmark', JSON.stringify([info]));
        }
    }

    return (
        <div className='player-container' data-aos="fade-up">
            <img src={strRender || strBanner || strThumb} alt="" />
            <h4>{idPlayer}</h4>
            <h4>{strPlayer}</h4>
            <p>{strDescriptionEN ? strDescriptionEN.slice(0, 50) : 'NO DESCRIPTION FOUND'}</p>
            <button className='card-btn'>Details</button>
            <button className='card-btn' onClick={() => handleAddToCart(player)}>Add to cart</button>
            <button className='card-btn' onClick={handleBookmark}>Bookmark</button>
        </div>
    );
};

export default Player;