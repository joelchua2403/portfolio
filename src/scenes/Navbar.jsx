import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

const Link = ({selectedPage, setSelectedPage, page}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
            </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navBackground = isTopOfPage ? '' : 'bg-red';
  return (
      <nav className={`${navBackground} z-40 w-full fixed top-o py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='text-3xl font-playfair font-bold'>Portfolio</h4>

        {isAboveSmallScreens ? (
            <div className='flex jusitfy-between gap-16 font-opensans text-sm font-semibold'>
                <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Testimonials'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                 
            </div>
            ) : (
                <div>
                    <button
                    className='rounded-full p-2 bg-red'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src='../assets/menu-icon.svg' alt='menu-icon' />
                    </button>
                </div>) }
                {/* Mobile Menu  popup */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]' >
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src='../assets/close-icon.svg' alt='close-icon' />
                            </button>
                            </div>
                            {/* Menu Items */}
                            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Testimonials'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                   <Link 
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                                </div>
                    </div>
                )
                }

        </div>
      </nav>

  )
}

export default Navbar
