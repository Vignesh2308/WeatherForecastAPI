import React from 'react'
import Header from './HeaderComponent'
import Search from './SearchComponent'

import Footer from './FooterComponent'

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div id='container'>
                <Header />
                <Search />
                <Footer />
                </div>
            </React.Fragment>
        );
    }

}

export default Home;