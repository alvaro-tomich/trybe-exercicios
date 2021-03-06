import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render(){
        const {pokes: {name, type, averageWeight, image}} = this.props
        return(
            <div className='pokemon'>
            <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
            </div>
            <div>
                <img src={image} alt='Pokemon'></img>
            </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
  pokes: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;