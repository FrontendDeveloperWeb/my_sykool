import React from 'react'

const PageTitle = ({title ,buttons}) => {
  return (
    <div className='content-header'>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='content-header-child'>
        {buttons}
      </div>
    </div>
  )
}

export default PageTitle
