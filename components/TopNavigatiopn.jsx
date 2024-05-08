"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Cross1Icon } from "@radix-ui/react-icons"



export default function TopNavigation() {
    return (
        <NavigationMenu>
            <div className="flex items-center mt-4"> 
                <img src="https://seeklogo.com/images/S/salon-logo-573CEE0E3B-seeklogo.com.png?v=638245948880000000" alt="Logo" className=" h-9 w-15 rounded-full mr-5"/>
            <h1 className="font-bold text-2x1 mr-5">Inventory Management System</h1>
            </div>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
            return (
                <li>
                    <NavigationMenuLink asChild>
                        <a
                            ref={ref}
                            className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                className
                            )}
                            {...props}
                        >
                            <div className="text-sm font-medium leading-none">{title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        </a>
                    </NavigationMenuLink>
                </li>
            )
        })
ListItem.displayName = "ListItem"
