import Link from 'next/link'
import { TbExternalLink } from 'react-icons/tb'
import { ImGithub } from 'react-icons/im'

interface ProjectItemProps {
  name: string
  desc: string
  github: string
  vercel?: string
}

export default function ProjectItem({
  name,
  desc,
  github,
  vercel,
}: ProjectItemProps) {
  return (
    <li className="border-1 border-gray-600 p-3 pr-11 rounded-xl hover:shadow-lg flex flex-row items-center justify-between">
      <Link href={github} className="">
        <div>
          <div className="flex flex-row items-center gap-2">
            <h2 className="font-bold text-xl">{name}</h2>
            <ImGithub size={18} />
          </div>

          <p>{desc}</p>
        </div>
      </Link>
      {vercel && (
        <Link href={vercel}>
          <div className="rounded-full p-1 hover:bg-gray-200 flex items-center justify-center">
            <TbExternalLink size={22} />
          </div>
        </Link>
      )}
    </li>
  )
}
