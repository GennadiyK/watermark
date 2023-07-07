import {createContext} from 'react'

type WatermarkContextType = {
    uri?: string
    watermarkText?: string
    textSettings?: {
        size?: string
        color?: string
    }
}

export const WatermarkContext = createContext<WatermarkContextType>({})