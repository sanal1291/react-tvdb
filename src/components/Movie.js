import React from 'react'
import { useParams } from 'react-router-dom';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// components
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import Grid from './Grid';
import Spinner from './Spinner';
import Actor from './Actor';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// image
import NoImage from '../images/no_image.jpg';
import MovieInfoBar from './MovieInfoBar';


const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}

            />
            <Grid header='Actors'>
                {movie.actors.map((actor, index) => (
                    <Actor
                        key={index}
                        name={actor.name}
                        character={actor.character}
                        imageurl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
}

export default Movie;