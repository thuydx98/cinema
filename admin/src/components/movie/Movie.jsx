import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_movie.scss";

export default function Movie({ item }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA0Njc2NywiZXhwIjoxNjU2NDc4NzY3fQ.i3wEGQ_t9P9adkTVpdpMwpMN4vV_Z_yVh8qe6TY-S-8",
          },
        });
        setMovie(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div className="actorPage">
      <div className="card">
        <div className="card-top">
          <img className="actorImg" src={movie.img} alt="" />
        </div>
        <div className="card-bot">
          <span className="actorName">{movie.title}</span>
        </div>
      </div>
    </div>
  );
}
