import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="w-24">
          <Image src="/logo.png" alt="The Curve Logo" width={100} height={40} className="h-auto" />
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 relative">
        <div className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full w-fit mx-auto mb-8">
          No fuss, no fluff
        </div>
        <div className="absolute left-[8%] top-24 hidden md:block">
          <div className="bg-gray-100 p-0 rounded-lg flex items-center justify-center animate-float">
            <Image src="/icons/triangle.png" alt="Triangle icon" width={26} height={26} />
          </div>
        </div>

        <div className="absolute left-[16%] top-44 hidden md:block">
          <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center animate-float-reverse">
            <Image src="/icons/atom.png" alt="Arrow icon" width={48} height={48} />
          </div>
        </div>

        <div className="absolute right-[15%] top-24 hidden md:block">
          <div className="bg-blue-100 p-2 rounded-lg flex items-center justify-center animate-float-slow">
            <Image src="/icons/figma.png" alt="Atom icon" width={44} height={44} />
          </div>
        </div>

        <div className="absolute left-[8%] bottom-38 hidden md:block">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center animate-float-fast">
            <Image src="/icons/sql.png" alt="Code icon" width={32} height={32} />
          </div>
        </div>
        <div className="absolute left-[18%] bottom-36 hidden md:block">
          <div className="bg-[#C2DDC6] p-1 rounded-lg flex items-center justify-center animate-float-fast">
            <Image src="/icons/git-vscode.png" alt="Code icon" width={28} height={28} />
          </div>
        </div>

        <div className="absolute right-[10%] bottom-36 hidden md:block">
          <div className="bg-[#EEF0F2] p-1 rounded-lg flex items-center justify-center animate-float-reverse">
            <Image src="/icons/command-line.png" alt="Shield icon" width={32} height={32} />
          </div>
        </div>
        <div className="absolute right-[24%] bottom-10 hidden md:block">
          <div className="bg-[#FBDED8] p-1 rounded-lg flex items-center justify-center animate-float-reverse">
            <Image src="/icons/xd.png" alt="Adobe XD icon" width={40} height={40} />
          </div>
        </div>

        <div className="absolute right-[20%] bottom-32 hidden md:block">
          <div className="bg-[#FFDCCC] p-2 rounded-lg flex items-center justify-center animate-float-delay">
            <Image src="/icons/gold-diamond.png" alt="Diamond icon" width={40} height={40} />
          </div>
        </div>

        <div className="absolute right-[14%] top-48 hidden md:block">
          <div className="bg-[#FAE8E8] p-2 rounded-lg flex items-center justify-center animate-float-reverse">
            <Image src="/icons/html.png" alt="Design icon" width={40} height={40} />
          </div>
        </div>

        <div className="absolute left-[14%] bottom-14 hidden md:block">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center animate-float-slow">
            <Image src="/icons/two-triangles.png" alt="Cube icon" width={32} height={32} />
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center z-10 relative">
          {/* <h1 className="text-5xl font-serif font-medium mb-4">Tech Skills Made Simple for Everyone.</h1> */}
          <h1 className="text-5xl font-serif-custom font-medium mb-4 home-heading">
            Tech Skills Made Simple for Everyone.
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're starting from scratch or picking it back up, we make software engineering and design feel
            doable.
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-[#FB8500] hover:bg-orange-600 text-white px-8 py-2 rounded">
            <Link href="/login">Log In</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#FB8500] text-[#FB8500] hover:bg-orange-50 px-8 py-2 rounded"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto p-4 flex justify-between items-center">
        <div className="w-16">
          <Image src="/logo-small.png" alt="The Curve Logo" width={60} height={30} className="h-auto" />
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

