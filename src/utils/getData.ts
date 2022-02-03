import axios from 'axios';
import { IData } from 'types/IData';

export const getData = (data: IData | null, setData: React.Dispatch<React.SetStateAction<IData | null>>) => {
  axios
    .get('https://cdn.ggumim.co.kr/test/image_product_link.json')
    .then((res) => {
      if (!data) {
        setData(res.data);
      }
    })
    .catch((err) => console.log(err));
};
