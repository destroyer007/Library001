import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home  from '../routes/Home';
import  Books  from '../routes/Books';
import AddBook from '../routes/AddBook';
import  ELibrary  from '../routes/ELibrary';
import Members from '../routes/Members';
import AddMember from '../routes/AddMember';
import Footer from '../common/Footer';
import Header from '../common/Header';



function App() {
  return (
    <div className="App">
      <h2>Library</h2>
      <HashRouter>
        <Header/>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/books" component={Books}/>
              <Route path="/addBook" component={AddBook}/>
              <Route path="/e-Library" component={ ELibrary}/>
              <Route path="/members" component={Members}/>
              <Route path="/addMembers" component={AddMember}/>
            </Switch>
        </div  >
        <div className="bottomView"><Footer/></div>
        
      </HashRouter >
    </div>
  );
}

export default App;
