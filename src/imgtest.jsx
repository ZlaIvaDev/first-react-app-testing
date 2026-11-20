function Fairy() {
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaCEm_ETXu0RovHwwUGk_TsYDdWWQikgEYpEYri7qNQ&s=10"></img>;
}


import capri from './assets/capri.jpeg';

function FaveFood() {
    return <img src={capri} alt='pizza-capriciossa-image' className='pizza-capri'></img>
}

export let MyVar = Math.sqrt(2)
export let MyMsg = "It's a new message from the universe!"

export default Fairy;
export { FaveFood }