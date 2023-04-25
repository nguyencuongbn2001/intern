export default function Loading() {
  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col h-screen">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-gray-400 border-8 h-16 w-16"></div>
        <div className="flex">
          <span className="text-xl font-fontcuong font-medium mt-2">Loading</span>
          <div className="bg-blue-600  w-2 h-2 rounded-full mt-6 ml-1 animate-bounce blue-circle"></div>
          <div className="bg-green-600  w-2 h-2 rounded-full mt-6 ml-1 animate-bounce green-circle"></div>
          <div className="bg-red-600  w-2 h-2 rounded-full mt-6 ml-1 animate-bounce red-circle"></div>
        </div>
      </div>
    </>
  );
}
