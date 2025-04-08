import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

const projectsData = [
  {
    title: 'Intervix',
    description:
      'Full-stack DSA prep platform with 100+ curated problems and real-time user progress. Firebase Auth + Firestore; deployed on Netlify; used by 45+ students.',
    imgSrc: '/static/images/intervix.png',
    href: 'https://intervix.vercel.app',
  },
  {
    title: 'Redis Clone',
    description:
      'Redis-like key-value store built in C++ with TTLs, multithreaded server, and raw socket REPL client.',
    href: 'https://github.com/yussypu/redis-clone',
  },
  {
    title: 'Job Tracker Web App',
    description:
      'Full CRUD app with a Kanban UI to track job applications. Built using Django, HTMX, Tailwind, PostgreSQL; deployed to Heroku.',
    imgSrc: '/static/images/job-tracker.png',
    href: 'https://github.com/yussypu/job-tracker',
  },
  {
    title: 'C++ Anti-Pattern Detector',
    description:
      'Clang plugin to detect anti-patterns in student C++ code, aiming for future IDE integration.',
    href: 'https://github.com/yussypu/clang-antipattern-plugin',
  },
  {
    title: 'CAPTCHA Breaker',
    description:
      'CNN model trained to decode CAPTCHA images with over 87% accuracy. Preprocessing done via OpenCV.',
    imgSrc: '/static/images/captcha-breaker.png',
    href: 'https://github.com/yussypu/captcha-breaker',
  },
]

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A selection of full-stack projects, tools, and experiments I’ve built.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
