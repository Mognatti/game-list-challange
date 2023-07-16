import { User } from "firebase/auth";

export interface AccountInfo {
  inputs: loginInputType[];
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
  createUser: ({
    email,
    nickname,
    password,
  }: CreateFirebaseUser) => Promise<void>;
  isLoginLoading: boolean | undefined;
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginProps {
  inputs: loginInputType[];
  email: string;
  password: string;
  logIn: ({ email, password }: CreateFirebaseUser) => Promise<void>;
  isLoginLoading: boolean | undefined;
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateFirebaseUser {
  email: string;
  nickname?: string;
  password: string;
}

export type loginInputType = {
  id: string;
  label: string;
  type: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

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

export interface FirebaseFavorite {
  favorites: Game[];
  ratedGames?: { id: number; score: number }[];
  uuid: string;
}

export interface GameProps {
  games: any[];
  firebaseRatedGames: any[] | undefined;
  firebaseUserDocsData: any;
}

export interface GameFilterProps {
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  isFilterByFavorites: boolean;
  setIsFilterByFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  genreList: string[];
}

export interface ratedGames {
  id: number;
  score: number;
}

export interface CardProps {
  game: Game;
  addToFirebaseFavorites: (game: Game) => Promise<void>;
  removeFromFirebaseFavorites: (game: Game) => Promise<void>;
  user: User | null;
  firebaseUserDocsData: FirebaseFavorite[];
  postRating: (ratingScore: number | null, gameId: number) => Promise<void>;
  firebaseRatedGames: ratedGames[] | undefined;
}

export interface StarRatignProps {
  id: number;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  postRating: (ratingScore: number | null, gameId: number) => Promise<void>;
  firebaseRatedGames: ratedGames[] | undefined;
  user: User | null;
  ratingScore: number;
}
