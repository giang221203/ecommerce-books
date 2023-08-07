import logo from '../../assets/images/logo.png'
import {StarFilled} from '@ant-design/icons'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'
// import { Image } from 'antd'
// import { WrapperStyleImageSmall } from '../ProductDetailComponent/style'

const CardCompunent = (props) => {
  const { countInStock, description, image, name, price, rating, type,discount,selled,id} = props
  const navigate = useNavigate()
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`)
}
  return (
    <WrapperCardStyle
    hoverable
    style={{ width: 200 }}
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src={image} />}
    onClick={() =>  handleDetailsProduct(id)}
   disabled={countInStock===0}
  >
    <img src={logo}   style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}/>
    <StyleNameProduct>{name}</StyleNameProduct>
    <WrapperReportText>
        <span style={{marginRight:'4px'}}>
        <span>{rating}</span><StarFilled style={{fontSize:'12px',color:'yellow'}}/>
        </span>
        <WrapperStyleTextSell> | Da ban {selled ||1000}+</WrapperStyleTextSell>
    </WrapperReportText>
    <WrapperPriceText><span style={{ marginRight: '8px' }}>{convertPrice(price)}</span><WrapperDiscountText> - {discount || 5}%</WrapperDiscountText></WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardCompunent