import styled from 'styled-components'

export const CssTableTrans = styled.section`
display: block;
margin: auto;
width: 500px;
padding-left: 40px;
padding-right: 40px;
padding-bottom: 25px;
th{
    text-align: center;
    background-color: aqua ;
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 6px;
}
td{
    font-size: 20px;
    width: 200px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 6px;
}
tr:nth-last-child(odd){
    background-color: #F2ECEB;
}
`
