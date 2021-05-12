import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../apis/index";

import RoomForm from "./RoomForm";

function RoomCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/rooms", {
        ...state,
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Room</h1>

      <hr />

      <RoomForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RoomCreate;
