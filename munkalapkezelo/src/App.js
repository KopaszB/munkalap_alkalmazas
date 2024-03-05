import Navbar from './navbar'
import NewMlp from './pages/ujmunkalap'
import ActiveMlp from './pages/aktivmunkalap'
import ClosedMlp from './pages/lezartmunkalap'
import AllMlp from './pages/osszesmunkalap'

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <div className = "component">Válassz a menüből!</div>
      break;
    case "/ujmunkalap":
      component = <NewMlp />
      break;
    case "/aktivmunkalap":
      component = <ActiveMlp />
      break;
    case "/lezartmunkalap":
      component = <ClosedMlp />
      break;
    case "/osszesmunkalap":
      component = <AllMlp />
      break;
    default:
      break;
  }


  return (
    <>
    <Navbar />
    <div className="component">{component}</div>
    </>
  )
}

export default App

