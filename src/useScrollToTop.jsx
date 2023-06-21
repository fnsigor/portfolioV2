import React from 'react'
import { useEffect } from 'react'

export const useScrollToTop = () => {

   return function(pathName) {
        useEffect(()=>{
            if(pathName === "/" || pathName === "/projects"){
                window.scrollTo(0, 0)
            }
        },[pathName])
    }

}

