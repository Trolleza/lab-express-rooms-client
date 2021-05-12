import { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import api from "../apis/index";

function RoomFeed() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await api.get("/rooms");

        setRooms([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRooms();
  }, []);

  return (
    <div className="row">
      {rooms.map((room) => {
        return (
          <div key={room._id} className="col-12 col-sm-4 col-md-3">
            <RoomCard room={room} />
          </div>
        );
      })}
    </div>
  );
}

export default RoomFeed;
