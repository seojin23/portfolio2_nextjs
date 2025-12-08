import TeamMemberItem from '@/components/TeamMemberItem'
import Link from 'next/link'

export default function teamPage() {
  const members = [
    {
      name: '손유승',
      github: 'https://github.com/Jannerf',
      portfolio: 'https://sonyouseung-web-origin.vercel.app/',
    },
    {
      name: '고연우',
      github: 'https://github.com/yws3267',
      portfolio: 'https://portfoliov-three.vercel.app/',
    },
    {
      name: '유태강',
      github: 'https://github.com/green14712-byte',
      portfolio: 'https://teakangportfolio.vercel.app/',
    },
    {
      name: '최윤성',
      github: 'https://github.com/ysysys91',
      portfolio: 'https://final-exam-delta-woad.vercel.app/',
    },
    {
      name: '황인성',
      github: 'https://github.com/provelly',
      portfolio: 'https://clerk-app-zeta.vercel.app/',
    },
  ]

  return (
    <div>
      <div className="flex flex-col text-center my-20 gap-4">
        <h1 className="font-extrabold text-4xl mb-6">팀 소개</h1>
        <h2 className="font-bold text-2xl mb-6">
          웹서버보안프로그래밍 팀프로젝트
        </h2>
        <Link href="/" className="font-light text-xs">
          ← 홈으로 이동
        </Link>
      </div>

      <div className="my-12 px-50">
        <ul className="mt-6 mb-12 flex flex-col gap-6">
          {members.map((member, idx) => (
            <TeamMemberItem
              key={`group1-${idx}`}
              name={member.name}
              github={member.github}
              portfolio={member.portfolio}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
