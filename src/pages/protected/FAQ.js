import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import FAQ from '../../features/FAQ/FAQ'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Frequently Asked Questions"}))
      }, [])


    return(
        <FAQ />
    )
}

export default InternalPage