interface Props {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};
