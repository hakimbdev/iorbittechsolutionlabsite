import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative">
        {/* Logo Image */}
        <Image
          src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png"
          alt="IORBIT TECH SOLUTIONS LAB Logo"
          width={50}
          height={50}
          className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />
      </div>

      {/* Company name */}
      <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-300 sm:block md:text-base lg:text-lg">
        IORBIT TECH SOLUTIONS LAB
      </span>
    </Link>
  )
}