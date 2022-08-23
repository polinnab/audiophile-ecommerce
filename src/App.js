import Layout from 'components/layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Router from 'routes/router';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router></Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
