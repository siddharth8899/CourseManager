// import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from "reactstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home"
import Header from "./components/Header"
import Gist from "./components/Gist"
import Course from './components/Course'
import AllCourses from './components/AllCourses'
import AddCourse from './components/AddCourse' 
import LeftOptions from './components/LeftOptions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const notify = () => toast.success("DONE!", {
  //   position: "top-center"
  // })
  return (
    <div>
      <Router>
      <Header />
      <Row>
        <Col md={4}>
        <LeftOptions />
        </Col>


        <Col md={8}>
        <Route path="/home" component={Home} exact />
        <Route path="/add" component={AddCourse} exact/>
        <Route path="/view" component={AllCourses} exact />
        {/* <Route path="/about" component={About} exact/>
        <Route path="/contact_us" component={ContactUs} exact/> */}
        </Col>        
      </Row>
      </Router>
    </div>
  )
}
export default App;