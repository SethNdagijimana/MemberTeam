const Marketing = () => {
  return (
    <>
      <h1 className="bg-purple-500 w-[50px] float-right">
        <span className=" text-purple-500">1</span>
      </h1>

      <div className="w-[250px] h-[50px] mx-auto flex items-center justify-center bg-purple-700 rounded-2xl mt-12">
        <h1 className="text-white">Sales And Marketing Team</h1>
      </div>

      <div className="md:flex md:items-center md:justify-center grid grid-cols-2 mt-12 md:gap-36">
        <div>
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./5.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-left md:text-center mt-1">John Doe</h1>
          <p className="text-purple-700 text-left md:text-center">Team Lead</p>
        </div>

        <div>
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./4.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-left md:text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700 text-left md:text-center">
            Sales Officer
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./3.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-left md:text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700 text-left md:text-center">
            Sales Officer
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./2.png"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-left md:text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700 text-left md:text-center">
            Sales Officer
          </p>
        </div>
      </div>
    </>
  )
}

export default Marketing
