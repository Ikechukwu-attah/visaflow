type NavbarItem = {
  id: number;
  item: string;
  url: string; // Uses section IDs for scrolling
};

export const navbarItem: NavbarItem[] = [
  { id: 1, item: "Home", url: "" },
  { id: 2, item: "How It Works", url: "how-it-works" },
  { id: 3, item: "Pricing", url: "pricing" },
  { id: 4, item: "Testimonials", url: "testimonials" },
  { id: 5, item: "FAQ", url: "faq" },
  { id: 6, item: "Contact Us", url: "contact" },
  { id: 7, item: "Login", url: "/login" }, // External Link
  { id: 8, item: "Sign Up", url: "/signup" }, // External Link
];
