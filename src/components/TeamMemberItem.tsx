import { ImGithub } from 'react-icons/im'
import { TiDocumentText } from 'react-icons/ti'

interface TeamMemberItemProps {
  name: string
  github: string
  portfolio: string
}

export default function TeamMemberItem({
  name,
  github,
  portfolio,
}: TeamMemberItemProps) {
  return (
    <li className="border-1 border-gray-600 p-5 px-9 rounded-xl hover:shadow-lg flex flex-row items-center justify-between">
      <h2 className="font-bold text-xl">{name}</h2>
      <div className="flex flex-row gap-3">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="rounded-full p-1 hover:bg-gray-200 flex items-center justify-center">
            <ImGithub size={24} />
          </div>
        </a>
        <a href={portfolio} target="_blank" rel="noopener noreferrer">
          <div className="rounded-full p-1 hover:bg-gray-200 flex items-center justify-center">
            <TiDocumentText size={24} />
          </div>
        </a>
      </div>
    </li>
  )
}
