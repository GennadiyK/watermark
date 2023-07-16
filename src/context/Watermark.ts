import { createContext } from "react";
import {WatermarkTextFont} from '../types'


type WatermarkContextType = {
  fonts: WatermarkTextFont[];
};

export const WatermarkContext = createContext<WatermarkContextType>({
  fonts: [],
});
