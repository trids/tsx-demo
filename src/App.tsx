import './App.css';
import Greeting from './components/Greetings';
import TextInput from './components/TextInput';

interface AppProps {
  name : String;
}

const App: React.FC<AppProps> = ({name}) => {
  return (
    <div>
      <h1>hello, {name}!</h1>
      <Greeting name = "Dip" age = {30}/>
      <Greeting name = "Dip1" age = {20}/>
      <TextInput/>
    </div>
  )
}

export default App;
