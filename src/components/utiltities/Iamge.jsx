import React from 'react'

const Iamge = ({className, source, alt}) => {
  return (
    <>
    <img className={className} src={source} alt={alt} />
    </>
  )
}

export default Iamge