
import style from "./Netflix.module.css";
import PropTypes from 'prop-types';
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
    const { id, img_url, name, rating, description, genre, cast, watch_url } = data;

    // const btn_style = { 
    //     padding: "1.2rem 2.4rem",
    //     border: "none",
    //     fontSize:"1.6rem",
    //     backgroundColor: `${rating >= 8.5 ? "rgb(5, 88, 61)" : "rgb(245, 226, 58)"}`,
    //     color:"var(--bg-color)",
    //     cursor:"pointer"
    // };

   
    // Using Template Literals

    // const BtnWatch = styled.button`
    // padding: 1.2rem 2.4rem;
    // border: none;
    // font-size: 1.6rem;
    // background-color: ${(props) => (props.rating >= 8.5 ? "rgb(5, 88, 61)" : "rgb(245, 226, 58)")};
    // color: var(--bg-color);
    // cursor: pointer;
    // `;
 
    // Using  Styled Object
    const WatchBtn = styled.button({
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize:"1.6rem",
        backgroundColor: `${rating >= 8.5 ? "rgb(5, 88, 61)" : "rgb(245, 226, 58)"}`,
        color:"var(--bg-color)",
        cursor:"pointer"
    });



    const ratingClass = rating<=8.5 ? style.super_hit : style.avarage;

    return (
        <li key={id} className={style.card}> {/* Make sure to use a unique key for each item */}
            
            <div>
                <img src={img_url} alt={`Poster of ${name}`} width="40%" height="40%" />
            </div>
            <div className="flex flex-col gap-2 py-[3.2rem] px-[2.1rem]">
                <h2>Name: {name}</h2>

                <h3>Rating: <span className={`${style.rating} ${ratingClass}`}> {rating} </span></h3>

                <p className="text-3xl font-bold underline" style={{ margin: "1.2rem 0" }}>
                    Summary: {description}
                </p>

                <p style={{ margin: "1.2rem 0" }}>Genre: {genre}</p>
                <p style={{ margin: "1.2rem 0" }}>Cast: {Array.isArray(cast) ? cast.join(', ') : cast}</p>

                {/* <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button style={btn_style}> Watch Now </button>
                </a> */}

                 {/* Using Template Literals */}
                {/* <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <BtnWatch rating={rating}>Watch Now</BtnWatch>
                </a> */}

                {/* Using  Styled Object */}
                <a href={watch_url} target="_blank" rel="noopener noreferrer"> 
                    <WatchBtn> Watch Now </WatchBtn>
                </a>
            </div>

        </li>
    );
};



SeriesCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    watch_url: PropTypes.string.isRequired,
  }).isRequired,
};