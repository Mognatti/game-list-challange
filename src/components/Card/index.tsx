export type Game = {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
};

export default function Card(games: Game[]) {
  return <div></div>;
}
