import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// interface IgetData {
//   url: string;
// }

interface ProductList {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

interface IResponse {
  id: number;
  imageUrl: string;
  productList: ProductList[];
}

const getData = (url: string) => {
  const [response, setResponse] = useState<IResponse>();
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      axios(url).then((res) => {
        setResponse(res.data);
      });
    } catch (err: any) {
      setError(err);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error };
};

export default getData;
