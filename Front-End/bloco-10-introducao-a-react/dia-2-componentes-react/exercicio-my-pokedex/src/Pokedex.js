import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className='pokedex'>
                {pokemons.map((curr) => <Pokemon key={curr.id} pokes={curr} />)}
            </div>
        );
    }
}

export default Pokedex;