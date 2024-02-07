import { useEffect, useState } from "react"
import Member from "../Member/Member"

const Team = () => {
  const [isMobile, setIsMobile] = useState(false)

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    updateIsMobile()

    window.addEventListener("resize", updateIsMobile)

    return () => {
      window.removeEventListener("resize", updateIsMobile)
    }
  }, [])

  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <h1 className="bg-purple-700 text-white font-bold rounded-2xl md:w-[350px] w-[200px] h-[50px] md:h-[80px] flex items-center justify-center text-center">
          VeriTech SoftWare service
        </h1>
      </div>

      <div className="mt-12 md:w-[650px] w-[300px] mx-auto">
        <p className="text-center">
          Welcome to VeriTech SoftWare service where a dedicated team of
          professionals works together to bring innovation, creativity and
          expertise to SoftWare industry. get to know the individuals who makes
          our company thrive
        </p>

        {isMobile ? (
          <h6 className="text-center mt-8 text-purple-700 font-bold">
            .........................................................
          </h6>
        ) : (
          <h6 className="text-center mt-8 text-purple-700 font-bold">
            ...............................................................................................................................
          </h6>
        )}
      </div>

      <Member />
    </>
  )
}

export default Team
