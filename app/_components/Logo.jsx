import Image from "next/image"

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
      src={"/logo.png"}
      alt = 'logo'
      width={50}
      height={50}
      />
      <h2 className="font-bold text-xl">Collabify</h2>
    </div>
  )
}

export default Logo
