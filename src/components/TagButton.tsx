

const TagButton=({text}:{text:string})=>{
    return (
      <div className="bg-red-700 max-sm:text-xs dark:bg-red-400 dark:text-gray-800 sm:px-4 sm:py-2 p-2  rounded-full flex items-center justify-center cursor-pointer text-gray-200">
        {text}
      </div>
    );
}
export default TagButton