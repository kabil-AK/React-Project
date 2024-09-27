import React from "react";

const ProductCard = ({ product, cart, setCart }) => {
    const isInCart = cart.some((item) => item.id === product.id);
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    };
    
     const removeFromCart = (productId) => {
       setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
     };

  return (
    <div className="border p-4 rounded shadow-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-red-600 font-semibold">${product.price}</p>
      <p className="text-gray-400 font-semibold">
        {product.description.substring(0, 100)}...
      </p>
      <div className="mt-4">
        {isInCart ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-14"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-14 ml-20"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
