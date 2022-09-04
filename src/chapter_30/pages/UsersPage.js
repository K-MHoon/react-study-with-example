import UsersContainer from '../containers/UsersContainer';
import UserContainer from '../containers/UserContainer';
import { Route, Routes } from 'react-router-dom';

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path=":id" element={<UserContainer></UserContainer>}></Route>
      </Routes>
    </>
  );
};

export default UsersPage;
