import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details>

                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="main"/>
                    </HeadLine>

                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>

                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="secondary"/>
                    </ImageDisplay>

                </Details>
            )}
        </>
    )
}

//Style
const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -8%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  
  h3{
    font-size: 2rem;
  }
  
  p{
    padding: 2rem 0;
  }
  
  .line{
    width: 100%;
    background-color: #23d997;
    height: 0.25rem;
    margin: 1rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;