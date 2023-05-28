import './App.css';
import './assets/style/header.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SubHeader from './components/header/SubHeader';
import Main from './components/main/Main';
import RightSideBar from './components/rightsidebar/RightSideBar';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <div className='mt-2 d-flex'>
        <SideBar />
        <div>
          <div className='d-flex h-85'>
            <Main />
            <RightSideBar />
          </div>

          <Footer />

        </div>

      </div>
    </div>
  );
}

export default App;
