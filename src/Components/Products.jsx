import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    const apiUrl = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])


    useEffect(() => {
        // products
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setProducts(data))
        // categories
        fetch(`${apiUrl}/categories`)
            .then(res => res.json())
            .then(data => setCategory(data))            
    }, [])
            // get a specific category
function getCategory(categoryName){
    fetch(`${apiUrl}/category/${categoryName}`)
    .then(res => res.json())
    .then(data => setProducts(data))    
}
    return (
        <>
            <div className="container">
                {category?.map((e) => {
                    return <button key={e} className='btn btn-success' onClick={()=>getCategory(e)}>{e}</button>
                })}
                {/* products */}
                <div className="row g-3">
                    {products?.map((e) => {
                        return <div key={e.id} className="col-md-3  d-flex align-items-center " >
                            <div  className='p-4 w-100 h-100' style={{ border: '2px solid #f1f1f1' }}>
                                <img src={e.image} className='w-100 height-img mb-2' alt={e.title} />
                                <p className='mb-0'>{e.title}</p>
                                <p className='text-muted mb-0'>{e.price}$</p>
                      
                          <Link to={`/productDetails/${e.id}`}>
                            <button className='btn-danger btn'>Details</button>
                          </Link>
                           {/* </button> */}
                            </div></div>
                    })}

                </div>
            </div>
        </>
    )
}
