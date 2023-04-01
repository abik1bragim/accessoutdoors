import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Gmail from './components/gmail/Gmail';
import Main from './components/main/Main';
import Main2 from './components/main2/Main2';
import Main3 from './components/main3/Main3';
import Main4 from './components/main4/Main4';
import Main5 from './components/main5/Main5';

function App() {
  return (
    <div className="App">
      <Banner />
      <Gmail />
      <Main />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Footer />
    </div>
  );
}

export default App;
