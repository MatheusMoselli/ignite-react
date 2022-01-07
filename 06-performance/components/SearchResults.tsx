import { ProductItem } from "./ProductItem";

interface Props {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <div>
      {results.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
