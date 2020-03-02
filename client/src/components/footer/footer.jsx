import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
//import Nevigationmenu from './navigationmenu';

const WebFooter=()=>
            <div className='abc'>
            <Footer size="mega">
                <FooterSection type="bottom">
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
            </div>

export default WebFooter;