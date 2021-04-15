import './App.css';

import SidebarSection from './sections/SidebarSection';
import MainSection from './sections/MainSection';
import SettingComponent from './components/SettingComponent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <div className="app">
     <Router>
      <SidebarSection />
      <MainSection />
      <SettingComponent/>
     </Router>
   </div>
  );
}

export default App;
