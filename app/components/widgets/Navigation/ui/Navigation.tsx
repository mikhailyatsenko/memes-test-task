'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';

import { useState } from 'react';
import { menuItems } from '../constants';
import { ThemeToggle } from '@/components/entities/ToggleTheme';
import { NavigationProps } from '../types';
import { usePathname } from 'next/navigation';
import { Link } from '@heroui/link';
export const Navigation = ({ serverThemeCookie }: NavigationProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar maxWidth="xl" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Memes App</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem
            className="data-[active=true]:text-secondary"
            isActive={pathname === item.href}
            key={item.label}
          >
            <Link
              color={pathname === item.href ? 'secondary' : 'foreground'}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle serverThemeCookie={serverThemeCookie} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem isActive={pathname === item.href} key={item.label}>
            <Link
              color={pathname === item.href ? 'secondary' : 'foreground'}
              onPress={() => setIsMenuOpen(false)}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
