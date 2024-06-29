import axios from "axios";

export const fetchPokemon = async (number, abortController) => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${number}`,
      {
        signal: abortController.signal,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      throw new Error("Something went wrong");
    }
  }
};
