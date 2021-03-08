import Header from './header' 
import Banner from './banner'
import Footer from './footer'
import styled from 'styled-components'
import React from 'react'
import Products from './products'
 
const HomeBox = styled.div`
    
`

export default function Home() {
   
    return <HomeBox>
        <Header />
        <Banner /> 
        <Products />
        <Footer />
    </HomeBox>
}