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
              action='https://gmail.us2.list-manage.com/subscribe/post?u=2622e25d280ca90e2eb346fc0&amp;id=7e9dfce380'
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
