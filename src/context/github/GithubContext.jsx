import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// const GITHUB_URL = import.meta.env.VITE_GITHUB_URL; // Comment because moved to "GithubActions.jsx"
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Comment because moved to "GithubActions.jsx"

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]); // Comment because we using "Reducer" instead
  // const [loading, setLoading] = useState(true); // Comment because we using "Reducer" instead
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  /*--------------------Comment because handled by "GithubActions.jsx"------------------*/
  // Get initial users (testing purposes)

  // Get search results
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   // setUsers(data);
  //   // setLoading(false);

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };

  // // Get single user
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     const data = await response.json();

  //     // setUsers(data);
  //     // setLoading(false);

  //     dispatch({
  //       type: 'GET_USER',
  //       payload: data,
  //     });
  //   }
  // };

  // // Get user repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   // setUsers(data);
  //   // setLoading(false);

  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  //   });
  // };
  /*--------------------Comment because handled by "GithubActions.jsx"-------------------*/

  // Clear users from state
  // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' }); // For 'Button' clear

  // Set loading
  // const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        // users: state.users, // Comment because we use "...state" instead
        // loading: state.loading, // Comment because we use "...state" instead
        // user: state.user, // Comment because we use "...state" instead
        // repos: state.repos, // Comment because we use "...state" instead
        ...state,
        dispatch,
        // searchUsers, // Comment because moved to "GithubActions.jsx"
        // clearUsers,
        // getUser, // Comment because moved to "GithubActions.jsx"
        // getUserRepos, // Comment because moved to "GithubActions.jsx"
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

/* Note:
The dispatch method is how we send actions to the store. We’ll call it like this:
store.dispatch({ type: 'GET_USERS', payload: data, });
dispatch calls the "reducer()" function passed in as an argument with the current state
and the action. dispatch sets state to the reducer’s return value.
Note that dispatch does not return the state. Dispatching actions in Redux (which in our case we just using the "Reducer" method which is a part of a "Redux" tool, So in our case we not using "Redux") are “fire-and-forget.” When we call dispatch, we’re sending a notification to the store
with no expectation on when or how that action will be processed.
*/
