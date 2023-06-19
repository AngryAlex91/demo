import Car from "./components/Car";
import ChangeButton from "./components/ChangeButton";
import Click from "./components/Click";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import List from "./components/List";
import Parent from "./components/Parent";
import Person from "./components/Person";
import Random from "./components/Random";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './components/appSyles.css'
import { Component } from "react";
import styles from './components/appStyles.module.css'
import Form from "./components/Form";
import ColorChange from "./components/ColorChange";
import InputText from "./components/InputText"
import Table from "./components/Table";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";
import PortalDemo from "./components/PortalDemo";
import ParentEl from "./components/ParentEl";
import ErrorBoundry from "./components/ErrorBoundry";
import Hero from "./components/Hero";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import UpdatedComponent from "./components/withCounter";
import User from "./components/User";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import CounterTwo from "./components/CounterTwo";
import ComC from "./components/ComC";
import { UserProvider } from "./components/userContext";
import MyComponent from "./components/MyComponent";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter"
import UseStateObject from "./components/UseStateObject";
import UseStateArray from "./components/UseStateArray";
import RandomArray from "./components/RandomArray";
import MouseMove from "./components/MouseMove";



class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <RefDemo />  */}
      {/* <ColorChange/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1>
      <h1 className= {styles.success}>Success</h1> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
     {/* <Inline/> */}
      {/* <Greetings/> */}
      {/* <ChangeButton/> */}
      {/* <Counter/> */}
     {/* <Click/> */}
     {/* <Parent/> */}
     {/* <Random/> */}
     {/* <List/> */}
     {/* <Stylesheet primary = {true}/> */}
   {/* <Person/> */}
  {/* <InputText/> */}
  {/* <Table/> */}
  {/* <FocusInput/> */}
  {/* <FRParent/> */}
  {/* <PortalDemo/> */}
  {/* <ParentEl /> */}
  {/* <ErrorBoundry>
    <Hero heroName='Joker' />
  </ErrorBoundry> */}
  {/* <ClickCounter />
  <HoverCounter /> */}

  {/* <User render={(isLogged) => isLogged? 'Alex' :'Guest'}/> */}
  
  {/* <CounterTwo>
    {(count, increment) => <HoverCounterTwo count={count} increment={increment}/> }
  </CounterTwo>
  <CounterTwo>
    {(count, increment) => <ClickCounterTwo count={count} increment={increment}/> }
  </CounterTwo> */}

{/* 
<UserProvider value="alex">
<ComC />
</UserProvider> */}

{/* <MyComponent/> */}
  

{/* <PostList /> */}
{/* <PostForm/> */}


{/* <HookCounter/> */}
{/* <RandomArray/> */}
{/* <UseStateObject/> */}
{/* <UseStateArray/> */}
<MouseMove/>
    </div>
  );
}
}
export default App;
