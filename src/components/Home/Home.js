import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))
    }, [search])

    // const notify = () => toast("Successfully deleted!");

    const handleDelete = selected => {
        const notify = () => toast(`Successfully deleted ${selected.strPlayer}!`);
        const leftPlayers = cart.filter(player => player !== selected);
        setCart(leftPlayers);
        notify();
    }

    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)} className='search-input' type="text" placeholder='Search Player Name' />
                <button className='search-btn'>Search</button>
                <div className="players-main-container">
                    <Players players={players} cart={cart} setCart={setCart}></Players>
                </div>
            </div>
            <div className="right-side">
                <div className="cart">
                    <h4>This is player cart</h4>
                    <ToastContainer />
                    {
                        cart?.map(list =>
                            <div className='selected-cart-container'>
                                <div className="selected-cart">
                                    <li>{list.strPlayer}</li>
                                    <button onClick={() => handleDelete(list)}>del</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;