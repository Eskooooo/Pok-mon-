import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

function LikePoke({ initialLike = false }) {
  const [like, setLike] = useState(initialLike);

  const toggleLike = () => {
    setLike((check) => !check);
  };

  return (
    <button onClick={toggleLike}>
      {like ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
    </button>
  );
}

LikePoke.propTypes = {
  initialLike: PropTypes.bool,
};

export default LikePoke;
