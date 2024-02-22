import { useEffect, useState } from "react";

export default function LoadData(title) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [count]);

  if (loading === true) {
    return <div>Data Loading ...</div>;
  }
  return (
    <div className="my-16">
        <p className="w-2/3 font-bold text-2xl text-center mx-auto">{title}</p>
      <div className="grid grid-cols-3 gap-3 drop-shadow-md">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img className="h-28 bg-cover w-full" src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button className=" bg-amber-200 px-4 py-1 my-5 w-2/5 rounded-md font-semibold" onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {/* {disableButton ? <p>You have reached to 100 products</p> : null} */}
      </div>
    </div>
  );
}
