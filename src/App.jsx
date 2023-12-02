import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "./features/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div>Hello</div>
      <button onClick={() => dispatch(getProductData())}>Get Data</button>
      {products.map((item) => (
        <div key={item.id}>
          <img width={100} height={100} src={item.image} />
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
