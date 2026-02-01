export interface NavItem {
  title: string;
  href: string;
  target?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  href: string;
  navbarItems: NavItem[];
  allItems: NavItem[];
}