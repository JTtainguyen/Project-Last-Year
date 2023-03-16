// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const bookType = {
    id: 'utilities',
    title: 'Book Type',
    type: 'group',
    children: [
        {
            id: 'type-romance',
            title: 'Romance',
            type: 'item',
            url: '/bookType/type-romance',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'type-kids',
            title: 'Kids',
            type: 'item',
            url: '/bookType/type-kids',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'type-thrillers',
            title: 'Thrillers',
            type: 'item',
            url: '/bookType/type-thrillers',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'type-textbooks',
            title: 'Textbooks',
            type: 'item',
            icon: icons.IconWindmill,
            url: 'bookType/type-textbooks',
            breadcrumbs: false
        }
    ]
};

export default bookType;
