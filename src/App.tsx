import './App.css';

interface AppProps {
  name : String;
}

const App: React.FC<AppProps> = ({name}) => {
  return (
    <div>
      <h1>hello, {name}!</h1>
    </div>
  )
}

export default App;
