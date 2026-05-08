

const Blurred = () => {
  return (
    <>
      <div className="bg-blue-700 absolute h-10 w-20 sm:h-50 sm:w-120 rounded-full rotate-45   sm:top-50 top-10 blur-[7rem] sm:right-100 right-20 border -z-10 dark:bg-blue-50"></div>
      <div className="bg-gray-primary h-10 w-20 absolute sm:h-124 sm:w-124 rounded-full sm:-top-20 -top-10 left:10 sm:left-20 blur-[10rem] -z-10 dark:bg-[#946263]"></div>
      <div className="bg-blue-primary absolute sm:h-130 sm:w-124 rounded-full sm:-top-10 -top-6 right-10 sm:right-20 blur-[10rem] h-10 w-20 -z-10 dark:bg-[#676394]"></div>
    </>
  );
}

export default Blurred