import { createContext } from "react";


type ImageLoadingContextType = {
   loading: boolean
};

export const ImageLoadingContext = createContext<ImageLoadingContextType>({
    loading: false,
});
