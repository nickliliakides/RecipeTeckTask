import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.styles.scss';
import { apiHost } from './utils';
import AppMain from './AppMain';

const App = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(apiHost);
        setRecipes(data);
        setAllRecipes(data);
        setLoading(false);
      } catch (error) {
        alert(`Error: ${error.response.status} - ${error.response.statusText}`);
        setLoading(false);
      }
    };
    getRecipes();
  }, []);

  useEffect(() => {
    if (recipes && recipes[0]) push(`/${recipes[0].id}`);
  }, [recipes, push]);

  return (
    <AppMain
      recipes={recipes}
      allRecipes={allRecipes}
      setRecipes={setRecipes}
      loading={loading}
      setLoading={setLoading}
    />
  );
};

export default App;
