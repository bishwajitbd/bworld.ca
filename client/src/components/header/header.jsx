import React from 'react';
import { Layout, Header, Navigation, Drawer, Content,Footer, FooterSection, FooterLinkList } from 'react-mdl';

const Headers=()=>
<div>
{/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <h1>trrtrt</h1>
        </Content>
        <Footer size="mega">
            <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                    <a href="/about">About</a>
                    <a href="/faq">FAQ</a>
                    <a href="/help">Help</a>
                    <a href="/privacy">Privacy & Terms</a>
                    <a href="/contact">BISHWAJIT BARUA</a>
                </FooterLinkList>
                <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.bworldca.herokuapp.com/">https://bworldca.herokuapp.com </a></p>
            </FooterSection>
        </Footer>
    </Layout>
</div>
<h1>dddd</h1>
</div>


export default Headers;