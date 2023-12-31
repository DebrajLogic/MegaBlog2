import { Logo } from "../../components"; // Adjust the import path based on your actual structure

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-4">
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6 flex flex-col justify-center items-center">
            <Logo />
            <p className="text-sm text-center mt-4">
              Welcome to our blog, where we share insightful articles, tips, and
              stories about various topics. Explore the world of knowledge with
              us!
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">
              Categories
            </h2>
            <ul className="list-none text-sm">
              <li>
                <a
                  href="/technology"
                  className="hover:text-gray-300 hover:underline cursor-pointer"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="/travel"
                  className="hover:text-gray-300 hover:underline cursor-pointer"
                >
                  Travel
                </a>
              </li>
              <li>
                <a
                  href="/lifestyle"
                  className="hover:text-gray-300 hover:underline cursor-pointer"
                >
                  Lifestyle
                </a>
              </li>
              <li>
                <a
                  href="/food"
                  className="hover:text-gray-300 hover:underline cursor-pointer"
                >
                  Food
                </a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Contact</h2>
            <p className="text-sm">
              Have questions or suggestions? Feel free to reach out to us at{" "}
              <a
                href="mailto:contact@example.com"
                className="hover:text-gray-300 hover:underline cursor-pointer"
              >
                contact@example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-sm text-gray-300">
          &copy; 2023 Blog Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
