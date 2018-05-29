import React, {Component} from 'react';
//import Home from './components/layout/Home';
import Header from './Header';
import Main from '../Main';
//import Footer from './Footer';


class App extends Component {



    render() {
        return (
            <div>
                <Header/>
                <Main/>
                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;