import ProductCard from "./ui/ProductsCard";

function ProductList({ items }) {
  return (
    <div className="space=y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
