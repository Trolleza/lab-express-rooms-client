import { Link } from "react-router-dom";
// import "./RoomCard.css";

function RoomCard(props) {
  return (
    <Link
      className="text-decoration-none "
      key={props.room._id}
      to={`/product/${props.room._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-2"
        style={{ width: "100%" }}
      >
        <img
          className="card-img product-img mx-auto mt-2"
          src={props.room.imageUrl}
          alt="room"
        />
        <div className="card-body">
          <h4 className="card-title">
            <small>{props.room.name}</small>
          </h4>

           <p>{props.room.description}</p>
           
          
    
        </div>
      </div>
    </Link>
  );
}

export default RoomCard;
