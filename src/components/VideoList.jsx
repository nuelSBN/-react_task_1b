import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MkdSDK from "../utils/MkdSDK";
import VideoHeader from "./VideoHeader";
import VideoBody from "./VideoBody";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const sdk = new MkdSDK();

  const fetchVideos = async (page) => {
    setIsLoading(true);
    try {
      sdk.setTable("video");
      const response = await sdk.callRestAPI(
        { payload: {}, page, limit: 10 },
        "PAGINATE"
      );

      setVideos(response.list);
      setTotalPages(response.num_pages);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch videos:", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-[80%] mx-auto h-[calc(100%-184px)] py-2">
        <div className="min-w-full h-[90%] flex flex-col gap-3">
          <VideoHeader />
          <VideoBody videos={videos} setVideos={setVideos} />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={page <= 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded px-4"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={page >= totalPages}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded px-4"
          >
            Next
          </button>
        </div>
      </div>
    </DndProvider>
  );
}
