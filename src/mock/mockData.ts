const data = {
    chats: [
        {
            chat: {
                id: 1,
                name: 'New User',
                avatarSrc: 'src/assets/img/avatar-5.jpg',
                date: 'July 7'
            },
            recent: {
                user: 'new-user',
                message: 'lorem ipsum lorem lorem liremokm okoikde korem'
            },
            chips: [
                { title: 'inbox', color: 'primary' },
                { title: 'Group', color: 'danger' }
            ],
            messages: [
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'file',
                    content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
                    isForwarderd: true,
                    forwardedFrom: 'Elahe Mohammadi Nia'
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'img',
                    content: 'src/assets/img/avatar-3.png'
                },
                {
                    isMe: true,
                    sender: 'Elham Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }, {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }
            ]
        },
        {
            chat: {
                id: 2,
                name: 'Salam',
                avatarSrc: 'src/assets/img/avatar-2.png',
                date: 'July 2'
            },
            recent: {
                user: 'Elham Hashemi',
                message: 'lorem ipsum lorem lorem liremokm okoikde korem'
            },
            chips: [
                { title: 'inbox', color: 'primary' },
                { title: 'Questions', color: 'danger' }
            ],
            messages: [
                {
                    isMe: true,
                    sender: 'Elham Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'file',
                    content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
                    isForwarderd: true,
                    forwardedFrom: 'Elahe Mohammadi Nia'
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'img',
                    content: 'src/assets/img/avatar-3.png'
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }
            ]
        },
        {
            chat: {
                id: 3,
                name: 'کافه',
                avatarSrc: 'src/assets/img/avatar-4.jpg',
                date: 'July 1'
            },
            recent: {
                user: 'Mohammad Mahdavi',
                message: 'lorem ipsum lorem lorem liremokm okoikde korem'
            },
            chips: [
                { title: 'inbox', color: 'primary' },
                { title: 'Questions', color: 'danger' }
            ],
            messages: [
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'img',
                    content: 'src/assets/img/avatar-3.png'
                },
                {
                    isMe: true,
                    sender: 'Elham Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
                    
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'file',
                    content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
                    isForwarderd: true,
                    forwardedFrom: 'Elahe Mohammadi Nia'
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }
            ]
        },
        {
            chat: {
                id: 4,
                name: 'Code Bot',
                avatarSrc: 'src/assets/img/avatar-3.png',
                date: 'June 6'
            },
            recent: {
                user: 'TRITA intellignet innovation',
                message: 'lorem ipsum lorem lorem liremokm okoikde korem'
            },
            chips: [
                { title: 'inbox', color: 'primary' },
                { title: 'Group', color: 'danger' }
            ],
            messages: [
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'img',
                    content: 'src/assets/img/avatar-3.png'
                },
                {
                    isMe: true,
                    sender: 'Elham Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'file',
                    content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
                    isForwarderd: true,
                    forwardedFrom: 'Elahe Mohammadi Nia'
                }
            ]
        },
        {
            chat: {
                id: 5,
                name: 'TritApp',
                avatarSrc: 'src/assets/img/no-avatar.png',
                date: 'may 2'
            },
            recent: {
                user: 'Trita',
                message: 'lorem ipsum lorem lorem liremokm okoikde korem'
            },
            chips: [
                { title: 'inbox', color: 'primary' },
                { title: 'Ticket', color: 'danger' }
            ],
            messages: [
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'file',
                    content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
                    isForwarderd: true,
                    forwardedFrom: 'Elahe Mohammadi Nia'
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'img',
                    content: 'src/assets/img/avatar-3.png'
                },
                {
                    isMe: true,
                    sender: 'Elham Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                },
                {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }, {
                    isMe: false,
                    sender: 'Mahdi Hashemi',
                    time: '07:23',
                    contentType: 'text',
                    content: 'لورم مجله در ستون و سطرآنچنان که لازم است'
            
                }
            ]
        }
    ]
}

export default { data }
