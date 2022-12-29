import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import MainStateFile from "./component/MainStateFile";
import ProductListData from "./component/ProductListData";
import UserAPIData from "./component/UserAPIData";
import NoRoute from "./common/NoRoute";
import Footer from "./component/Footer";

class App extends React.Component {
  render(){
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/service" component={Services}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/employee-list" component={MainStateFile}></Route>
          <Route exact path="/product" component={ProductListData}></Route>
          <Route exact path="/userapi" component={UserAPIData}></Route>
          <Route exact component={NoRoute}></Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

}

export default App;
