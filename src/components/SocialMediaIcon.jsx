import PropTypes from 'prop-types'
// mui
import {Tooltip} from '@mui/material'

const SocialMediaIcon = ({imgSrc, title, to}) => {
  return (
    <Tooltip title={title} placement='bottom' arrow>
      <a 
        href={to} 
        target='_blank' 
        rel='noreferrer' 
        className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer hover:bg-secondary transition-all ease-linear duration-300">
        <img src={imgSrc} className='bg-transparent' alt='' />
      </a>
    </Tooltip>
  )
}

export default SocialMediaIcon

SocialMediaIcon.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string
}