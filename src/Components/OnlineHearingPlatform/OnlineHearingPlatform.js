import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import HearingContent from './HearingContent'
import Hearing from '../../Pages/OnlineHearingPlatform/Hearing'


const OnlineHearingPlatform = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Hearing/>
        <Footer/>
    </div>
  )
}

export default OnlineHearingPlatform
