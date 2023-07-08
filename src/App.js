import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from './redux';
import Routing from './pages/Routing';
import './App.css'

const { Content } = Layout;

function App() {
  return (
    <Layout className="layoutContainer">
      <Content className="contentData">
        <Provider store={store}>
          <Routing />
        </Provider>
      </Content>
    </Layout>
  );
}

export default App;
