import styled from 'styled-components'

export const CssFriendsList = styled.ul`
display: block;
margin: auto;
width: 500px;
padding-left: 40px;
padding-right: 40px;
li{
    display: flex;
    width: 500px;
    background-color: yellowgreen;
    margin-bottom: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 8px; 
}
span{
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 60px;
    border: solid 1px red;
    border-radius: 50%;
    background-color: red; // Зробити за умовою 
    margin-left: 60px;
}
img{
    width: 50px;
    height: 50px;
    margin-right: 16px;
}
p{
    margin: 0;
}
`