

const TagButton=({text}:{text:string})=>{
    return (
      <div className="bg-red-700 dark:bg-red-400 dark:text-gray-800 px-4 py-2  rounded-full flex items-center justify-center cursor-pointer text-gray-200">
        {text}
      </div>
    );
}
export default TagButton