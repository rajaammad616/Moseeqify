import React from "react";
import Welcome from "./Welcome";
import ListeningHistory from "./ListeningHistory";
import MusicPlayer from "../musicPlayer/MusicPlayer";
const HomeBody = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-grow">
        <Welcome />
      </div>
      <div className="w-1/3">
        <ListeningHistory />
      </div>
      <MusicPlayer
        url={
          "https://firebasestorage.googleapis.com/v0/b/moseeqify.appspot.com/o/Mustafa%20G.M%20-%20default%20mic%20%5Bprod.%20HeyyLotus%5D%202023-04-29%2010_32.m4a?alt=media&token=1b4b8d49-56c0-4340-beae-e859f22c9e34"
        }
      />
    </div>
  );
};

export default HomeBody;
