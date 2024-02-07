import React from "react"
import Developer from "../Developer/Developer"
import Management from "../Management/Management"
import Marketing from "../Marketing/Marketing"

const Member = () => {
  return (
    <>
      <div className="mt-12">
        <h1 className="text-center text-2xl font-bold">Meet Our Team</h1>
      </div>

      <Management />

      <h1 className="bg-purple-500 w-[50px] float-left mt-8 md:mt-0">
        <span className=" text-purple-500">1</span>
      </h1>

      <Developer />

      <Marketing />
    </>
  )
}

export default Member
