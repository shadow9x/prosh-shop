import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <meta name="og:title" content={title} />
      { image && <meta name="og:image" content={image} /> }
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

export default Meta
