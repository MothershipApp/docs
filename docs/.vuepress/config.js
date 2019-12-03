module.exports = {
    title: "Mothership Documentation",
    description: "Documentation for Mothership.app",
    themeConfig: {
        logo: "/imgs/mothership-logo.jpg",
        nav: [
            { text: "Docs", link: "/guide/" },
            {
                text: "Mothership Libraries",
                ariaLabel: "Mothership.app Code and Libraries",
                items: [
                    {
                        text: "Mothership JS Logs",
                        link: "https://github.com/MothershipApp/mothership-js",
                        target: "_self",
                        rel: ""
                    },
                    {
                        text: "Mothership PHP Logs",
                        link: "https://github.com/MothershipApp/php-logs",
                        target: "_self",
                        rel: ""
                    },
                    {
                        text: "Mothership CLI",
                        link: "https://github.com/MothershipApp/mothership-cli",
                        target: "_self",
                        rel: ""
                    }
                ]
            },
            {
                text: "Mothership.app",
                ariaLabel: "Mothership.app Pages",
                items: [
                    {
                        text: "Mothership Homepage",
                        link: "https://mothership.app",
                        target: "_self",
                        rel: ""
                    },
                    {
                        text: "Login",
                        link: "https://mothership.app/login",
                        target: "_self",
                        rel: ""
                    },
                    {
                        text: "Register",
                        link: "https://mothership.app/register",
                        target: "_self",
                        rel: ""
                    }
                ]
            }
        ],
        sidebar: [
            "/guide/",
            {
                title: "Setup and Installation",
                collapsable: false,
                children: [
                    "/guide/setup/",
                    "/guide/setup/aws",
                    "/guide/setup/servers",
                    "/guide/setup/logs",
                    "/guide/setup/notifications"
                ]
            },
            {
                title: "Using Mothership",
                collapsable: false,
                children: [
                    "/guide/users-guide/",
                    "/guide/users-guide/environments",
                    "/guide/users-guide/backups",
                    "/guide/users-guide/sync",
                    "/guide/users-guide/health-checks",
                    "/guide/users-guide/using-logs"
                ]
            }
        ]
    }
};
