import './App.css';
import ProfilePhotos from './components/profile/Profilephoto';
import Names from './components/profile/FullName';
import Myadde from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhotos />
      <Names></Names>
      <Myadde></Myadde>
    </div>
  );
}

export default App;
