import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
    const apiUrl = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])
    const {id} = useParams()
    useEffect(() => {
        // products
        fetch(`${apiUrl}/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))     
            // console.log(data);     
    }, [])
  return (
         <div className="container vh-100 d-flex align-items-center">
            {product? <div className="row bg-light ">
                <div className="col-md-3 bg-light">
                         <div key={product.title} className='item p-3'>
                                <img src={product.image} className='w-100' alt={product.category} />
                            </div>
        
                </div>
                <div className="col-md-9 px-3 bg-light d-flex align-items-center">
                    <div >
                        <h3>{product.title}</h3>

                        <p className='text-muted'>{product.description}</p>

                        {/* <span className='text-main font-sm fw-ligther'>{product.category.slug}</span> */}

                        <div className=' w-100 mt-3  d-flex justify-content-between'>
                            <span className='font-sm'> {product.price} $</span>
                            <span className='font-sm'>
                                {product.rating?.rate}
                                <i className='fa-solid ms-1 fa-star rating-color'></i>
                            </span>
                        </div>
                        {/* <div className='d-flex  justify-content-between  align-items-center mt-2 '>
                            <button onClick={() => add(product._id)} className='btn text-white bg-main w-75  btn-sm'>Add to cart</button>
                            <i id={product._id} onClick={() => checkWishList(product._id)} className='fa-solid ms-1 fa-heart fa-xl cursor-pointer'></i>

                        </div> */}

                    </div>
                </div>
            </div> : ""}
    </div>
  )
}
