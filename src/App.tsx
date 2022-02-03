import { useState, useEffect } from 'react';
import { MainPostPage } from 'pages';
import { getData } from 'utils';
import { IData } from 'types/IData';

const App = (): JSX.Element => {
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    getData(data, setData);
  }, [data]);

  return <MainPostPage image={data?.imageUrl} data={data} />;
};

export default App;
