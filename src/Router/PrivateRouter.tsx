import {Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import { ActivoForm } from "../components/Activos/ActivoForm";
import ActivoList from "../components/Activos/ActivoList";
import UserList from "../components/Auth/UserList";
import SideBar from "../components/Navigation/SideBar";
import Navbar from "../components/Navigation/Navbar";
import verifyToken from "../utils/verifyToken"
import UserView from "../components/Home/UserView";
import Footer from "../components/Navigation/Footer";
import ContextSidebar from "../context/ContextSidebar";
import React, { useContext } from "react";
import './router.css'

function PrivateRouter(){
 
  const {position} = useContext<any>(ContextSidebar)

  verifyToken();

    return (
        <>
        
          <Navbar />
          <SideBar/>
          <div className={position ? "PrivateRouter":"PrivateRouter active"} style={{float:"right"}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/activosform" component={ActivoForm} />
              <Route exact path="/activos" component={ActivoList} />
              <Route exact path="/userlist" component={UserList} />
              <Route exact path="/userview/:id" component={UserView} />
              <Redirect from="/**" to="/" />
            </Switch>
          </div>
          <Footer/>
        </>
    )
}

export default PrivateRouter
