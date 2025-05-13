import { Button } from './components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

function App() {
  return (
    <div className="min-h-svh flex flex-col scroll-smooth">
      <header className="mb-[45px]">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <a
              href="/"
              className="font-serif font-bold text-[40px] text-[#303030]"
            >
              alliatus
            </a>
          </div>
          <nav className="flex items-center space-x-[50px] text-xl text-[#303030]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#49342F] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              asChild
              className="px-11 py-7 border-[#49342F] text-xl hover:bg-[#49342F] hover:text-white bg-transparent"
            >
              <a href="/">Log in</a>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="mb-10">
          <div className="container mx-auto bg-[#FFDD81] rounded-[40px] text-[#303030]">
            <div className="grid grid-cols-2 gap-4 px-[70px] pt-28 pb-12">
              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-[64px] text-wrap mb-[40px]">
                  <span
                    className="font-extrabold italic
                "
                  >
                    Level Up
                  </span>{' '}
                  with a Curated Mastermind Circle
                </h1>
                <p className="text-[22px] mb-[100px] text-balance">
                  Alliatus connects ambitious people into small, handpicked
                  groups for honest feedback, strategy sessions, and real
                  accountability.{' '}
                </p>
                <div className="flex items-center mb-6">
                  <Button
                    variant="default"
                    className="px-11 py-7 bg-[#303030] text-xl text-white font-normal"
                  >
                    Apply Now
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="px-11 py-7 border-[#49342F] text-xl ml-[20px] bg-transparent hover:bg-[#303030] hover:text-white"
                  >
                    <a href="/">Learn How It Works</a>
                  </Button>
                </div>
                <p>
                  <span className="font-semibold">4.9★ average rating</span>
                  <br />
                  <span className="italic">
                    Feedback from real members across sessions.
                  </span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative isolate w-fit">
                  <div className="pointer-events-none h-[517px] w-[436px] -top-5 -left-5 absolute inset-0 rounded-[60px] border-1 border-black"></div>
                  <div className="pointer-events-none h-[433px] w-[282px] absolute -right-6 -bottom-7 rounded-[60px] border-1 border-black"></div>
                  <svg
                    className="absolute -top-20 -left-20 z-20"
                    width="124"
                    height="124"
                    viewBox="0 0 124 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M73.4307 32.8711L73.6182 33.3789L74.1094 33.1523L104.532 19.1309L90.5117 49.5547L90.2852 50.0459L90.793 50.2334L122.221 61.832L90.793 73.4307L90.2852 73.6182L90.5117 74.1094L104.532 104.532L74.1094 90.5117L73.6182 90.2852L73.4307 90.793L61.832 122.221L50.2334 90.793L50.0459 90.2852L49.5547 90.5117L19.1309 104.532L33.1523 74.1094L33.3789 73.6182L32.8711 73.4307L1.44238 61.832L32.8711 50.2334L33.3789 50.0459L33.1523 49.5547L19.1309 19.1309L49.5547 33.1523L50.0459 33.3789L50.2334 32.8711L61.832 1.44238L73.4307 32.8711Z"
                      fill="white"
                      stroke="#303030"
                    />
                  </svg>
                  <svg
                    className="absolute top-14 left-8 z-20 w-20 h-20"
                    width="95"
                    height="119"
                    viewBox="0 0 95 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.437 11.5327C51.0904 36.0231 66.5978 55.4015 86.3472 59.5083C66.5393 63.6271 50.9987 83.1092 47.4048 107.703C43.7506 83.2113 28.2424 63.8321 8.4917 59.7271C28.3012 55.6097 43.8431 36.1279 47.437 11.5327Z"
                      stroke="white"
                      stroke-width="1.60967"
                    />
                  </svg>
                  <svg
                    className="absolute bottom-5 right-2 z-24 w-28 h-28"
                    width="95"
                    height="119"
                    viewBox="0 0 95 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.437 11.5327C51.0904 36.0231 66.5978 55.4015 86.3472 59.5083C66.5393 63.6271 50.9987 83.1092 47.4048 107.703C43.7506 83.2113 28.2424 63.8321 8.4917 59.7271C28.3012 55.6097 43.8431 36.1279 47.437 11.5327Z"
                      stroke="white"
                      stroke-width="1.60967"
                    />
                  </svg>

                  <figure className="overflow-hidden rounded-[50px] relative z-10">
                    <img
                      src="https://images.unsplash.com/photo-1604881991405-b273c7a4386a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Two people talking over coffee"
                      className="h-[572px] w-[432px] object-cover"
                    />

                    {/* <svg
                    className="absolute bottom-14 right-14 w-10 h-10 stroke-white/90 fill-none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m12.364-6.364l-1.414 1.414m-7.071 7.071l-1.414 1.414m0-8.485l1.414 1.414m7.071 7.071l1.414 1.414"
                    />
                  </svg> */}
                  </figure>
                  <p className="absolute top-14 right-0 translate-x-1/4 z-20 whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-md border-1 border-[#303030]">
                    Fresh insights.
                  </p>
                  <p className="absolute bottom-28 left-4 translate-x-1/4 z-20 whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-md border-1 border-[#303030]">
                    Collective growth.
                  </p>
                  <p className="absolute bottom-5 -left-28 translate-x-1/4 z-20 whitespace-nowrap rounded-full bg-white px-6 py-2.5 text-md border-1 border-[#303030]">
                    Real conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
