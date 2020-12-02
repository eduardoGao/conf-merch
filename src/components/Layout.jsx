import React from 'react'

import '../styles/components/Layout.css'

import { Header, Footer } from './index'

function Layout({ children }) {
    return (
        <div className='Main'>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
