import React, { } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardCompunent from '../../components/CardCompunent/CardCompunent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'
const TypeProductPage = () => {
    const onChange = ()=>{}
  return (
    <div style={{width: '100%', background: '#efefef'}}>
        <div style={{ width: '1270px', margin: '0 auto', height: '100%' }}>
        <Row style={{flexWrap:'nowrap',paddingTop:'10px'}}>
            <WrapperNavbar span={4}>
            <NavbarComponent/>
            </WrapperNavbar>
          <Col  span={20}>
          <WrapperProducts> 
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            <CardCompunent/>
            </WrapperProducts>
            <Pagination  defaultCurrent={2} total={100} onChange={onChange}  style={{textAlign:'center',marginTop:'10px'}}/>
          </Col>
       
        </Row>
        

        </div>
    </div>
  )
}

export default TypeProductPage