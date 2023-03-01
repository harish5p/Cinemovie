import { Link } from "react-router-dom";


export const Footer = () => {
  return (


    <footer className="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">CineMovie</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="instagram.com" target="_blank" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
          <a href="linkedin.com" target="_blank" className="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>
        <li>
          <a href="youtube.com" target="_blank" className="mr-4 hover:underline md:mr-6">YouTube</a>
        </li>
        <li>
          <a href="github.com" target="_blank" className="hover:underline">GitHub</a>
        </li>
      </ul>
    </footer>


  )
}
