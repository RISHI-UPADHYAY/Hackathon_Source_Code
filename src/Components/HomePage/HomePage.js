import React from 'react'
import DashboardSection from './DashboardSection'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import Header from './Header'

const HomePage = () => {
    return (
        <div>
            <Header />
            <DashboardSection />
            <FeaturesSection />
            <Footer />
        </div>
    )
}

export default HomePage
