import classes from "./ParentPlayer.module.css";
import likeIcon from "./../images/player/like.png";
import viewsIcon from "./../images/player/view.png";
import { useState } from "react";
import ReactPlayer from "react-player";

const ParentPlayer = (props) => {
  // const [video_url, setVideoUrl] = useState("url");

  return (
    <div className={classes.container}>
      {/* <video
        controls
        preload="auto"
        width="400"
        height="230"
        vjs-setup="options"
      >
        {console.log("url  : " + props.data.video_url)}
        <source src={props.data.video_url} type="video/mp4" />
      </video> */}
      <ReactPlayer
        url={props.data.video_url}
        controls={true}
        height="230"
        width="400"
        playing={true}
      />
      <div className={classes.title}>
        {/* <span>title : </span> */}
        <span>{props.data.video_title}</span>
      </div>
      <div className={classes.description}>
        <div>
          <span>{props.data.likes}</span>
          <img src={likeIcon} />
        </div>
        <div>
          {props.data.views}
          <img src={viewsIcon} />
        </div>
      </div>
    </div>
  );
};

export default ParentPlayer;
