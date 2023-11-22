import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../../../actions/OrderAction'

function YourOrders() {

    const dispatch = useDispatch()
    const { loading, orders } = useSelector((state)=>state.myOrders)
    // console.log('orders--->>',orders);

    useEffect(()=>{
        dispatch(myOrders())
    },[dispatch])

    const handleOrderID = (id) => {
        // console.log(id);
    }

    return (
        <>
            <h3>Your Orders</h3>
            {
                orders && orders.map((val,key)=>(
                    <div key={key}>
                        {
                            val.orderItems.map((val2,key2)=>(
                                <div role='button' className="row mb-4" key={key2} onClick={()=>handleOrderID(val2?._id)}>
                                    <div className="col-md-12">
                                        <div className='orderCartWishListParentDiv'>
                                            <p>{val2?.name}</p>
                                            <img src={val2?.image} style={{height:"50px"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                      
                    </div>
                ))
            }
        </>
    )
}

export default YourOrders