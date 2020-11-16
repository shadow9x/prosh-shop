import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../store'
const Layout = (props) => {
  return (
    <Provider store={store}>
      <Header />
      <main className='py-3'>
        <Container>
          {props.children}
        </Container>
      </main>
      <Footer />
    </Provider>
  );
}
export default Layout;
