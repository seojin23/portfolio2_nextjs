import Link from 'next/link'
import { ImGithub } from 'react-icons/im'
import { MdMailOutline } from 'react-icons/md'
import ProjectItem from '@/components/ProjectItem'

import { TbExternalLink } from 'react-icons/tb'
import { RiTeamLine } from 'react-icons/ri'

export default function page() {
  const projects25H2 = [
    {
      name: 'clerk-app',
      desc: '웹서버보안프로그래밍 실습 1',
      github: 'https://github.com/seojin23/clerk-app',
      vercel: 'https://clerk-app-one.vercel.app/',
    },
    {
      name: 'mongodb-crud',
      desc: '웹서버보안프로그래밍 실습 2',
      github: 'https://github.com/seojin23/mongodb',
      vercel: 'https://mongodb-umber-eta.vercel.app',
    },
    {
      name: 'nextjs-shopping',
      desc: '웹서버보안프로그래밍 실습 3',
      github: 'https://github.com/seojin23/nextjs-shopping',
      vercel: 'https://nextjs-shopping-five.vercel.app',
    },
  ]

  const projects25H1 = [
    {
      name: 'WebDemo',
      desc: '웹프로그래밍 실습 1',
      github: 'https://www.github.com/seojin23/WebDemo',
      vercel: 'https://web-demo-xi-jet.vercel.app/',
    },
    {
      name: 'HTML Demo',
      desc: '웹프로그래밍 실습 2',
      github: 'https://www.github.com/seojin23/HTMLDemo',
      vercel: 'https://html-demo-seven.vercel.app/',
    },
    {
      name: 'FRAMEWORK',
      desc: '웹프로그래밍 중간평가 프로젝트',
      github: 'https://www.github.com/seojin23/FRAMEWORK',
      vercel: 'https://framework-eta-nine.vercel.app/',
    },
    {
      name: 'VisualDS',
      desc: '웹프로그래밍 기말평가 프로젝트',
      github: 'https://www.github.com/seojin23/visualDS',
      vercel: 'https://visual-ds-psi.vercel.app/',
    },
    {
      name: 'Web Portfolio',
      desc: '웹프로그래밍 중간평가 포트폴리오',
      github: 'https://github.com/seojin23/Web_Portfolio',
      vercel: 'https://web-portfolio-phi-rose.vercel.app/',
    },
    {
      name: 'Web Portfolio 2',
      desc: '웹프로그래밍 기말평가 포트폴리오',
      github: 'https://github.com/seojin23/Web_Portfolio_2',
      vercel: 'https://web-portfolio-2-inky.vercel.app/',
    },
  ]

  return (
    <div className="">
      <div className="flex flex-col text-center my-20 gap-4">
        <h1 className="font-extrabold text-4xl mb-6">Portfolio</h1>
        <h2 className="font-bold text-2xl">한서진</h2>
        <p className="font-bold">중부대학교 정보보호학전공</p>
      </div>

      <hr className="border border-gray-600" />
      <div className="text-xs font-extralight flex flex-row gap-4 justify-end items-center">
        <div className="flex flex-row gap-1 items-center">
          <MdMailOutline />
          <p>seozz2@jmail.com</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <ImGithub />
          <a
            href={'https://github.com/seojin23'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/seojin23
          </a>
        </div>
      </div>

      <div className="my-12 px-20">
        <h3 className="font-bold text-xl">2025 H2</h3>
        <ul className="mt-6 mb-12 flex flex-col gap-6">
          {projects25H2.map((project, idx) => (
            <ProjectItem
              key={`group1-${idx}`}
              name={project.name}
              desc={project.desc}
              github={project.github}
              vercel={project.vercel}
            />
          ))}
          <li className="border-1 border-gray-600 p-3 pr-11 rounded-xl hover:shadow-lg flex flex-row items-center justify-between">
            <a
              href="https://github.com/seojin23/classreview"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div>
                <div className="flex flex-row items-center gap-2">
                  <h2 className="font-bold text-xl">classreview</h2>
                  <ImGithub size={18} />
                </div>

                <p>웹서버보안프로그래밍 팀프로젝트</p>
              </div>
            </a>
            <div className="flex flex-row gap-3">
              <Link href={'/team'}>
                <div className="rounded-full p-1 hover:bg-gray-200 flex items-center justify-center">
                  <RiTeamLine size={24} />
                </div>
              </Link>
              <a
                href="https://classreview-self.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full p-1 hover:bg-gray-200 flex items-center justify-center">
                  <TbExternalLink size={24} />
                </div>
              </a>
            </div>
          </li>
        </ul>
        <h3 className="font-bold text-xl">2025 H1</h3>
        <ul className="my-6 flex flex-col gap-6">
          {projects25H1.map((project, idx) => (
            <ProjectItem
              key={`group1-${idx}`}
              name={project.name}
              desc={project.desc}
              github={project.github}
              vercel={project.vercel}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
