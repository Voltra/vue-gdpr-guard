module.exports = {
    dest: "../docs",
    themeConfig: {
        smoothScroll: true,
        plugins: [
            ["clean-urls", true]
        ],
        sidebar: [
            '/',
            '/exports',
            '/plugin',
            {
                title: "Components",
                path: "/components",
                children: [
                    "/components/GdprManager",
                    "/components/GdprGroup",
                    "/components/GdprGuard"
                ],
                prev: "/plugin",
                next: "/components/GdprManager",
            }
        ],
    },
};