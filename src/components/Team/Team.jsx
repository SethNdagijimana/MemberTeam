import Member from "../Member/Member"

const Team = () => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <h1 className="bg-purple-700 text-white font-bold rounded-2xl w-[350px] h-[80px] flex items-center justify-center">
          VeriTech SoftWare service
        </h1>
      </div>

      <div className="mt-12 w-[650px] mx-auto">
        <p className="text-center">
          Welcome to VeriTech SoftWare service where a dedicated team of
          professionals works together to bring innovation, creativity and
          expertise to SoftWare industry. get to know the individuals who makes
          our company thrive
        </p>

        <h6 className="text-center mt-8 text-purple-700 font-bold">
          ..........................................................................................................
        </h6>
      </div>

      <Member />
    </>
  )
}

export default Team
