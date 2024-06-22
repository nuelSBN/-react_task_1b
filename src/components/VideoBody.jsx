import React from "react";
import VideoItem from "./VideoItem";
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  VIDEO: "video",
};

export default function VideoBody({ videos, setVideos }) {
  const moveVideo = (dragIndex, hoverIndex) => {
    const dragVideo = videos[dragIndex];
    const updatedVideos = [...videos];
    updatedVideos.splice(dragIndex, 1);
    updatedVideos.splice(hoverIndex, 0, dragVideo);
    setVideos(updatedVideos);
  };

  return (
    <div className="flex flex-col gap-4 h-[80%] overflow-y-scroll">
      {videos.map((video, index) => {
        return (
          <VideoItem
            key={video.id}
            index={index}
            video={video}
            moveVideo={moveVideo}
          />
        );
      })}
    </div>
  );
}
