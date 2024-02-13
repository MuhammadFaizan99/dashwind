import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProductsConfirmation from '../../features/leads/ProductsConfirmation'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Product Confirmation"}))
      }, [])


    return(
        <ProductsConfirmation />
    )
}

export default InternalPage