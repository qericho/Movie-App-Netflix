import { useEffect, useState } from "react"
import Logo from '../assets/img/logo.png'
import Avatar from '../assets/img/avatar.png'
import { useNavigate } from "react-router-dom"
const Nav = () => {
  const history = useNavigate();
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${show ? "bg-none" : "bg-black"} z-999 w-full md:h-[80px] h-[70px] fixed top-0 ease-in-out duration-300`}>
      <div>
        <img onClick={() => history('/')}
          className="w-[100px] md:w-[150px] fixed left-4 md:left-8 top-[6px] md:top-[-5px] cursor-pointer"
          src={Logo} alt="Netflix-Logo" />
        <img onClick={() => history('/profile')}
          className="w-[30px] fixed right-4 md:right-10 top-5 cursor-pointer "
          src={Avatar} alt="avatar-icon" />
      </div>
    </nav>
  )
}

export default Nav