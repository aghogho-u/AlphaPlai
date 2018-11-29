import React from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = (props) => {

    return (
        <div className="rmdb-moviethumb">
            {props.clickable ?
            <Link to={{ pathname: `/${props.movieId}`, movieName: `/${props.movieName}`}}>
            <img src={props.image} alt="moviethumb" />
            </Link>
            :
            <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

MovieThumb.PropsTypes = {
    image: PropsTypes.string,
    movieId: PropsTypes.number,
    movieName: PropsTypes.string

}

export default MovieThumb;