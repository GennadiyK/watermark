import React, {useContext, ReactNode} from 'react'
import {ImageLoadingContext} from '../../context'
import './loader.css'

export type LoaderProps = {
    children?: ReactNode
}


export const Loader: React.FC<LoaderProps> = ({children}) => {
    const {loading} = useContext(ImageLoadingContext)

    return loading ? <><div className="loader" role="status" aria-label='Loading'><div></div><div></div><div></div><div></div></div>{children}</> : children
}