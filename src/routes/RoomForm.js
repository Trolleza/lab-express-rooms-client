function RoomForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="roomFormName">Room Name</label>
        <input
          type="text"
          className="form-control"
          id="roomFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="roomDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="roomFormTagline"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>

      <div className="form-group">
        <label htmlFor="roomFormImage">Room Picture</label>

        <input
          type="text"
          className="form-control"
          id="roomFormImage"
          name="roomFormImage"
          onChange={props.handleChange}
          value={props.state.imageUrl}
        />
      </div>

      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RoomForm;
