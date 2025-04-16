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
import Link from 'next/link';
import { useState } from 'react';
import { menuItems } from '../constants';
import { ThemeToggle } from '@/components/entities/ToggleTheme';
import { NavigationProps } from '../types';
import { usePathname } from 'next/navigation';
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
            <Link href={item.href}>{item.label}</Link>
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
          <NavbarMenuItem
            className="data-[active=true]:text-secondary"
            isActive={pathname === item.href}
            key={item.label}
          >
            <Link href={item.href}>{item.label}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
