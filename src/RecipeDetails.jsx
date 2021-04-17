import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiHost } from './utils';
import './RecipeDetails.styles.scss';
import RecipeDetailsMain from './RecipeDetailsMain';

const RecipeDetails = ({ loading, setLoading }) => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getRecipeById = async () => {
      setLoading(true);
      try {
        const url = `${apiHost}/${id}`;
        const { data } = await axios.get(url);
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        alert(`Error: ${error.response.status} - ${error.response.statusText}`);
        setLoading(false);
      }
    };
    if (id) getRecipeById();
  }, [setLoading, id]);

  return <RecipeDetailsMain recipe={recipe} loading={loading} />;
};

export default RecipeDetails;
