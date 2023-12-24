import PropTypes from 'prop-types'

const Card = ({imgSrc, title}) => {
  return (
    <div className='relative group flex items-center justify-center py-12 px-8 bg-accent hover:bg-primary flex-1 cursor-pointer h-[210px] xs:h-[290px] min-w-fit sm:min-w-[330px] max-w-[448px] rounded-2xl overflow-hidden transition-all ease-in-out duration-700'>
      <img
        src={imgSrc}
        alt=''
        className='transition-all duration-700 backdrop-blur-0 group-hover:scale-105 ease-in-out max-h-[220px]'
      />

      <p
        className='text-textPrimary absolute -top-12 opacity-0 group-hover:top-1 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center w-full px-8 text-base sm:text-lg z-10 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]'
      >
        {title}
      </p>
    </div>
  )
}

export default Card

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string
}