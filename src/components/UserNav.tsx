import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../../ @/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../../ @/components/ui/avatar'
import Link from 'next/link'


const UserNav = () => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <div className='w-[50px] h-full'><Avatar >
                    <AvatarImage src="" sizes='small' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px] h-[250px] text-xl bg-gray-700 flex flex-col justify-around text-white  px-3 py-2">
                <DropdownMenuLabel className='font-bold mt-4'>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href=""><DropdownMenuItem>
                    Profile
                </DropdownMenuItem></Link>
                <Link href=""><DropdownMenuItem>
                    Billing
                </DropdownMenuItem></Link>
                <Link href=""> <DropdownMenuItem>
                    Settings
                </DropdownMenuItem></Link>


                <Link href=""> <DropdownMenuItem>
                    Github
                </DropdownMenuItem></Link>

                <Link href=""> <DropdownMenuItem>
                    Support
                </DropdownMenuItem></Link>


                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserNav