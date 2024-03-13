import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./Home.css";

import data from "../../../../Backend/data.json";

const Home = () => {
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="card_body cursor-pointer">
        {data.map((item, index) => (
          <Link
            to={{ pathname: "./Description" }}
            key={index}
            target="_blank"
            className="w-[20rem]"
          >
            <div className="card" key={index}>
              {data.length > 0 ? (
                <Card sx={{ width: 324 }}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="140"
                    // image={item.imagePath}
                    image="https://news.cgtn.com/news/3d3d414d324d6a4d32457a6333566d54/img/0f54af6576e640778c8497b91f3af8bb/0f54af6576e640778c8497b91f3af8bb.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <hr />
                    <Typography variant="body2" color="text.secondary">
                      <p>Date:- </p> {item.date}
                    </Typography>
                    <hr />
                    <Typography variant="body2" color="text.secondary">
                      <p>Time:- </p>
                      {item.time}
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <p>Daily Events Update Sortly</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
