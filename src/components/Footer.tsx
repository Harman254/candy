import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Input } from '../../ @/components/ui/input';

const Footer = () => {
  const linksData = [
    {
      title: 'Company',
      links: ['About us', 'Our Blog', 'Services', 'Pricing', 'Testimonials']
    },
    {
      title: 'Support',
      links: ['Help center', 'Terms of Service', 'Legal', 'Privacy and Policy', 'Status']
    }
  ];
  return (


    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link className="flex" href="/">

              <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238" />
                <path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238" />
                <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F" />
                <path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#4CAF4F" />
                <path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#4CAF4F" />
                <path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F" />
              </svg>

              <svg width="112" height="22" viewBox="0 0 112 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0327 0.668945V21.0326H13.3139L4.45455 8.21582H4.3054V21.0326H0V0.668945H3.77841L12.5682 13.4758H12.7472V0.668945H17.0327Z" fill="#263238" />
                <path d="M27.4705 21.3309C25.8995 21.3309 24.5472 21.0127 23.4137 20.3763C22.2868 19.7333 21.4184 18.8252 20.8086 17.6519C20.1987 16.472 19.8938 15.0766 19.8938 13.4658C19.8938 11.8948 20.1987 10.516 20.8086 9.32946C21.4184 8.1429 22.2769 7.21819 23.3839 6.55531C24.4975 5.89243 25.8034 5.56099 27.3015 5.56099C28.3091 5.56099 29.247 5.7234 30.1154 6.04821C30.9904 6.36639 31.7527 6.84698 32.4023 7.48997C33.0586 8.13296 33.569 8.94167 33.9336 9.9161C34.2982 10.8839 34.4805 12.0174 34.4805 13.3167V14.48H21.5842V11.855H30.4933C30.4933 11.2452 30.3607 10.7049 30.0955 10.2343C29.8304 9.76364 29.4625 9.39574 28.9918 9.13059C28.5278 8.85881 27.9876 8.72292 27.3711 8.72292C26.7281 8.72292 26.158 8.87207 25.6609 9.17037C25.1703 9.46203 24.7859 9.85645 24.5075 10.3536C24.229 10.8441 24.0865 11.391 24.0799 11.9942V14.49C24.0799 15.2457 24.2191 15.8986 24.4975 16.4488C24.7826 16.999 25.1836 17.4232 25.7006 17.7215C26.2177 18.0198 26.8308 18.1689 27.5401 18.1689C28.0108 18.1689 28.4416 18.1027 28.8327 17.9701C29.2238 17.8375 29.5586 17.6386 29.837 17.3735C30.1154 17.1083 30.3275 16.7835 30.4734 16.3991L34.391 16.6576C34.1921 17.5989 33.7844 18.4208 33.168 19.1235C32.5581 19.8195 31.7693 20.3631 30.8015 20.7542C29.8403 21.1386 28.73 21.3309 27.4705 21.3309Z" fill="#263238" />
                <path d="M40.511 5.75985L43.315 11.0993L46.1886 5.75985H50.5337L46.109 13.3962L50.6531 21.0326H46.3278L43.315 15.7528L40.3519 21.0326H35.9769L40.511 13.3962L36.136 5.75985H40.511Z" fill="#263238" />
                <path d="M59.4031 21.3309C57.8387 21.3309 56.493 20.9994 55.3661 20.3366C54.2459 19.6671 53.3841 18.739 52.7809 17.5525C52.1843 16.3659 51.886 15.0004 51.886 13.4559C51.886 11.8915 52.1876 10.5193 52.7908 9.3394C53.4007 8.15285 54.2657 7.22813 55.386 6.56525C56.5063 5.89574 57.8387 5.56099 59.3832 5.56099C60.7156 5.56099 61.8822 5.80294 62.8832 6.28684C63.8841 6.77074 64.6762 7.4502 65.2596 8.3252C65.8429 9.2002 66.1644 10.2277 66.2241 11.4076H62.2269C62.1142 10.6453 61.8159 10.0321 61.332 9.56809C60.8548 9.09745 60.2283 8.86213 59.4528 8.86213C58.7965 8.86213 58.2231 9.0411 57.7326 9.39906C57.2487 9.75038 56.8709 10.2641 56.5991 10.9403C56.3273 11.6164 56.1914 12.435 56.1914 13.3962C56.1914 14.3707 56.324 15.1992 56.5891 15.882C56.8609 16.5648 57.2421 17.0851 57.7326 17.4431C58.2231 17.801 58.7965 17.98 59.4528 17.98C59.9367 17.98 60.3709 17.8806 60.7553 17.6817C61.1464 17.4829 61.4679 17.1945 61.7198 16.8167C61.9783 16.4322 62.1474 15.9715 62.2269 15.4346H66.2241C66.1578 16.6012 65.8396 17.6287 65.2695 18.517C64.7061 19.3986 63.9272 20.088 62.9329 20.5851C61.9386 21.0823 60.762 21.3309 59.4031 21.3309Z" fill="#263238" />
                <path d="M75.8963 21.3309C74.3253 21.3309 72.973 21.0127 71.8395 20.3763C70.7126 19.7333 69.8442 18.8252 69.2344 17.6519C68.6245 16.472 68.3196 15.0766 68.3196 13.4658C68.3196 11.8948 68.6245 10.516 69.2344 9.32946C69.8442 8.1429 70.7026 7.21819 71.8097 6.55531C72.9233 5.89243 74.2292 5.56099 75.7273 5.56099C76.7348 5.56099 77.6728 5.7234 78.5412 6.04821C79.4162 6.36639 80.1785 6.84698 80.8281 7.48997C81.4844 8.13296 81.9948 8.94167 82.3594 9.9161C82.724 10.8839 82.9062 12.0174 82.9062 13.3167V14.48H70.0099V11.855H78.919C78.919 11.2452 78.7865 10.7049 78.5213 10.2343C78.2561 9.76364 77.8883 9.39574 77.4176 9.13059C76.9536 8.85881 76.4134 8.72292 75.7969 8.72292C75.1539 8.72292 74.5838 8.87207 74.0866 9.17037C73.5961 9.46203 73.2116 9.85645 72.9332 10.3536C72.6548 10.8441 72.5123 11.391 72.5057 11.9942V14.49C72.5057 15.2457 72.6449 15.8986 72.9233 16.4488C73.2083 16.999 73.6094 17.4232 74.1264 17.7215C74.6435 18.0198 75.2566 18.1689 75.9659 18.1689C76.4365 18.1689 76.8674 18.1027 77.2585 17.9701C77.6496 17.8375 77.9844 17.6386 78.2628 17.3735C78.5412 17.1083 78.7533 16.7835 78.8991 16.3991L82.8168 16.6576C82.6179 17.5989 82.2102 18.4208 81.5938 19.1235C80.9839 19.8195 80.1951 20.3631 79.2273 20.7542C78.2661 21.1386 77.1558 21.3309 75.8963 21.3309Z" fill="#263238" />
                <path d="M89.9062 12.203V21.0326H85.6704V5.75985H89.7074V8.45446H89.8864C90.2244 7.5662 90.7912 6.86355 91.5866 6.3465C92.3821 5.82283 93.3466 5.56099 94.4801 5.56099C95.5407 5.56099 96.4654 5.793 97.2543 6.25701C98.0431 6.72103 98.6562 7.38391 99.0938 8.24565C99.5312 9.10076 99.75 10.1216 99.75 11.3082V21.0326H95.5142V12.0638C95.5208 11.1292 95.2822 10.4 94.7983 9.87633C94.3144 9.34603 93.6482 9.08088 92.7997 9.08088C92.2296 9.08088 91.7258 9.20351 91.2883 9.44878C90.8575 9.69404 90.5194 10.052 90.2741 10.5226C90.0355 10.9867 89.9129 11.5468 89.9062 12.203Z" fill="#263238" />
                <path d="M111.212 5.75985V8.94167H102.015V5.75985H111.212ZM104.103 2.10076H108.338V16.3394C108.338 16.7305 108.398 17.0354 108.517 17.2542C108.637 17.4663 108.802 17.6154 109.015 17.7016C109.233 17.7878 109.485 17.8309 109.77 17.8309C109.969 17.8309 110.168 17.8143 110.367 17.7812C110.566 17.7414 110.718 17.7116 110.824 17.6917L111.49 20.8437C111.278 20.91 110.98 20.9862 110.596 21.0724C110.211 21.1652 109.744 21.2215 109.194 21.2414C108.173 21.2812 107.278 21.1453 106.509 20.8337C105.747 20.5222 105.153 20.0383 104.729 19.382C104.305 18.7258 104.096 17.8972 104.103 16.8962V2.10076Z" fill="#263238" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-muted-foreground">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Nexcent</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-muted-foreground uppercase">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://github.com/harman254/candy" className="hover:underline ">Github</Link>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-muted-foreground uppercase">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col space-y-5'><h2 className='text-muted-foreground'>Stay up to date</h2>
              <Input placeholder='Enter your email' /></div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Nexcent™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default Footer






{/* <footer classNameName='h-[628px] '>
<div classNameName='h-[300px] flex flex-col justify-center items-center'>
  <h1 classNameName="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r bg-clip-text py-2 from-green-500 via-purple-500 to-black text-transparent">Empower Your Vision with Nexcent<br />Crafting Digital Excellence for Three Years</h1>
  <button classNameName='bg-primary text-white hover:bg-primary/75 px-10 py-3 rounded-full mt-10'>Get Started</button>
</div>
<div classNameName='h-[328px] px-20 space-x-8 bg-black/75 flex justify-center items-center'>
  <div classNameName='h-[189px] w-[350px] flex flex-col space-y-8'>
    
    <p classNameName='text-sm text-gray-400'>Copyright @2023 Nexcent ltd.</p>
    <p classNameName='text-sm text-gray-400'>All rights Reserved</p>
    <div classNameName='flex text-white justify-between h-[32px] w-[178px]'>
      <Link href="#"><Facebook /></Link>
      <Link href="#"><Twitter /></Link>
      <Link href="#"><Instagram /></Link>



    </div>
  </div>
  <div classNameName='h-[200px] w-[635px] flex'>
    {linksData.map((section, index) => (
      <div key={index} classNameName='w-[160px] flex-col'>
        <h1 classNameName='font-bold text-white'>{section.title}</h1>
        {section.links.map((link, index) => (
          <Link key={index} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}><p classNameName='text-gray-400' >{link}</p></Link>
        ))}
      </div>
    ))}
  </div>
  <div classNameName='h-[92px] w-[300px]  font-bold  mt-[-80px] space-y-5 flex flex-col'>
    <h2 classNameName='text-'>Stay up to date</h2>
    <Input placeholder='Enter your email' />
  </div>
</div>
</footer> */}