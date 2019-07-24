import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
            <Layout >
            <h1>Lorem ipsum</h1>
            <p>Dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt turpis in nisl dictum, quis gravida turpis sodales. Integer ultrices mollis diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum consequat venenatis. Donec nec congue diam. Vestibulum lobortis sapien neque, id maximus elit dapibus nec. </p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac magna semper, bibendum nunc eu, ultrices ipsum. Praesent vel lacinia nisi, sit amet vestibulum lorem. Donec consequat at elit id ultrices. Etiam a egestas orci, ut tempus neque <Link to="/contact">Contact</Link></p>
            </Layout>
    )
}

export default AboutPage
