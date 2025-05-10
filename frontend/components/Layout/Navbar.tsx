"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { JSX, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Aperture, ArrowBigUp, ArrowDown01, Menu, XIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import React from "react";

const features: { title: string; description: string; href: string; icon: JSX.Element }[] = [
    {
        title: "Feature 1",
        description: "Description of feature 1",
        href: "/feature1",
        icon: <Aperture/>,
    },
    {
        title: "Feature 2",
        description: "Description of feature 2",
        href: "/feature2",
        icon: <ArrowBigUp/>,
    },
    {
        title: "Feature 3",
        description: "Description of feature 3",
        href: "/feature3",
        icon: <ArrowDown01/>,
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="flex flex-row items-center gap-4">
                {/* Logo */ }
                <Link href="/" className="flex items-center">
                    {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
                    <span className="text-lg">MinneMap</span>
                </Link>
                {/* Desktop Navigation*/}
                <NavigationMenu className={"hidden flex-1 md:flex justify-center"}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="opacity-70 hover:opacity-100 duration-100 transition-opacity font-normal text-sm">
                                Features
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                                {features.map((feature) => (
                                    <ListItem
                                    key={feature.title}
                                    title={feature.title}
                                    icon={feature.icon}
                                    href={feature.href}
                                    >
                                    {feature.description}
                                    </ListItem>
                                ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {/* Login */}
            <div className="flex-row gap-2 hidden md:flex">
                <Button variant={"outline"}><Link href="/dashboard">Log In</Link></Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant={"ghost"} size={"icon"} className={"md:hidden"}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"} className="p-2 [&>button:first-of-type]:hidden">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="w-full border-b flex flex-row items-center justify-between py-4">
                        <Link href="/" className="flex items-center ml-4">
                            {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
                            <span className="text-lg">MinneMap</span>
                        </Link>
                        <div className="flex flex-row gap-2">
                            <Button variant={"outline"}><Link href="/dashboard">Log In</Link></Button>
                            <SheetClose asChild>
                                <Button variant={"ghost"} size={"icon"}>
                                    <XIcon className="h-5 w-5" />
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="features" className="px-4">
                                <AccordionTrigger className="w-full font-normal text-sm">
                                    Features
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="flex flex-col w-full gap-3">
                                    {features.map((feature) => (
                                        <AccordionDropdownItem
                                            key={feature.title}
                                            title={feature.title}
                                            icon={feature.icon}
                                            href={feature.href}
                                        >
                                            {feature.description}
                                        </AccordionDropdownItem>
                                    ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                    </Accordion>
                </SheetContent>
            </Sheet>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string; icon: JSX.Element }
>(({ className, title, icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={`flex items-start space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className || ""}`}
                    {...props}
                >
                    <div className="flex flex-row gap-2">
                        {/* Icon can be added here */ }
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                            {React.cloneElement(icon, { className: "text-primary" })}
                        </div>

                        {/* Title and Description */}
                        <div className="flex flex-col justify-between">
                            <span className="text-sm font-medium leading-none">{title}</span>
                            <span className="text-sm text-muted-foreground">{children}</span>
                        </div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const AccordionDropdownItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string; icon: JSX.Element }
>(({ className, title, icon, ...props }, ref) => {
    return (
        <li>
            <Link
                ref={ref}
                className={`flex items-center space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className || ""}`}
                {...props}
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                    {React.cloneElement(icon, { className: "text-primary" })}
                </div>
                <span className="text-sm font-medium leading-none">{title}</span>
            </Link>
        </li>
    )
})
AccordionDropdownItem.displayName = "AccordionDropdownItem"