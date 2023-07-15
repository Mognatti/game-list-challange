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

export interface CreateAccountProps {
  inputs: loginInputType[];
  email: string;
  password: string;
  passwordConfirmation: string;
  createUser: ({ email, password }: SignInProps) => Promise<void>;
  isLoading: boolean | undefined;
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInProps {
  email: string;
  password: string;
}

export type loginInputType = {
  id: string;
  label: string;
  type: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

export interface LoginProps {
  inputs: loginInputType[];
  email: string;
  password: string;
  logIn: ({ email, password }: SignInProps) => Promise<void>;
  isLoading: boolean | undefined;
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

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
