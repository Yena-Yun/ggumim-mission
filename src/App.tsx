import { useState, useEffect } from 'react';
import ProductPost from 'pages/ProductPost';
import axios from 'axios';

interface ProductList {
  discountRate: number;
  imageUrl: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: number;
  productName: string;
}

interface IData {
  id: number;
  imageUrl: string;
  productList: ProductList[];
}

const App = (): JSX.Element => {
  const [data, setData] = useState<IData | null>(null);

  const getData = () => {
    axios
      .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then((res) => {
        console.log(res.data);

        if (!data) {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ProductPost image={data?.imageUrl} data={data} />
    </>
  );
};

export default App;
