// BACK_UP FILE BEFORE COMMIT RESET


import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { SimpleGrid, Box, Image, ChakraProvider } from "@chakra-ui/react";

const RAWG_API_BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "281b43ce6bae41228ad816011da2a9f0"; // Replace this with your actual API key

interface Game {
  id: number;
  name: string;
  cropped_image: string;
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get(RAWG_API_BASE_URL, {
        params: {
          key: API_KEY,
        },
      });
      const croppedGames = response.data.results.map((game: Game) => ({
        ...game,
        cropped_image: cropImageTo600x400(game.background_image),
      }));
      setGames(croppedGames);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const fetchMoreGames = async () => {
    try {
      const response = await axios.get(RAWG_API_BASE_URL, {
        params: {
          key: API_KEY,
          page: Math.floor(games.length / 20) + 1,
        },
      });
      const newGames = response.data.results.map((game: Game) => ({
        ...game,
        cropped_image: cropImageTo600x400(game.background_image),
      }));
      setGames([...games, ...newGames]);

      if (newGames.length === 0 || games.length >= response.data.count) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more games:", error);
    }
  };

  const cropImageTo600x400 = (imageUrl: string) => {
    // Append query parameters to the image URL to crop it to 600x400 pixels
    return `${imageUrl}?width=600&height=400`;
  };

  return (
    <ChakraProvider>
      <InfiniteScroll
        dataLength={games.length}
        next={fetchMoreGames}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more games to load.</p>}
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          {games.map((game) => (
            <Box
              key={game.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={game.cropped_image}
                alt={game.name}
                height="200px" // Set the height of the image to 140px
                width="100%"
              />
              <Box p={4}>
                <h2>{game.name}</h2>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </ChakraProvider>
  );
};

export default App;
