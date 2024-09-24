export const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div style={{border:"2px solid red"}} key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>delete</button>
          </div>
        );
      })}
    </>
  );
};
