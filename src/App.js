import "./App.css";

import SearchBar from "./pages/components/SearchBar";
import MovieList from "./pages/components/MovieList";
import AddMovie from "./pages/components/AddMovie";
import { useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Series from "./pages/Series.js";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

function App() {
  const animies = [
    {
      title: "Attack on Titan",
      image:
        "https://assets-prd.ignimgs.com/2022/03/13/titan2-1647194257941.jpg",
      description:
        "A story set in a world where humanity lives in fear of Titans, giant humanoid creatures who devour humans without reason. The story follows Eren Yeager, who vows to rid the world of Titans after witnessing the death of his mother.",
      Rating: "4.5",
      id: 1,
      type: "serie",
    },

    {
      title: "Fullmetal Alchemist: Brotherhood",
      image: "https://flxt.tmsimg.com/assets/p8042516_b_v9_ab.jpg",
      description:
        "Two brothers, Edward and Alphonse Elric, use alchemy to try to bring their deceased mother back to life, but it backfires, resulting in Edward losing an arm and a leg and Alphonse losing his entire body. The brothers then embark on a journey to find the Philosopher's Stone to restore their bodies.",
      Rating: "4.6",
      id: 2,
      type: "serie",
    },
    {
      title: "Death Note",
      image: "https://images.epagine.fr/327/9782505000327_1_75.jpg",
      description:
        "A high school student, Light Yagami, finds a supernatural notebook that grants him the power to kill anyone whose name he writes in it. He begins to use this power to create a utopian world free of crime, but is pursued by a mysterious detective known only as",
      Rating: "4.4",
      id: 3,
      type: "serie",
    },

    {
      title: "Naruto",
      image:
        "https://fr.web.img2.acsta.net/pictures/19/08/02/15/12/4423178.jpg",
      description:
        "The story follows Naruto Uzumaki, a young ninja who dreams of becoming the strongest and most respected ninja in his village. Along with his teammates, Sasuke and Sakura, he goes on missions and fights against powerful enemies.",
      Rating: "4.1",
      id: 4,
      type: "serie",
    },
    {
      title: "Spirited Away",
      image:
        "https://gkids.com/wp-content/uploads/2023/02/GF23_Posters_2023-02-01_11_Spirited-692x1024.jpg",
      description:
        "A young girl named Chihiro gets trapped in a mysterious world of spirits and monsters after her parents are transformed into pigs. She must work at a bathhouse for the spirits to save her family and find a way back to the human world.",
      Rating: "3",
      id: 5,
      type: "movie",
    },

    {
      title: "Your Name",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      description:
        "Two strangers, a high school boy in Tokyo and a high school girl in a rural town, begin to switch bodies and must figure out how to navigate each other's lives. As they grow closer, they discover a connection that transcends time and space.",
      Rating: "2",
      id: 6,
      type: "movie",
    },
    {
      title: "One Piece",
      image:
        "https://www.manga-news.com/public/images/series/.one-piece-manga-1-glenat_large.jpg",
      description:
        "The story follows Monkey D. Luffy, a young pirate with rubber-like abilities, as he travels the world in search of the ultimate treasure known as One Piece. Along the way, he gathers a crew of loyal friends and battles powerful enemies",
      Rating: "4.3",
      id: 7,
      type: "serie",
    },
    {
      title: "Princess Mononoke",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      description:
        "A young warrior named Ashitaka gets caught up in a conflict between humans and the gods of the forest when he tries to save his village from a rampaging demon. He meets Princess Mononoke, a young woman raised by wolves, and must navigate the delicate balance between nature and civilization.",
      Rating: "1",
      id: 8,
      type: "movie",
    },
    {
      title: "Akira",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91XooFfV1tL._AC_UF1000,1000_QL80_.jpg",
      description:
        "In a dystopian future Tokyo, a biker gang member named Tetsuo gains powerful psychic abilities after a motorcycle accident. As his powers spiral out of control, his friend Kaneda tries to save him and uncover the government's secrets surrounding the incident.",
      Rating: "5",
      id: 9,
      type: "movie",
    },
  ];
  const [movies, setMovies] = useState(animies);
  const [byName, setByName] = useState("");
  const [byRate, setByRate] = useState(0);
  const Add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const deleteMovie = (title) => {
    const newList = movies.filter((el) => el.title !== title);
    setMovies(newList);
    console.log(title);
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar setByName={setByName} setByRate={setByRate} />
              <MovieList
                deleteMovie={deleteMovie}
                movies={movies}
                byName={byName}
                byRate={byRate}
              />
              <AddMovie Add={Add} />
            </>
          }
        />
        <Route
          path="/series"
          element={
            <Series series={movies.filter((el) => el.type == "serie")} />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies movies={movies.filter((el) => el.type == "movie")} />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={animies} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
