import Link from "next/link";

const Heroes = () => {
  return (
    <div id="navigate-hero" className="hero">
      <div className="container mx-auto md:flex w-2/3 py-20">
        <div className="block md:hidden w-full md:w-7/12 mb-4">
          <div className="flex md:justify-end justify-center">
            <img
              src="/img/pp2.png"
              className="w-1/2 md:w-3/4 lg:w-1/2 rounded"
            />
          </div>
        </div>

        <div className="w-full md:w-6/12 md:flex md:items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl">Hi! My name Rio Justicio</h1>
            <p className="">
              I’m fullstack developer with strong passion to learn new things. I
              am familiar with a few PHP frameworks, and I have experience
              developed API using CodeIgniter & Laravel. Currently I am
              interested and learning about library or framework JavaScript, and
              Mobile Application. I enjoy playing games on my spare time.
            </p>
            <div className="flex my-3">
              <div className="flex items-center text-center">
                <p>Social : </p>
              </div>
              <div className="group text-center mx-2">
                <Link href="mailto:riojusticiof@gmail.com">
                  <div className="bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11">
                    <img src="/img/GMAIL.svg" className="w-5" />
                  </div>
                </Link>
              </div>
              <div className="group text-center mx-2">
                <Link href="https://www.linkedin.com/in/rio-justicio-250b31158/">
                  <div className="bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11">
                    <img src="/img/LinkedIn.svg" className="w-5" />
                  </div>
                </Link>
              </div>
              <div className="group text-center mx-2">
                <Link href="https://www.github.com/ajustc">
                  <div className="bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11">
                    <img src="/img/Github.svg" className="w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-7/12">
          <div className="flex md:justify-end justify-center">
            <img
              src="/img/pp2.png"
              className="w-2/3 md:w-3/4 lg:w-1/2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
