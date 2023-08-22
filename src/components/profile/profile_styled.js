import styled from 'styled-components'

export const Container = styled.div`
display: block;
margin: auto;
width: 500px;
background-color: #d5d3d3;
padding-left: 40px;
padding-right: 40px;

`
export const ContInfo = styled.div`
background-color: white;
display: block;
margin-left: auto;
margin-right: auto;
width: 350px;
padding-bottom: 40px;
padding-top: 40px;
text-align: center;

img{
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 150px;
    height: 150px;
}
p{
    margin: 15px;
    font-size: 20px;
}
`
export const ProfileName = styled.p`
font-size: 25px;
font-weight: 700;
margin-bottom: 15px;
`
export const Tumb = styled.ul`
display: flex;
width: 350px;
justify-content: center;
margin: 0;
gap: 35px;
margin-left: auto;
margin-right: auto;
padding: 0;
span{
    font-size: 22px;
    display: block;
    text-align: center;
    margin-top: 15px;
}

span:last-of-type{
    font-weight: 800;
}

li{
    width: 100px;
    gap: 25px;
    margin-bottom: 20px;
}

`