import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className="w-full max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 px-6 py-10 sm:px-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-xl sm:mx-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-px w-16 bg-[#414141]" />
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#414141]">
                Our Bestsellers
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-[4.5rem]">
              Latest Arrivals
            </h1>
            <p className="mt-6 max-w-lg text-sm text-[#4b5563] sm:text-base">
              Discover fresh styles designed for effortless streetwear looks and premium everyday comfort.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Shop Now
              </button>
              <a className="inline-flex items-center text-sm font-medium text-[#414141] underline underline-offset-4 decoration-black decoration-2 hover:text-black" href="#collection">
                Explore Collection
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 overflow-hidden bg-[#fdf2f0]">
          <div className="absolute inset-0 bg-[#f9e7e4]" />
          <img
            className="relative h-full w-full object-cover"
            src={assets.hero}
            alt="Latest arrivals"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero