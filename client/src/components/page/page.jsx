import React from 'react';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import WebHeader from '../../components/header/header';
import Main from '../../main';
import './page.scss';
import WebFooter from '../../components/footer/footer';

const Page=()=>
<div>
    <div>
        <Layout>
            <Header title="bworld.ca" scroll>
                <WebHeader />
            </Header>
            <Drawer title="bworld.ca">
                <WebHeader />
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

export default Page;