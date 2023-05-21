import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Toys-Car | ${title}`
    },[title])
}

export default useTitle;