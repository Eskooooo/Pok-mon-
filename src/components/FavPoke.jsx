import PropTypes from "prop-types";
import LikePoke from "./LikePoke";
function FavPoke({ fav }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {fav?.map((data, idx) => (
        <div key={idx}>
          <h3>{data.name}</h3>
          <img src={data.sprites.other.home.front_default} alt={""} />
          <LikePoke />
        </div>
      ))}
    </div>
  );
}

FavPoke.propTypes = {
  fav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sprites: PropTypes.shape({
        other: PropTypes.shape({
          home: PropTypes.shape({
            front_default: PropTypes.string,
          }),
        }),
      }),
    })
  ).isRequired,
};

export default FavPoke;
