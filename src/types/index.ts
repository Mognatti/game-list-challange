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

export interface singupProps {
  email: string;
  password: string;
}

export interface SignInProps {
  email: string;
  password: string;
}
