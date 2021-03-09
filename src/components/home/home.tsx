import Header from './header' 
import Banner from './banner'
import Footer from './footer'
import styled from 'styled-components'
import React from 'react'
import Products from './products'
import Feedback from './feedback'
import Chatbot from './chatbot'
import BecomeClient from './become-client'
import Awards from './awards'


export default function Home() {
   
    return <div>
        <Header />
        <Banner /> 
        <Products />
        <BecomeClient />
        <Awards />
        <Footer />
        <Feedback/>
        <Chatbot />
    </div>
}