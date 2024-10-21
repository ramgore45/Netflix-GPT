
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utilis/redux/appStore';

function App() {

  return (
      <Provider store={appStore}>
        <div className="relative">
          <Body/>
        </div>
      </Provider>
  );
}

export default App;
