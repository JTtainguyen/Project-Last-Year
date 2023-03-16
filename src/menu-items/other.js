// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'other',
    type: 'group',
    children: [
        {
            id: 'search',
            title: 'Search',
            type: 'item',
            url: '/other/search',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'about',
            title: 'About Us',
            type: 'item',
            url: '/other/about-us',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
    ]
};

export default other;
