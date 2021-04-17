export const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, word) => {
      if (acc + word.length <= limit) {
        newTitle.push(word);
      }
      return acc + word.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

export const apiHost = 'http://localhost:5000/recipes';
