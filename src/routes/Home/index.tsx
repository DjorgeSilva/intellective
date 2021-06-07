import React from 'react'
//components
import { Banner } from '../../Components/Banner'
import { OurProduct } from '../../Components/OurProduct'
import { OurService } from '../../Components/OurService'

export const Home: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Banner />
            <OurProduct />
            <OurService />
        </React.Fragment>
    )
}
