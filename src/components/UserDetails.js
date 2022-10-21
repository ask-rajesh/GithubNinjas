import styled from "styled-components";
import '../App.css'

const Container = styled.div`
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
const GetLink = styled.a`
    color: black; 
    text-decoration: none; 
    cursor: pointer;    

`


const UserDetails = (props) =>{


    return (
        <>
            <Container>
                <UserContainer>
                    <CoverImage src={props.element.avatar_url}/>
                    <Username><b><GetLink className="st"  href={props.element.html_url} target="_blank" rel="noreferrer" >{props.element.login}</GetLink></b></Username>
                </UserContainer>
            </Container>


        </>

    );
}

export default UserDetails;