import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-white flex flex-col sm:flex-row justify-between items-center px-3 sm:px-6 py-3 sm:py-4 gap-4 sm:gap-0">
      <div className="flex gap-3 sm:gap-5 items-center">
        <Image
          src='/logo.png'
          alt='Krea logo'
          className="rounded-lg h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"
          width={48}
          height={48}
        />
        <h3 className="text-xl sm:text-3xl font-semibold">
          Krea AI
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
        <p className="font-bold text-lg sm:text-3xl">curated by</p>
        <div className="flex gap-2 items-end">
          <Image
            src='/mobbin-logo.png'
            alt='Mobbin logo'
            className="rounded-lg h-[40px] w-[70px] sm:h-[52px] sm:w-[90px]"
            width={48}
            height={48}
          />
          <h3 className="text-2xl sm:text-4xl font-semibold">
            Mobbin
          </h3>
        </div>
      </div>
    </footer>
  )
}