import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  mx-auto items-center min-h-screen flex-col justify-between p-10 ">

      <div className="lg:w-[800px]">
        <div className="w-full flex flex-col items-center ">
          <Image src="/blockpal.png" width={250} height={350} alt="Blockpal" />
          <p className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center">BlockPal - Etherscan AI</p>
          <a href="https://chromewebstore.google.com/detail/blockpal/bdjjngcmmldpnnlmmecinbokopclkjhd" target="_blank">
            <button className="flex flex-row items-center text-zinc-800 gap-6 text-xl font-bold border border-zinc-800 drop-shadow-lg rounded-xl px-4 py-2 mt-4 bg-white">
              <Image src="/chrome_icon.png" width={50} height={50} alt="Etherscan" />
              <p>Add to your browser</p>
            </button>
          </a>
        </div>
        <div>
          <p className="text-zinc-700 text-xl font-normal text-center mt-10">blockpal is an experimental ai assistant for etherscan.
            it is a browser extension. it is not affiliated with etherscan. and it is completley free to use.
            <br></br> <br></br>
            reach out for bugs: <a target="_blank" href="https://twitter.com/0xTahin" className="text-blue-600 underline font-bold">@0xTahin</a>
            <br />
            <br />
            check our other project <a target="_blank" href="https://alphy.app" className="text-indigo-400 font-bold underline">alphy.app</a> to transcribe and summarize Twitter Spaces and YouTube discussions about crypto</p>
        </div>
      </div>
      <video className="mt-10 drop-shadow-xl rounded-xl" width={900} height={600} autoPlay={true} loop={true} muted={true}>
        <source src="/demo.mp4" type="video/mp4" />
      </video>



    </main>
  )
}
