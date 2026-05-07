import { useContext, useEffect } from "react";
import { Context } from "../store/ContextApi";
import { useInView } from "react-intersection-observer";

const useInview=(tag:string,threshold:number)=>{
    const props = useContext(Context);
    const { ref, inView } = useInView({
       threshold,
    });

    useEffect(() => {
      if (inView) {
        props?.setTag(tag);
      }
    }, [inView, props?.setTag]);
    return {ref}
}
export default useInview