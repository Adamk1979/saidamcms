const Footer = () => (
    <footer className="bg-white block w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="py-12 mx-auto max-w-7xl lg:py-16 px-12 lg:px-20">
        <div className="grid md:grid-cols-4 md:gap-8 grid-cols-2">
          {/* Support Column 1 */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">API Status</a>
              </li>
            </ul>
          </div>
  
          {/* Support Column 2 */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">API Status</a>
              </li>
            </ul>
          </div>
  
          {/* Support Column 3 */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">API Status</a>
              </li>
            </ul>
          </div>
  
          {/* Support Column 4 */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:text-gray-900">API Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Footer Bottom Section */}
      <div className="px-5 py-12 mx-auto bg-gray-50 sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
        <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {/* Add other social media icons in a similar manner */}
        </div>
  
        <div className="mt-8 md:mt-0 md:order-1">
          <span className="mt-2 text-sm font-light text-gray-500">
            Copyright © 2017-2022
            <a href="#" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">Storyblok GmbH</a>.
          </span>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  