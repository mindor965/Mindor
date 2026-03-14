import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsappIcon = () => {
  return (
    <Link target='_blank' href={"https://wa.me/918928210967?text=Hi%20Mindor.Tech%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20connect%20on%20a%20call%3F"} className=' fixed bottom-4 right-4 rounded-full p-1'>
        <BsWhatsapp className='text-green-500 w-8 h-8' />
    </Link>
  )
}

export default WhatsappIcon