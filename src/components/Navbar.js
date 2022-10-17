import { useState } from "react";
import styled from "styled-components";
import icon from '../git.png';
import SearchIcon from '../searchicon.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    background-color: purple;
    color: black;
    align-items:center;
    padding: 15px;
    box-shadow: 0 3px 6px 0 #555;
    font-size: 20px;
    font-family: 'Barlow Condensed', sans-serif;
    font-family: 'Edu SA Beginner', cursive;
    justify-content: space-between;
`
const Appname = styled.div`
    display: flex;
    justify-content: center;
    border-style: solid;
    padding: 10px;
    background-color: white;
    border-radius: 5%;
    align-items: center;
`
const Icon = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 5px;
`

const Searchbox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    margin-right: 5px;
    width: 50%;

`

const Searchinput = styled.input`
    display:flex;
    outline: none;
    border: none;
`

const Searchicon = styled.img`
    height: 20px;
    width:20px;
    padding-right: 10px; 
`

const Navbar = (props) =>
{
    const [timeoutID, updateTimeOutID] = useState();

    const fetchData = (userName) =>{
        fetch(`https://api.github.com/search/users?q=${userName}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data.items);
            props.updateSearchQuery(data.items);
        })
    }

    const onTextChange = (event) =>{
        clearTimeout(timeoutID);
        let id = setTimeout(()=>{
            fetchData(event.target.value);
        },1000);
        updateTimeOutID(id);
    }
    return (
        <>
        <Container>
            <Header>
                <Appname>
                    <Icon src={icon}/>
                    GitHub Ninjas
                </Appname>

                <Searchbox>
                    <Searchicon src={SearchIcon}/>
                    <Searchinput placeholder="search name...." onChange={onTextChange}/>
                </Searchbox>
            </Header>



        </Container>
        </>

    );
}

export default Navbar;