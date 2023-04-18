import Main from './component/main';

function App() {
  console.log(process.env.REACT_APP_DEVELOYMENT)
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
