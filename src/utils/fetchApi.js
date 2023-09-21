import axios from "axios";

export const getRandomImages = async () => {
  try {
    const { data } = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=-TKWnf0lgg5v-IuEg3Cbub1RLev6DP26LWbIzfD97F0&query=nature"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
