import React from 'react';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import WebHeader from '../../components/header/header';
import Main from '../../main';
import './page.scss';
import WebFooter from '../../components/footer/footer';
//import Logo from '../../images/bworldLogo.svg';
import Logo from './logo';
import {auth} from '../../firebase/firebase.util';

class Page extends React.Component{
    constructor(){
        super();
        this.state={
            currentUser:null
        }
    }

    unsubscribeFormAuth=null; 

    componentDidMount(){
        this.unsubscribeFormAuth= auth.onAuthStateChanged(user=>{
                this.setState({currentUser:user});
                console.log(user);
            });
    }

    componentWillUnmount(){
        this.unsubscribeFormAuth();
    }

    render(){
        return(
             <div>
                <div>
                    <Layout>
                        <Header title=<Logo />  scroll>
                            <WebHeader currentUser={this.state.currentUser} />
                        </Header>
                        <Drawer title=<Logo />>
                            <WebHeader currentUser={this.state.currentUser} />
                        </Drawer> 
                        <Content>
                            <div className="page-content" />
                            <br />
                            <Main />
                        </Content>
                        <WebFooter />
                    </Layout>
                </div>
            </div>
        )
    }
}

export default Page;