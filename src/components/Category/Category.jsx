import React from 'react'
import { STATUS } from '../../utils/status'
import './Category.scss'
import { Link } from 'react-router-dom'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
const Category = ({categories,status}) => {
  if(status===STATUS.Error)return(<Error/>)
  if(status===STATUS.LOADING)return(<Loader/>)
  return (
    <section className='categories py-6 bg-ghost-white' id='categories'>
      <div className="container">
        <div className="categories-content">
          <div className="section-title">
            <h3 className="text-uppercase mid fw-7 text-regal-blue ls-1">
              Category
            </h3>
            <div className="category-items grid">
              {
                categories.slice(0,5).map(category=>(
                  <Link to={`/categories/${category.id}`} key={category.id}>
                  <div className="category-item">
                    <div className="category-item-img">
                      <img src={category.image} alt={category.name}/>
                    </div>
                    <div className="category-item-name text-center">
                      <h6 className='fs-20'>{category.name}</h6>

                    </div>
                  </div>
                  </Link>
                ))
              
              }

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Category