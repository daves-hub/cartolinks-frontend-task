import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-white flex justify-between items-center px-6 py-4">
      <div className="flex gap-5 items-center">
        <Image
          src='/logo.png'
          alt='Krea logo'
          className="rounded-lg h-[50px] w-[50px]"
          width={48}
          height={48}
        />
        <h3 className="text-3xl font-semibold">
          Krea AI
        </h3>
      </div>
      <div className="flex gap-6 items-end">
        <p className="font-bold text-3xl">curated by</p>
        <div className="flex gap-2 items-end">
          <Image
            src='/mobbin-logo.png'
            alt='Mobbin logo'
            className="rounded-lg h-[52px] w-[90px]"
            width={48}
            height={48}
          />
          <h3 className="text-4xl font-semibold">
            Mobbin
          </h3>
        </div>
      </div>
    </footer>
  )
}