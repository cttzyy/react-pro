import React from 'react';
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import Header from './compents/Header';
import Footer from './compents/Footer';
import NavLeft from './compents/NavLeft';
export default class Admin extends React.Component{
    render(){
        return <Row className={'h-100'}>
            <Col span={3} style={{backgroundColor:'#000'}} className={'h-100'}>
            <NavLeft/>
            </Col>
            <Col span={21}>
            <Header/>
            <Row></Row>
            <Footer/>
            </Col>
             </Row>
    }

}