import React, { useEffect } from 'react'
import '../Home/HomePage.scss'
import Slider from '../../components/Slider/Slider'
import ProductList from '../../components/ProductList/ProductList'
import Category from '../../components/Category/Category'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCategories,fetchProductsByCategory } from '../../Store/categorySlice'
import SingleCategory from '../../components/SingleCategory/SingleCategory'
const HomePage = () => {
  const dispatch=useDispatch();
  const{data:categories,status:categoryStatus}=useSelector((state)=>state.category)
  const {catProductAll:productsByCategory,catProductAllStatus}=useSelector((state)=>state.category)

  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1,'all'));
    dispatch(fetchProductsByCategory(2,'all'));
  },[])
  return (
    <div className='home-page'>
     
      <Slider/>
      <Category categories={categories} status={categoryStatus}/>
      {
        <section>
          {
            productsByCategory[0]&&<SingleCategory products={productsByCategory[0]} 
            status={catProductAllStatus}/>
          }
        </section>
      }
{/* category two */}
{
        <section>
          {
            productsByCategory[1]&&<SingleCategory products={productsByCategory[1]} 
            status={catProductAllStatus}/>
          }
        </section>
      }
    </div>
  )
}

export default HomePage