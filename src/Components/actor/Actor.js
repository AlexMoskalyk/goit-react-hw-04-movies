import React from "react";
import imageNotPhoto from "../../assets/images/placeholder.png";

const Actor = ({ actors }) => {
  return (
    <>
      {actors &&
        actors.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path === null
                  ? imageNotPhoto
                  : `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              }
              alt={actor.original_name}
            />
            <p>{actor.original_name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
    </>
  );
};

export default Actor;
