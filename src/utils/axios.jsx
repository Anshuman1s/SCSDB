import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmJkZmY1OTY4NDdlYmY1M2IxNDI3YzkxNjJhZmU0MyIsIm5iZiI6MTcyMzE4MDI3NS44MDY5OTcsInN1YiI6IjY2YjVhMjY5YjFiYjA3ZjIyZGU1Y2ZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ZiwDqHFjMdfFxdtPrABf2t92st1Fk5_zx2YbH9xylY",
  },
});

export default instance;
