import axios from "axios";

export const loadPoke = async (number, setPoke, setLoading, setError) => {
  let abortController = new AbortController();
  try {
    setLoading(true);
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${number}`,
      {
        signal: abortController.signal,
      }
    );
    setPoke(response.data);
    setError("");
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      setError("Something went wrong");
    }
  } finally {
    setLoading(false);
  }
  return () => abortController.abort();
};

export const prevPoke = (setNumber) => {
  setNumber((number) => number - 1);
};

export const nextPoke = (setNumber) => {
  setNumber((number) => number + 1);
};

export const addFav = (poke, setFav) => {
  setFav((oldState) => [...oldState, poke]);
};
