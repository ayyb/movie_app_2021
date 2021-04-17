
function Food( { favorite }){
  return <h1>I like {favorite}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food favorite="kimchi"/>
      <Food favorite="ramen"/>
      <Food favorite="samgupsal"/>
      <Food favorite="chkumi"/>
    </div>
  );
}

export default App;
