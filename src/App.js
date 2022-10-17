import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import coverImg from './git.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Empty = styled.img`
    display: flex;
    height: 400px;
    width: 400px;
    padding: 20px; 
    opacity: 20%;
`

const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px;
`

function App() {

  const [searchQuery, updateSearchQuery] = useState([]);
  return (
      <>
      <Container>
          <Navbar updateSearchQuery={updateSearchQuery}/>
        </Container>
        <UserDetailsContainer>
          { searchQuery?.length ? searchQuery.map((ele)=> <UserDetails element={ele}/>) : <Empty src={coverImg}/> }
        </UserDetailsContainer>
      </>
  );
}

export default App;
