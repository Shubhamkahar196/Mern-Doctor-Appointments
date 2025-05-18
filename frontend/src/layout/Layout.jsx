import React from 'react'

import header from '../components/header/header'
import footer from '../components/footer/footer'
import Routers from '../routes/Routers'
import { Router } from 'react-router'

const Layout = () => {
  return (
    <header>
        <main>
            <Routers/>
             
        </main>
    </header>
  )
}

export default Layout