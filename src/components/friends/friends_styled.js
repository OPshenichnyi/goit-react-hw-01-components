import styled from 'styled-components'

const GetColorStatus = ({value}) => {
    if (!value) {
        return 'red'
    }
    return 'green'

}

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

img{
    width: 50px;
    height: 50px;
    margin-right: 16px;
}
p{
    margin: 0;
}
`
export const TegStatus = styled.span`
    display: block;
    width: 25px;
    height: 25px;
    margin-right: 60px;
    border-radius: 50%;
    background-color: ${GetColorStatus}; // Зробити за умовою
    margin-left: 60px;
`

