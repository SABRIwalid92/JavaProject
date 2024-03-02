import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import {Route } from "react-router-dom"
// import { Switch } from 'react-router-dom';
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import LogReg from "./components/LogReg/LogReg"
function App() {
  return (
    <>
      <Router>
        <Header />
          <Route path='/about' component={About} />
          <Route path='/courses' component={CourseHome} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/journal' component={Blog} />
          <Route path='/contact' component={Contact} />
        {/* <Route path='/logreg' component={ logreg } /> */}
          <Route path='/' component={Home} />

        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
