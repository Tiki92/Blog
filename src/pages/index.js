import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Pellentesque vel urna velit</h1>
            <h2>Quisque rutrum condimentum mauris, non vehicula mi dapibus a. In id vehicula tortor, at dictum risus</h2>
            <p>Proin at elementum dolor. Donec in justo commodo diam tincidunt sodales. Etiam laoreet bibendum lectus, in feugiat turpis condimentum quis. Mauris eu congue tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
