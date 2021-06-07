import React from 'react'
//components
import { Banner } from '../../Components/Banner'
import { Blog } from '../../Components/Blog'
import { Cases } from '../../Components/Cases'
import { Contato } from '../../Components/Contact'
import { OurProduct } from '../../Components/OurProduct'
import { OurService } from '../../Components/OurService'
import { OurStaff } from '../../Components/OurStaff'

export const Home: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Banner />
            <OurProduct />
            <OurService />
            <OurStaff />
            <Cases/>
            <Blog/>
            <Contato/>
        </React.Fragment>
    )
}
