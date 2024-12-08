import { Button } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const buttonBase = "rounded py-2 px-4 text-sm text-white bg-sky-600 data-[hover]:bg-sky-500 data-[active]:bg-sky-700 z-10 "
const buttonStyles = "w-20"
const menuButtonStyles = "float-right mr-10"

const menuItemStyles = "block py-1 data-[active]:underline"

function DropDown() {
  return (
    <Menu>
      <MenuButton className={buttonBase + menuButtonStyles}>Menu</MenuButton>
      <MenuItems anchor="bottom" className={buttonBase + buttonStyles}>
        <MenuItem>
          <a className={menuItemStyles} href="/">
            Home
          </a>
        </MenuItem>
        <MenuItem>
          <a className={menuItemStyles} href="projects/">
            Projects
          </a>
        </MenuItem>
        <MenuItem>
          <a className={menuItemStyles} href="resume/">
            Resume
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default function Header() {
  return (
    <>
      <header className="top-0 sticky h-[10vh] grid grid-cols-2 gap-12 items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 z-10">
        <h1 className="flex text-white font-semibold text-lg mx-auto gap-12">Helix LeRoy&apos;s Portfolio</h1>
        <nav className="hidden md:flex items-center gap-12">
          <a href="/"><Button className={buttonBase + buttonStyles}>Home</Button></a>
          <a href="projects/"><Button className={buttonBase + buttonStyles}>Projects</Button></a>
          <a href="resume/"><Button className={buttonBase + buttonStyles}>Resume</Button></a>
        </nav>
        <div className='block md:hidden'>
          <DropDown/>
        </div>
        
      </header>
    </>
  );
}

