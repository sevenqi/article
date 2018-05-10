module.exports = {
    base: '/article/',
    title: '小象的文档',
    description: 'Document library',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '前端规范', link: '/frontEnd/' },
            { text: '开发环境', link: '/development/' },
            { text: '学习文档', link: '/notes/' },
            { text: '游魂博客', link: 'https://www.iyouhun.com' },
            // 下拉列表的配置
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/English' }
                ]
            }
        ]
    }
}