import Link from 'next/link'
import React from 'react'

const FooterTitle = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <h1 className="scroll-m-20 text-step-4 font-extrabold tracking-tight  bg-gradient-to-r bg-clip-text py-2 from-green-500 via-purple-500 to-black text-transparent">Empower Your Vision with Nexcent<br />Crafting Digital Excellence for Three Years</h1>
            <button className='bg-primary text-white hover:bg-primary/75 px-10 py-3 rounded-full mt-10'><Link href="/login">Get Started</Link></button>
        </div>
    )
}

export default FooterTitle