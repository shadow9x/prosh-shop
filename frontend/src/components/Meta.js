import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <meta name="og:title" content={title} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6GT4T07P4W"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6GT4T07P4W');
      `}</script>     
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
