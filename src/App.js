import './App.css';
import Header from './components/header'
import Main from './components/content';
import Footer from './components/end';

function App() {
  const auth = 'Kambar Nursultan';
  return (
    <div className="App">
      <Header author = {auth}/>
      <Main author = {auth}/>
      <Footer />
    </div>
  );
}

export default App;