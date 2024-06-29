import { useState, useEffect } from "react";
import "./App.css";
import ReactLoading from "react-loading";
import FavPoke from "./components/FavPoke";
import { loadPoke, prevPoke, nextPoke, addFav } from "./utils/functions";

function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    loadPoke(number, setPoke, setLoading, setError);
  }, [number]);

  return (
    <div className="max-w-xl5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {loading ? (
          <ReactLoading
            type={"spin"}
            color={"black"}
            height={"20%"}
            width={"20%"}
          />
        ) : (
          <>
            {poke && (
              <div>
                <h1>{poke.name}</h1>
                <img
                  src={poke?.sprites?.other?.home?.front_default}
                  alt={poke.name}
                />
                <ul>
                  {poke?.abilities.map((abli, idx) => (
                    <li key={idx}>{abli.ability.name}</li>
                  ))}
                </ul>
                <p>Height: {poke.height}</p>
                <p>Weight: {poke.weight}</p>
                <button onClick={() => prevPoke(setNumber)}>Previous</button>
                <button onClick={() => nextPoke(setNumber)}>Next</button>
                <br />
                <br />
                <button onClick={() => addFav(poke, setFav)}>
                  add to favorite
                </button>
              </div>
            )}
          </>
        )}
        {error && <p>{error}</p>}

        <div>
          <h2 style={{ fontWeight: "bold" }}>Favorite Pokemon</h2>
          {fav.length > 0 ? (
            <FavPoke fav={fav} />
          ) : (
            <div className="flex h-full justify-center items-center">
              <p>NO Favorite Pokemon... </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
