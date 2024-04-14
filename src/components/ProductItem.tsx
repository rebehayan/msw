interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
}
interface Props {
  items: Product;
}

function ProductItem({ items }: Props) {
  const { id, brand, name, price, rate, review } = items;
  return (
    <div>
      {id} {brand} {name} {price} {rate} {review}
    </div>
  );
}

export default ProductItem;
