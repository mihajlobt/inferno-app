import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Component from 'inferno-component';
import Login from './components/Login'
import Signup from './components/Signup'
import './index.css';

require('inferno-devtools');
let firebase = require("firebase");

const browserHistory = createBrowserHistory();

// Initialize Firebase
let config = {
    apiKey: "AIzaSyD7wjMP6bypIL4WT0mmwCcPSmqtP5Xw0yg",
    authDomain: "test-7a970.firebaseapp.com",
    databaseURL: "https://test-7a970.firebaseio.com",
    projectId: "test-7a970",
    storageBucket: "test-7a970.appspot.com",
    messagingSenderId: "106560664854"
};
firebase.initializeApp(config);



class App extends Component {

    constructor() {
        super();
        this.state = {
            type: "login"
        };
    }

    handleChange(event) {
        this.setState({type: event.target.id})
    }

    firebaseLogin(event) {
        event.stopPropagation();
        event.preventDefault();
        let inputsDom = event.target.querySelectorAll("input");
        console.log(inputsDom);

        let email = inputsDom[0].value;
        let password = inputsDom[1].value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            // ...
        });
    }

    firebaseCreateAcc(event) {
        event.stopPropagation();
        event.preventDefault();

        let inputsDom = event.target.querySelectorAll("input");
        console.log(inputsDom);

        let email = inputsDom[0].value;
        let password = inputsDom[1].value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

    }

    render() {
            let props = this.props;
            return (
            <Router history={browserHistory}>
                <Route path="/" component={props => <Login firebaseCreate={this.firebaseLogin}/>} >
                    <IndexRoute component={Login}/>
                </Route>

            </Router>

            )
    }
}

Inferno.render(<App/>, document.querySelector('#app'));
