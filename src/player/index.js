import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "react-modular-audio-player";
import "../styles.css";
let iconStyle = { width: "fit-content" },
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { padding: "5px 0" },
      innerComponents: [
        {
          type: "seek"
        }
      ]
    },
    {
      className: "tier-bottom",
      innerComponents: [
        {
          type: "name",
          style: {
            margin: "2px",
            width: "40%",
            textOverflow: "ellipsis",
            textAlign: "left !important"
          }
        },

        {
          type: "rewind",
          style: {
            margin: "2px",
            width: "45px",
            textOverflow: "ellipsis",
            textAlign: "right !important"
          }
        },
        {
          type: "play",
          style: {
            margin: "2px",
            width: "60px",
            textOverflow: "ellipsis",
            textAlign: "right !important"
          }
        },
        {
          type: "forward",
          style: {
            margin: "2px",
            width: "45px",
            textOverflow: "ellipsis",
            textAlign: "right !important"
          }
        },

        {
          type: "volume",
          style: {
            margin: "2px",
            width: "15%",
            textOverflow: "ellipsis",
            textAlign: "right !important"
          }
        },
        {
          type: "time",
          style: {
            margin: "2px",
            width: "30%",
            textOverflow: "ellipsis",
            textAlign: "right !important",
            position: "relative"
          }
        }
      ]
    }
  ];
export class Player extends React.Component {
  render() {
    let {
      props: { playlist }
    } = this;
    return (
      <AudioPlayer
        playerWidth="100%"
        iconSize="1.5rem"
        fontSize="1rem"
        sliderClass="invert-blue-grey"
        rearrange={rearrangedPlayer}
        audioFiles={playlist}
      />
    );
  }
}
