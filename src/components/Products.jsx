
// import React, {useState, useEffect} from 'react'
// import './App.css';
// //import { json } from 'react-router-dom';

// const Products = () => {

//     const [fake, setFake] =useState([])
//     console.log(fake)
//     useEffect(() => {
        
//         fakeStore();
//     }, [])

//     const fakeStore = async()=> {
//         const response = await fetch("https://fakestoreapi.com/products");
//         //console.log(response)
//         const jsonData =await response.json()
//         //console.log(jsonData);
//         setFake(jsonData);
//     }
//     //fakeStore();
//     //https://fakestoreapi.com/products
//   return (
//     <>
//     <div className='container'>
//         {fake.map((values)=> {
//             return(
//                 <>
//                 <div className='box'>
//                     <div className="content">
//                     <h5>{values.title}</h5>
//                     <p>{values.description}</p>
//                     </div>
//                     <img src={values.image}/>
//                       <h5>{values.price}</h5>
//                 </div>    
                
//                 </>
//             )
//         })}
//         {/* <div className='box'>
//         <div className="content">
//             <h5>Title</h5>
//             <p>Description</p>
//         </div>
//         <h1>Image</h1>
//         </div> */}
        
        
//         </div>
//         </>
//   )
// }

// export default Products







// // import React, {useState, useEffect} from 'react'

// // const Products = () => {
// //     const [data, setData] = useState([]);
// //     const [filter, setFilter] = useState(data);
// //     const [loading, setLoading] = useState(false);

// //     let componentMounted = true;


// //     useEffect(() => {

// //         const getProducts = async () => {
// //             setLoading(true);
// //             const response = await fetch("https://fakestoreapi.com/products");
// //             if (componentMounted) {
// //                 setData(await response.clone().json())
// //                 setFilter(await response.json());
// //                 setLoading(false);
// //                 console.log(filter)
// //             }

// //             return () => {
// //                 componentMounted = false;
// //             }
// //         }
// //         getProducts()
// //     }, []);


// //     const Loading = () => {
// //         return(
// //             <>
// //             Loading...
// //             </>
// //         )
// //     }

// //     const ShowProducts = () => {
// //        return(
// //         <>
// //          <div className='buttons d-flex justify-content center mb-5 pb-5'>
// //             <button className='btn btn-outline-dark me-2'>All</button>
// //             <button className='btn btn-outline-dark me-2'>Mens Clothing</button>
// //             <button className='btn btn-outline-dark me-2'>Womens Clothing</button>
// //             <button className='btn btn-outline-dark me-2'>Jewelry</button>
// //             <button className='btn btn-outline-dark me-2'>Electronics</button>
// //         </div>
// //         {filter.map((product) => {

// //             return(
// //                 <>
// //                 <div className='col-md-3'>
// //                 {filter.map((product) => {
            
// //             <>
// //             <div class="card h-100 text-center p-4" key={product.id}style="width: 18rem;">
// //             <img src={product.image} class="card-img-top" alt="{product.title}" />
// //             <div class="card-body">
// //                 <h5 class="card-title">{product.title}</h5>
// //                 <p class="card-text">${product.price}</p>
// //                 <a href="#" class="btn btn-primary">Go somewhere</a>
// //             </div>
// //             </div>
            
// //             </>
// //         })}


// //                 </div>
// //                 </>
// //             )

// //         })}
// //         </>
// //        )

// //     }

// //   return (
// //     <div>
// //         <div className='container'>
// //             <div className='row'>
// //                 <div className='col-12 mb-5'>
// //                     <h1 className='display-6 fw-bolder' text-center>
                        
// //                         Latest Products</h1>
// //                         <hr/>
// //                 </div>
// //             </div>

// //             <div className='"row-justify-content-center'>
// //                 {loading ? <Loading/> : <ShowProducts/>}
// //             </div>
// //         </div>


// //     </div>
// //   )
// // }

// // export default Products




// ////////////////////// alternative approach
