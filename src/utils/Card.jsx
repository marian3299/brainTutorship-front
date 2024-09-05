import { Link } from "react-router-dom";

const Card = ({ nombre }) => {
  return (
    <Link to="/homeAdmin/maestros/id">
      <button className="text-white bg-blue-1 w-full text-center rounded-lg py-4 hover:bg-grey cursor-pointer">
        {nombre}
      </button>
    </Link>
  );
};

export default Card;
