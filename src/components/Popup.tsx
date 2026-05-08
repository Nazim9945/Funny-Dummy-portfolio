
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  close: (val: boolean) => void;

 
 
  img: string;
  title: string;
}


const Popup=({close,title,img}:Props)=>{
    

return (
  <>
    <div className="absolute inset-0  bg-black/90 z-100 flex items-center justify-center  w-full">
      <div className="border fixed top-30 left-1/2 -translate-x-1/2 h-fit w-150  gap-2 bg-white/90 z-200 rounded-md shadow shadow-pink-600 p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-black  capitalize">
            <p className="font-bold text-xl">{title}</p>
          </div>
          <button
            onClick={() => {
                close(false);
                
            }}
            className="text-2xl font-medium text-black cursor-pointer active:scale-95"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <img
          className="w-full h-full object-fit rounded-md"
          src={img}
          alt={title}
        />
      </div>
    </div>
    )
  </>
);

}
export default Popup