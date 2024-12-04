export default function Navbar() {
  return (
    <nav className="block w-full max-w-screen py-2 mx-auto bg-white border-b-2 border-slate-200 lg:py-3 ">
      <div className=" flex  items-center bg-white justify-between mx-6   text-slate-800">
        <a
          href="/"
          className="mr-4 gap-2 flex cursor-pointer py-1.5 text-base text-black font-semibold"
        >
          <img src="/logo.png" alt="logo" className="w-auto" />
        </a>

        <div className="hidden lg:block bg-white border-2 border-slate-200 rounded-xl">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-black">
              <img src="/chill-guy.png" alt="avatar" className="w-10" />

              <a
                href="https://www.youtube.com/watch?v=JO334h_PhuU"
                className="flex items-center font-semibold text-lg"
              >
                Joe Mama
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
