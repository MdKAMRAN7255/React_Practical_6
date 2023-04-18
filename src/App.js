import Main from './component/main';

function App() {
  console.log(process.env.REACT_APP_PRODUCTION_MESSAGING)
  console.log(process.env.REACT_APP_STAGGING_MESSAGING)
  console.log(process.env.REACT_APP_DEVELOPMENT_MESSAGING)
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
