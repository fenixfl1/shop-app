import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToShoppingCart,
  getProducts,
  setModalStateForProductDetail,
  setProductDetails,
} from '../actions/products'
import {
  CustomCol,
  CustomModal,
  CustomRow,
  CustomSpace,
  ProductCard,
  RoutesWrapper,
} from '../components'
import { StoreState } from '../reducers'
import { Button, Carousel, Image, Menu, notification, Skeleton } from 'antd'
import { ProductsType } from '../reducers/products'
import { Link } from 'react-router-dom'
import { DollarTwoTone, ShoppingCartOutlined } from '@ant-design/icons'

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
  const {
    fetchingProducts,
    products,
    modalStateForProductDetail,
    productDetail,
  } = useSelector((state: StoreState) => state.products)
  const { categories } = useSelector((state: StoreState) => state.categories)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    !modalStateForProductDetail && dispatch(setProductDetails({}))
  }, [modalStateForProductDetail])

  const handleModalState = () => {
    dispatch(setModalStateForProductDetail(!modalStateForProductDetail))
  }

  const handleSetProductDetail = (product: ProductsType) => {
    dispatch(setProductDetails(product))
  }

  const handleAddToCart = () => {
    handleModalState()
    dispatch(
      addToShoppingCart({
        ...productDetail,
        count: 1,
      })
    )
    notification.success({
      icon: (
        <ShoppingCartOutlined style={{ fontSize: '16px', color: '#52c41a' }} />
      ),
      message: 'Success',
      description: 'Product added successfully',
    })
  }

  const modalFooter = (
    <CustomRow justify={'end'}>
      <CustomSpace>
        <Button
          icon={<ShoppingCartOutlined style={{ fontSize: '16px' }} />}
          onClick={handleAddToCart}
          shape={'round'}
          type={'default'}
        >
          Add to cart
        </Button>
        <Button
          icon={<DollarTwoTone style={{ fontSize: '16px' }} />}
          onClick={handleAddToCart}
          shape={'round'}
          type={'primary'}
        >
          Checkout
        </Button>
      </CustomSpace>
    </CustomRow>
  )

  return (
    <>
      <RoutesWrapper>
        <CustomRow justify={'space-between'}>
          <CustomCol xs={24} style={{ marginTop: '25px' }}>
            <CustomRow justify={'center'}>
              <Menu
                defaultSelectedKeys={['1']}
                mode={'horizontal'}
                style={{
                  background: 'transparent',
                  width: '55%',
                }}
              >
                {categories?.map((category: any, index: number) => (
                  <Menu.Item style={{ margin: 'auto' }} key={index}>
                    {category?.name}
                  </Menu.Item>
                ))}
              </Menu>
            </CustomRow>
          </CustomCol>
          <CustomCol xs={24}>
            <Carousel autoplay>
              {products
                ?.filter((item) => item?.discount && item.discount > 0.0)
                ?.map((item, index) => (
                  <div className={'img-carousel-container'}>
                    <img key={index} src={item?.image} alt={item?.name} />
                    <Link
                      to={`#/detail/${item?.name}`}
                      onClick={() => {
                        handleSetProductDetail(item)
                        handleModalState()
                      }}
                    >
                      <h2>{item?.name}</h2>
                    </Link>
                    <span>{`%${item.discount} off`}</span>
                  </div>
                ))}
            </Carousel>
          </CustomCol>

          <CustomCol xs={24}>
            <Skeleton loading={fetchingProducts} active>
              <CustomRow justify={'space-between'}>
                {products
                  ?.filter(
                    (item) => item.status === true && (item.discount || 0) < 1.0
                  )
                  ?.map((item) => (
                    <ProductCard
                      onSelect={handleSetProductDetail}
                      product={item}
                    />
                  ))}
              </CustomRow>
            </Skeleton>
          </CustomCol>
        </CustomRow>
      </RoutesWrapper>

      <CustomModal
        footer={modalFooter}
        onCancel={handleModalState}
        visible={modalStateForProductDetail}
      >
        <CustomRow justify={'center'} style={{ height: '500px' }}>
          <CustomCol xs={24}>
            <Image
              alt={productDetail?.name}
              src={productDetail?.image}
              width={'100%'}
            />
          </CustomCol>
          <CustomCol xs={24}>
            <CustomRow justify={'start'}>
              <h2 style={{ width: '100%' }}>{productDetail?.name}</h2>
              <span style={{ width: '100%', textAlign: 'start' }}>
                <strong>
                  USD $
                  {String(productDetail?.price).replace(
                    /\B(?=(\d{3})+(?!\d)\.?)/g,
                    ','
                  )}
                </strong>
              </span>
              <span style={{ fontSize: 14 }}>{productDetail?.description}</span>
            </CustomRow>
          </CustomCol>
        </CustomRow>
      </CustomModal>
    </>
  )
}

export default Home
