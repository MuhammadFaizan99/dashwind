import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductsPayment from '../../features/leads/ProductsPayment'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Payment"}))
      }, [])


    return(
        <ProductsPayment />
    )
}

export default InternalPage