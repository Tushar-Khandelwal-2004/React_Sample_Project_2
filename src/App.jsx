import "./App.css"
import Contact_Form from "./components/Contact_Form/Contact_Form"
import Contact_Header from "./components/Contact_Header/Contact_Header"
import Navigation from "./components/Navigation/Navigation"

function App() {

  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Contact_Header />
        <Contact_Form />
      </main>
    </div>
  )
}

export default App
