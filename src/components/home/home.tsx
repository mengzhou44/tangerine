import Header from './header' 
import Banner from './banner'
import Footer from './footer'
import styled from 'styled-components'
 
const HomeBox = styled.div`
    position: relative; 
`

export default function Home() {
   
    return <HomeBox>
        <Header />
        <Banner />
        <Footer />
    </HomeBox>
}