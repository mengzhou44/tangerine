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
import Articles from './articles'
import FollowUs from './follow-us'


export default function Home() {
   
    return <div>
        <Header />
        <Banner /> 
        <Products />
        <BecomeClient />
        <Awards />
        <Articles />
        <FollowUs/>
        <Footer />
        <Feedback/>
        <Chatbot />
    </div>
}