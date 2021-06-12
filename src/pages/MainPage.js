import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/header";
import Sender from "../components/Sender";
import AppFooter from "../components/main/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";


const { Header, Content } = Layout;

class MainPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <Sender/>
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MainPage;