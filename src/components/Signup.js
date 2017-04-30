import Component from 'inferno-component';
import Logo from '../logo';
import '../App.css';

class Signup extends Component {

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <Logo width="40" height="40"/>
                    <h2>{`Welcome`}</h2>
                </div>
                <div className="App-content">
                    <form className="App-login" onSubmit={this.props.firebaseLogin}>
                        <div className="inputWrapper">
                            <input type="email" placeholder="email"/>
                            <label htmlFor="email"></label>

                        </div>
                        <div className="inputWrapper">
                            <input type="password" placeholder="password"/>
                            <label htmlFor="password"></label>
                        </div>
                        <button className="signup-btn" id="login">Signup</button>
                        <button id="login" onClick={this.props.handleChange}></button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Signup;
