import { Col, Image, Rate, Row } from "antd";
import React from "react";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import imageProduct from "../../assets/images/test.webp";
import imageProductSmail from "../../assets/images/imagesmall.webp";
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct } from "./style";
import { WrapperStyleTextSell } from "../CardCompunent/style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailComponent = () => {
   const  onChange = ()=>{}
  return (
      <Row style={{padding :'16px',backgroundColor:'#fff'}}>
        <Col span={10}>
          <Image src={imageProduct} alt="image product" preview={false} />
          <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmail} alt="image smail" preview={false}
              />
            </WrapperStyleColImage>
          
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: '10px' }}>
                    <WrapperStyleNameProduct>Sach tham tu lung danh conan-Combo 10 tap tu tap 81 den tap 90</WrapperStyleNameProduct>
                    <div>
                        <Rate allowHalf  value={4} />
                        <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
                    </div>
                     <WrapperPriceProduct>
                        <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className='address'>Q. 1,P. Ben Nghe, Ho Chi Minh</span> -
                        <span className='change-address'>Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ marginBottom: '10px' }}>Số lượng</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <WrapperInputNumber onChange={onChange}  defaultValue={1} max={20} min={1}  size="small" />
                             <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                     <div style={{ display: 'flex', aliggItems: 'center', gap: '12px' }}>
                        <div>
                             <ButtonComponent
                                size={40}
                                styleButton={{
                                    background: 'rgb(255, 57, 69)',
                                    height: '48px',
                                    width: '220px',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                                // onClick={handleAddOrderProduct}
                                textButton={'Chọn mua'}
                                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                            {/* {errorLimitOrder && <div style={{color: 'red'}}>San pham het hang</div>} */}
                        </div>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(13, 92, 182)',
                                borderRadius: '4px'
                            }}
                            textButton={'Mua trả sau'}
                            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                        ></ButtonComponent>
                    </div>
                </Col>
      </Row>
  );
};

export default ProductDetailComponent;
