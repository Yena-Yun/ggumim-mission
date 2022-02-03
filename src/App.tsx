import { useState, useEffect } from 'react';
import MainPostPage from 'pages/MainPostPage';
import { IData } from 'types/IData';
import { getData } from 'utils/getData';

const App = (): JSX.Element => {
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    getData(data, setData);
  }, []);

  return <MainPostPage image={data?.imageUrl} data={data} />;
};

export default App;
