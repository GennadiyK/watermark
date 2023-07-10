import {WatermarkPositionType} from '../types'


export const getPosition = (position: WatermarkPositionType) => {
    const positions:{ [key: string]: number[] } = {
        leftTop: [50, 50],
        leftCenter: [50, 100], // need to define center form img size
        leftBottom: [50, 200] // need to define bottom form img size
    }

    return positions[position]
}