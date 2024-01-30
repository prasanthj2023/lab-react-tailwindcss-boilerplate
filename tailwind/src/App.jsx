export default function App() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-xl">Kalvium</span>
        </div>
        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex-glow">
            <a
              href=""
              className="block mt-4 sm:inline-block sm:mt-0 text-green-400 mr-4 hover:text-white"
            >
              About
            </a>
            <a
              href=""
              className="block mt-4 sm:inline-block sm:mt-0 text-green-400 mr-4 hover:text-white"
            >
              Contact Us
            </a>
            <a
              href=""
              className="block mt-4 sm:inline-block sm:mt-0 text-green-400 mr-4 hover:text-white"
            >
              Courses
            </a>
          </div>
        </div>

        <div className="">
          <a className="inline-block text-sm leading-none px-4 py-2 border rounded text-white border-white mt-4 md:mt-0">Login</a>
        </div>
      </nav>

      <div className="mt-5 mx-auto py-2 ml-5 mr-5">
        <button className="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded ">Button One</button>
        <div className="bg-red-200 border border-red-500 text-red-700 px-4 py-3 my-5 rounded-md">
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline ml-3">This is Awesome!</span>
        </div>
      </div>

      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""  className="h-12 w-12"/>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 font-bold">Kalvium Store</h4>
          <p className="text-base text-gray-600">You have a  new Course</p>
        </div>
      </div>

      <footer className="bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center py-4">
          2021 Copyright Kalvium
        </div>
      </footer>
    </div>
  );
}
