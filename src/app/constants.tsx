import { ItemSidebar } from "./types";
import { BiHomeCircle,BiHash,BiBell } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillBookmarkFill,BsFillPersonFill } from "react-icons/bs";
import { CgNotes,CgMoreO } from "react-icons/cg";

export const ITEMS_SIDEBAR:ItemSidebar[] =[
    {
        label: 'Home',
        href: '/',
        icon: <BiHomeCircle/>
    },
    {
        label: 'Explore',
        href: '/explore',
        icon: <BiHash/>
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: <BiBell/>
    },
    {
        label: 'Messages',
        href: '/messages',
        icon: <HiOutlineMail/>
    },
    {
        label: 'Bookmarks',
        href: '/bookmarks',
        icon: <BsFillBookmarkFill/>
    },
    {
        label: 'Lists',
        href: '/lists',
        icon: <CgNotes/>
    },
    {
        label: 'Profile',
        href: '/profile',
        icon: <BsFillPersonFill/>
    },
    {
        label: 'More',
        href: '/more',
        icon: <CgMoreO/>
    }
]

