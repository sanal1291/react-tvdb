import React from 'react'
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumg' />
            </Link>
        )
            : (
                <Image src={image} alt='movie-thumg' />
            )}
    </div>
)

Thumb.propType = {
    image: PropType.string,
    movieId: PropType.string,
    clickable: PropType.bool
}

export default Thumb;

