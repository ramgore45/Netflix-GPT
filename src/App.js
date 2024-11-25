
import { Provider } from 'react-redux';
import './App.css';
import appStore from './utilis/redux/appStore';
import { OPENAI_API_KEY } from './utilis/constants';
import Body from './components/pages/Body';

function App() {

  console.log(OPENAI_API_KEY)

  return (
      <Provider store={appStore}>
        <div className="relative">
          <Body/>
        </div>
      </Provider>
  );
}

export default App;
