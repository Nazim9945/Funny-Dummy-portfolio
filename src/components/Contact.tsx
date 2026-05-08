import useInview from "../hooks/useInview";


const Contact = () => {
    const {ref}=useInview("Contact",0.5)
  return (
    <div ref={ref} id="contact" className="w-120 mx-auto flex flex-col items-center  mb-10 gap-2 scroll-mt-20">
      <div className="flex items-center flex-col mb-5 gap-2">
        <div className="text-2xl font-semibold">Contact</div>
        <p className="text-gray-700 text-sm dark:text-gray-100">
          Please contact me directly at{" "}
          <a className="underline text-black dark:text-white/90">example@gmail.com</a> or through
          this form.
        </p>
      </div>
      <input
        placeholder="Your Email"
        className="w-full flex outline-none border border-gray-400 bg-white py-2 px-4 rounded-md dark:border-gray-500 dark:bg-black/90"
      />
      <textarea
        className=" w-full flex outline-none border border-gray-400 bg-white py-2 px-4 rounded-md dark:border-gray-600 dark:bg-black/90"
        rows={10}
        name=""
        id=""
        placeholder="Write a message"
      ></textarea>
      <button className="w-full py-2 px-4 rounded-md text-white bg-black shadow shadow-black/20 active:scale-95 hover:text-gray-200 cursor-pointer dark:text-black dark:bg-white/90 dark:hover:text-gray-800 dark:shadow-white/40">
        Submit
      </button>
    </div>
  );
}

export default Contact