export interface RatingFilterProps {
  sortByRating: boolean;
  setSortByRating: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RatingFilter({
  sortByRating: sortByRatign,
  setSortByRating: setSortByRating,
}: RatingFilterProps) {
  return (
    <button
      style={{ padding: "8px", marginLeft: "8px", height: "35px" }}
      onClick={() => setSortByRating(!sortByRatign)}
    >
      buscar por avaliação: {sortByRatign ? "ON" : "OFF"}
    </button>
  );
}
