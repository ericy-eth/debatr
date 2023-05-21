import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Wildly Customizable.',
    description:
      "Get quality speeches tailored to your needs. Supports different types of debate compeitions",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Blazingly Fast.',
    description: ' Publish your debate speeches in minutes, no need to wait',
    icon: LockClosedIcon,
  },
  {
    name: 'Extremley Flexible.',
    description: 'Our application uses AI to generate debate speeches for you that include not just arguments in favor of your cause but also powerful rebuttals to any counterpoints your opponents may raise. With our AI-assisted speech creation, you’ll be better prepared to win any debate!',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Work faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our application allows you to quickly and easily deploy your AI-assisted speech creation app. Debate speeches can be generated and published in minutes, and they come with rebuttals to any counterpoints your opponents may raise. With VocalForge, you'll be better equipped to take on any debate!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
