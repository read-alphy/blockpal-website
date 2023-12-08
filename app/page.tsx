import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  mx-auto items-center min-h-screen flex-col justify-between p-10 ">

      <div className="lg:w-[800px]">


        <div className="w-full flex flex-col items-center ">


          <Image src="/blockpal.png" width={350} height={350} alt="Blockpal" />
          <p className="text-zinc-800 text-4xl font-bold">BlockPal - Etherscan AI</p>



        </div>
        <div>
          {/*       <Image src="/etherscan.png" width={150} height={150} alt="Ethereum" /> */}

          <p className="text-zinc-700 text-xl font-normal text-center mt-10">blockpal is an experimental ai assistant for etherscan.

            it is a browser extension. it is not affiliated with etherscan. and it is completley free to use.
            <br></br> <br></br>

            reach out for bugs: <a target="_blank" href="https://twitter.com/0xTahin" className="text-blue-600 underline font-bold">@0xTahin</a>
            <br />
            <br />
            check our other project <a target="_blank" href="https://alphy.app" className="text-indigo-400 font-bold underline">alphy.app</a> to transcribe and summarize Twitter Spaces and YouTube discussions about crypto</p>
        </div>
      </div>

      {/* 
      <div
        className="drop-shadow-lg mt-10 mb-10 "
      >  <a href="" target="_blank">
          <button className="flex flex-row normal-case text-blue-950 font-bold py-1 px-6 rounded-xl  items-center border border-zinc-300  ">
            <Image alt="Chome icon" src="/chrome_icon.png" width={50} height={50} />
            <span className="text-xl pl-2 r ">Install here</span>
          </button>
        </a>
      </div> */}

      <video className="mt-10" width={900} height={600} autoPlay loop >
        <source src="/demo.mp4" type="video/mp4" />
      </video>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/*   <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}
