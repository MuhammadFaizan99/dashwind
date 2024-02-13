import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Term from '../../features/TermCondition'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Terms and Condition"}))
      }, [])


    return(
        <Term />
    )
}

export default InternalPage