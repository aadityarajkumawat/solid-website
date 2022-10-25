import { Component, createSignal } from 'solid-js'
import './index.css'
import main from './assets/main.png'

const Footer: Component = () => {
  return (
    <div class='bg-grey fixed py-1 text-center bottom-0 w-screen'>
      <p class='text-sm text-grey1 cursor-pointer'>
        developed by @aadityarajkumawat 🚀
      </p>
    </div>
  )
}

const App: Component = () => {
  const [page, setPage] = createSignal('wtf?')

  return (
    <div class='bg-black'>
      <div class='flex flex-col items-end w-full px-20 py-10'>
        <div
          class={`text-white underline cursor-pointer`}
          onClick={() => setPage(page() === 'jwifi' ? 'wtf?' : 'jwifi')}
        >
          {page() === 'jwifi' ? 'wtf?' : 'jwifi'}
        </div>
      </div>

      {page() === 'jwifi' ? (
        <div class='w-screen flex flex-col items-center'>
          <p class='underline text-2xl mb-2'>jwifi</p>
          <p class='text-lg text-grey1'>no more logging into Wi-Fi</p>

          <div class='w-full relative flex'>
            <img class={`m-auto relative main-anim-in`} src={main} alt='' />
            {/* <div class='relative shade-over-main shade-anim-in'></div> */}
            <div
              class='text-center absolute bg-black w-screen left-0 bottom-0 py-5'
              style={{ top: '55%' }}
            >
              <div
                class='w-1/2 m-auto mb-10 md:w-2/3 lg:w-1/2 2xl:w-1/3'
                style={{ 'min-width': '450px' }}
              >
                <p class='text-lg mb-5 max-sm:text-base'>
                  Logging in college's WiFi every now and then could be annoying
                  at times, especially when you need to type in credentials each
                  time.
                </p>
                <p class='text-lg max-sm:text-base'>
                  So, here is a solution for our university Wi-Fi, a tool that
                  will keep you logged in forever, so don't have to the annoying
                  login anymore.
                </p>
              </div>

              <button class='bg-blue-600 rounded-md py-4 px-24'>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div class='w-full flex flex-col items-center'>
          <div class='w-full text-center px-10 mb-10'>
            <p class='text-2xl'>wtf?</p>
          </div>
          <div class='w-full relative flex flex-col px-5 justify-center lg:flex-row'>
            <img
              class={`relative max-w-md lg:max-w-lg xl:max-w-none`}
              src={main}
              alt=''
            />
            <div class='mt-10 w-full px-5 pb-20 lg:w-1/3'>
              <p class='mb-5 text-md lg:text-lg'>
                I initially developed this as a personal project where I had a
                script running in the background to ensure that the user stays
                logged in, eventually I realized it won't be a bad idea to
                convert this complicated bash script + cron job system into an
                easy to configure tool.
              </p>

              <p class='mb-5 text-md lg:text-lg'>
                This is when I started to think about jwifi, and decided to
                build it for all major platforms (Linux, MacOS and Windows). It
                works as a background job that handles automatic login
                synchronous and non-blocking.
              </p>

              <p class='mb-2 text-md lg:text-lg'>Features:</p>
              <ol class='text-md lg:text-lg'>
                <li>1. Autostart on power on.</li>
                <li>2. Update Credentials.</li>
                <li>
                  3. No login required even on router change, truly eliminates
                  login step, even moving across blocks does not affect.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
