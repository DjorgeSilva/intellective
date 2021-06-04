import React from 'react'
//components
import { Banner } from '../../Components/Banner'
import { OurProduct } from '../../Components/OurProduct'

export const Home: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Banner/>
            <OurProduct/>
        </React.Fragment>
    )
}
