//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Readers from "./components/readers";
import AddReaders from "./components/addreaders";
import UpdateReaders from "./components/updatereaders";
import Users from "./components/users";
import AddUsers from "./components/addusers";
import UpdateUsers from "./components/updateusers";
import Author from "./components/author";
import UpdateAuthor from "./components/updateauthor";
import Addauthor from "./components/addauthor";
import Publishers from "./components/publisher";
import AddPublisher from "./components/addpublisher";
import UpdatePublisher from "./components/updatepublisher";
import Books from "./components/books";
import Bookissued from "./components/bookissued";
import Addbookissued from "./components/addbookissued";
import Addbook from "./components/addbook";
import UpdateBooks from "./components/updatebooks";
import BooksOrder from "./components/booksorder";
import AddOrder from "./components/addorder";
import UpdateOrder from "./components/updateorder";
import Home from "./components/home";
import Login from "./components/login";
import { Route, Switch, Redirect } from "react-router-dom";
import AddDamagedBook from "./components/adddamagedbook";
import DamagedBooks from "./components/damagedbooks";
import UpdateDamagedBook from "./components/updatedamagedbook";
import BooksReturn from "./components/booksreturn";
import AddReturn from "./components/addreturn";
import UpdateReturn from "./components/updatereturn";
import Logout from "./components/logout";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/readers/add" component={AddReaders} />
        <Route path="/readers" component={Readers} />
        <Route path="/update/readers/:id" component={UpdateReaders} />
        <Route path="/users" component={Users} />
        <Route path="/users/addusers" component={AddUsers} />
        <Route path="/users/update/:userid" component={UpdateUsers} />
        <Route path="/author" component={Author} />
        <Route exact path="/authors/add" component={Addauthor} />
        <Route path="/authors/update/:authorId" component={UpdateAuthor} />
        <Route path="/book/add" component={Addbook} />
        <Route path="/book/update/:bookid" component={UpdateBooks} />
        <Route path="/book" component={Books} />
        <Route path="/bookorder/add" component={AddOrder} />
        <Route path="/booksorder/update/:orderId" component={UpdateOrder} />
        <Route path="/booksorder" component={BooksOrder} />
        <Route path="/publisher/add" component={AddPublisher} />
        <Route path="/publishers/update/:id" component={UpdatePublisher} />
        <Route path="/publisher" component={Publishers} />
        <Route path="/booksissued/add" component={Addbookissued} />
        <Route path="/bookissued" component={Bookissued} />
        <Route path="/returnbooks/add" component={AddReturn} />
        <Route path="/bookreturn/update/:id" component={UpdateReturn} />
        <Route path="/bookreturn" component={BooksReturn} />
        <Route path="/damagedbook/add" component={AddDamagedBook} />
        <Route path="/damagedbook/update/:id" component={UpdateDamagedBook} />
        <Route path="/damagedbook" component={DamagedBooks} />
        <Route exact path="/home" component={Home} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
