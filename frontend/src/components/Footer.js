import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Mailchimp from 'react-mailchimp-form';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Mailchimp
              action='https://shop.us7.list-manage.com/subscribe/post?u=32768e3115b915a86e5758d5b&amp;id=06741147e0'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
