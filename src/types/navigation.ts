export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  href: string;
  navbarItems: NavItem[];
  allItems: NavItem[];
}