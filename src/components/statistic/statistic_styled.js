import styled from 'styled-components'

export const StatisticSection = styled.section`
display: block;
margin: auto;
width: 500px;
padding-left: 40px;
padding-right: 40px;
`

export const TitleStatistic = styled.h2`
text-align: center;
`
export const StatisticList = styled.ul`
display: flex;
text-align: center;
justify-content: space-around;
padding: 0;

li{
    display: block;
    width: 100px;
    height: 100px;
    justify-content: center;
}
li:nth-child(2n+1) {
  background-color: skyblue;
}
li:nth-child(2n) {
  background-color: yellowgreen;
}
span{
    display: block;
    font-size: 22px;
    margin-top: 15px;

}
`