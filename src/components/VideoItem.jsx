import React from "react";
import { useDrag, useDrop } from "react-dnd";
import arrowup from "../assets/arrow-up.svg";

const ItemTypes = {
  VIDEO: "video",
};

export default function VideoItem({ video, index, moveVideo }) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.VIDEO,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveVideo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.VIDEO,
    item: { type: ItemTypes.VIDEO, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`h-[96px] w-full flex border border-[#FFFFFF1F] rounded-2xl cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <p className="w-[5%] h-[90%] flex justify-center items-center">
        {video.id}
      </p>
      <p className="py-2 w-[60%] h-[90%] flex items-center">
        <img
          src={`https://picsum.photos/id/${video.id}/200/300`}
          alt={video.title}
          className="w-[118px] h-[64px] object-cover rounded-lg mr-4"
        />
        <span className="text-[20px] font-pin leading-[28px]">
          {video.title}
        </span>
      </p>
      <p className="py-2 w-[20%] h-[90%] flex items-center justify-center">
        <img
          src={`https://picsum.photos/id/${video.id}/200/300`}
          alt={video.username}
          className="w-6 h-6 mr-2 rounded-full"
        />
        <span className="text-[#DBFD51] font-thin leading-[20px]">
          {video.username}
        </span>
      </p>
      <p className="py-2 w-[10%] h-[90%] flex justify-end items-center gap-3">
        <span>{video.like}</span>
        <img src={arrowup} alt="" />
      </p>
    </div>
  );
}
