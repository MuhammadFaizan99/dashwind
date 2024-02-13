import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Cart from '../../features/leads/Cart'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Shopping Cart"}))
      }, [])


    return(
        <Cart />
    )
}

export default InternalPage