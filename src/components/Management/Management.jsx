const Management = () => {
  return (
    <>
      <div className="md:w-[300px] w-[250px] h-[50px] mx-auto flex items-center justify-center bg-purple-700 rounded-2xl mt-4">
        <h1 className="text-white">Leadership / Management Team</h1>
      </div>

      <div className="flex items-center justify-center mt-12 md:gap-36 gap-16">
        <div>
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./1.png"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-center mt-1">John Doe</h1>
          <p className="text-purple-700">Founder/CEO</p>
        </div>

        <div>
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./2.png"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700">Founder/CEO</p>
        </div>
      </div>

      <div className="md:flex md:items-center md:justify-center grid grid-cols-2 mt-12 md:gap-36">
        <div className="flex items-center justify-center flex-col">
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./3.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-center mt-1">John Doe</h1>
          <p className="text-purple-700 w-[100px] md:w-full text-center ">
            Vp, Development & Growth
          </p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./4.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700 text-center w-[100px] md:w-full">
            Vp, Sales & Marketing
          </p>
        </div>

        <div className="flex items-center justify-center flex-col mt-8 md:mt-0">
          <div className="bg-gray-400 w-[100px] h-[100px] rounded-[50%] flex items-center justify-center">
            <img
              src="./5.jpeg"
              alt="avatar"
              className="rounded-[48px] w-[100px] h-[100px]"
            />
          </div>

          <h1 className="text-center mt-1">Jane Doe</h1>
          <p className="text-purple-700 text-center w-[100px] md:w-full">
            Vp, Finance & Operation
          </p>
        </div>
      </div>
    </>
  )
}

export default Management
