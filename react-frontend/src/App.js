import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { HashRouter as Router, Route } from 'react-router-dom'
import RegisterScreen from './screens/RegisterScreen'
import { Container } from 'react-bootstrap'
function App() {
  return (
    <Router>
      <Head />
      <main className="py-3">
        <Container>
          <Route path="/register" component={RegisterScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
