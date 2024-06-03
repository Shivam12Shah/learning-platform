import React from 'react'
import { useParams } from 'react-router-dom'

const Updatecourse = () => {
    const _id = useParams()
    console.log(_id);
  return (
    <div>Updatecourse</div>
  )
}

export default Updatecourse