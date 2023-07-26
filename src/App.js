import 'bootstrap/dist/css/bootstrap.css';
import Config from './config/Config';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Config />;
    </Provider>
  );
}

export default App;
