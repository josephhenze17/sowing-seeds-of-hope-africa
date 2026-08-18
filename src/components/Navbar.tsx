import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { SITE } from '../site'
import { Button } from '@/components/ui/button'
import { CtaButton } from './CtaButton'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const ugandaLinks = [
  { to: '/uganda', label: 'Uganda Overview' },
  { to: '/uganda/schools', label: 'Schools' },
  { to: '/uganda/medical-center', label: 'Medical Center' },
  { to: '/uganda/other', label: 'Other' },
]

const kenyaLinks = [
  { to: '/kenya', label: 'Kenya Overview' },
  { to: '/kenya/school-fees', label: 'Supporting School Fees' },
  { to: '/kenya/other', label: 'Other Opportunities' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink className="nav-brand" to="/" aria-label="Sowing Seeds of Hope Africa home">
          <img
            className="nav-logo"
            src="/images/logo.png"
            alt=""
            width={1133}
            height={521}
          />
        </NavLink>

        <NavigationMenu className="hidden min-[901px]:flex" align="end" delay={50} closeDelay={150}>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<NavLink to="/" end />}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger nativeButton={false} render={<NavLink to="/uganda" />}>
                Uganda
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {ugandaLinks.map((link) => (
                  <NavigationMenuLink key={link.to} render={<NavLink to={link.to} />}>
                    {link.label}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger nativeButton={false} render={<NavLink to="/kenya" />}>
                Kenya
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {kenyaLinks.map((link) => (
                  <NavigationMenuLink key={link.to} render={<NavLink to={link.to} />}>
                    {link.label}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<NavLink to="/donations" />}
              >
                Donations
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<NavLink to="/contact" />}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden min-[901px]:block">
          <CtaButton href={SITE.donateUrl}>Give Hope</CtaButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="min-[901px]:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} />
            }
          >
            <MenuIcon aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              <NavLink className="rounded-lg px-2 py-2 text-sm hover:bg-muted" to="/" end>
                Home
              </NavLink>
              {ugandaLinks.map((link) => (
                <NavLink className="rounded-lg px-2 py-2 text-sm hover:bg-muted" key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
              <Separator />
              {kenyaLinks.map((link) => (
                <NavLink className="rounded-lg px-2 py-2 text-sm hover:bg-muted" key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
              <Separator />
              <NavLink className="rounded-lg px-2 py-2 text-sm hover:bg-muted" to="/donations">
                Donations
              </NavLink>
              <NavLink className="rounded-lg px-2 py-2 text-sm hover:bg-muted" to="/contact">
                Contact
              </NavLink>
              <CtaButton className="mt-3 w-full" href={SITE.donateUrl}>
                Give Hope
              </CtaButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
