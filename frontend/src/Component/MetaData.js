import React from 'react'
import { Helmet } from 'react-helmet'

function MetaData({ title }) {
    return (
        <>
            <Helmet>
                <title>{`${title}-InstaShop`}</title>
            </Helmet>
        </>
    )
}

export default MetaData