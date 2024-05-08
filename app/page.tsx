import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full max-w-5xl items-center justify-center">
        <div className=" gap-36 bottom-0 left-0 flex  w-full items-end justify-center ">
          <div className="flex flex-col gap-3 items-center">
            <button>
            <Image
              src="/Folder.png"
              alt="Vercel Logo"
              // className="dark:invert"
              width={67}
              height={24}
              priority
            />
            </button>
            <p>hello</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
          <button>
            <Image
              src="/Folder.png"
              alt="Vercel Logo"
              // className="dark:invert"
              width={67}
              height={24}
              priority
            />
            </button>
            <p>hello</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
          <button>
            <Image
              src="/Folder.png"
              alt="Vercel Logo"
              // className="dark:invert"
              width={67}
              height={24}
              priority
            />
            </button>
            <p>hello</p>
          </div>
        </div>
      </div>
    </main>
  );
}
