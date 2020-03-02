import React from 'react';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import Nevigationmenu from './navigationmenu';
import Main from '../../main';
import './page.scss';
import WebFooter from '../../components/footer/footer';

const Page=()=>
<div>
    <div>
        <Layout>
            <Header title="bworld.ca" scroll>
                <Nevigationmenu />
            </Header>
            <Drawer title="bworld.ca">
                <Nevigationmenu />
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