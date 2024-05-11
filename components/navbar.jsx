import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { GoogleMapsIcon } from "./icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Link } from "@nextui-org/link"; // Menggunakan Link dari Next UI
import { Logo } from "./icons";
import { siteConfig } from "@/config/site";
import Modall from "./modal";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href="/" className="flex justify-start items-center gap-1">
            {" "}
            <Logo />
            <p className="font-bold text-inherit">RanoCake</p>
          </Link>
        </NavbarBrand>
        <ul className=" lg:flex gap-4 justify-start ml-2lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link color="foreground" href={item.href}>
                {" "}
                {/* Menggunakan Link dari Next UI */}
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.google} aria-label="Google">
            <GoogleMapsIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="md:flex">
          <Modall />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-10 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {(() => {
                try {
                  return (
                    <Link
                      color={
                        index === 2
                          ? "primary"
                          : index === siteConfig.navMenuItems.length - 1
                          ? "danger"
                          : "foreground"
                      }
                      size="lg"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  );
                } catch (err) {
                  console.error(`Error occurred while accessing label: ${err}`);
                  return <div>Error</div>;
                }
              })()}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
