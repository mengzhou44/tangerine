import Header from './header' 
import Banner from './banner'
import Footer from './footer'
import styled from 'styled-components'
import React from 'react'
import Products from './products'
import Feedback from './feedback'
import Chatbot from './chatbot'
 
const HomeBox = styled.div`
    
`

export default function Home() {
   
    return <HomeBox>
        <Header />
        <Banner /> 
        <Products />
        <Footer />
        <Feedback/>
        <Chatbot />
    </HomeBox>
}