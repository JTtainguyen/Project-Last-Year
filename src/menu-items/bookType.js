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
            breadcrumbs: false
        },
        {
            id: 'type-kids',
            title: 'Kids',
            type: 'item',
            url: '/bookType/type-kids',
            breadcrumbs: false
        },
        {
            id: 'type-thrillers',
            title: 'Thrillers',
            type: 'item',
            url: '/bookType/type-thrillers',
            breadcrumbs: false
        },
        {
            id: 'type-textbooks',
            title: 'Textbooks',
            type: 'item',
            url: 'bookType/type-textbooks',
            breadcrumbs: false
        }
    ]
};

export default bookType;
