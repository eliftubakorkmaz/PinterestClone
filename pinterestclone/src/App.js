import './App.css';
import Midindex from './Components/Midindex';
import Navbar from './Components/Navbar3';
import Pinpage from './Components/Pinpage';
import NavbarLoggedOut from './Components/NavbarLoggedOut';
import ProfilePage from './Components/ProfilePage';
import CreatePin from './Components/CreatePin';



function App() {
  return (
    <div>
      <Navbar/>
      <CreatePin/>
    </div>
  );
}

export default App;
