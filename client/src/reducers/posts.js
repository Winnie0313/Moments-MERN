// reducer - a function that takes in the initial state and an action, and which returns that specific part of the global store
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;

  }
}