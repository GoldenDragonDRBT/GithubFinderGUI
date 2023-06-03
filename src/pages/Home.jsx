import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
      {/* {import.meta.env.VITE_GITHUB_TOKEN} */}
      {/* {import.meta.env.VITE_GITHUB_URL} */}
    </>
  );
}
export default Home;
