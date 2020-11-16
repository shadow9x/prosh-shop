import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  match = match || {}
  match.params = match.params || {}
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  //const dispatch = useDispatch()

  //const productList = useSelector((state) => state.productList)
  //const { loading, error, products, page, pages } = productList

  //useEffect(() => {
   // dispatch(listProducts(keyword, pageNumber))
  //}, [dispatch, keyword, pageNumber])

  return (
    <Layout>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return { props: { params: null } };
}

export async function getStaticPaths() {
  console.log('what the fuck');
  const res  = await fetch('http://localhost:5000/api/products');
  const { products } = await res.json();
  console.log('what the fuck', products);
  const paths = products.map(product => ({ params: { slug: product.slug } }));
  return { paths, fallback: false };
}

export default HomeScreen
