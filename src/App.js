import Aside from './components/aside'
import GridLayout from './components/layouts/grid'
import './styles/app.css'
function App() {
  return (
     <main className="container">
       <Aside />
       <GridLayout />
     </main>
  );
}

export default App;
