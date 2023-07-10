import React from 'react'
import './formItem.css'

export type FormItemType = {
    children?: React.ReactNode
}

export const FormItem: React.FC<FormItemType> = ({children}) => {
    return (
        <div className="form-item">
            {children}
        </div>
    )
}