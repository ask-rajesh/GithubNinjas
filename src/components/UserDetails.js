import styled from "styled-components";
import '../App.css'

const Container = styled.a`
    display: flex;
    flex-direction: column;
    border-style: solid;
    margin: 5px;
    border-radius: 10px;
    width:300px;
    height: 100px;
    background-color: #05ffb0;
    background-color: rgba(50, 115, 220, 0.3);
    background-color: #f1e6f8;
    box-shadow: 0 3px 6px 0 #555;
    cursor: pointer;
    text-decoration: none;
    color: black;
    
`

const UserContainer = styled.div`
    display: flex;
    flex-direction:column;
    width = 120px;
    align-items: center;
    

`
const CoverImage = styled.img`
    height: 50px;
    width: 50px;
    border-style: solid;
    border-radius: 100%;
    margin: 5px;
`

const Username = styled.div`
    font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Edu SA Beginner', cursive;
    font-size:20px;
`


const UserDetails = (props) =>{


    return (
        <>
            <Container className="st" href={props.element.html_url} target="_blank" rel="noreferrer">
                <UserContainer>
                    <CoverImage src={props.element.avatar_url}/>
                    <Username><b>{props.element.login}</b></Username>
                </UserContainer>
            </Container>


        </>

    );
}

export default UserDetails;