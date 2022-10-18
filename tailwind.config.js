/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        fontFamily: {
            'serif': ['ui-serif', 'Fraunces']
        },
        extend: {
            backgroundImage: {
                'headerMobile': "url('/images/mobile/image-header.jpg')",
                'headerDesktop': "url('/images/desktop/image-header.jpg')"
            },
            colors: {
                'primary-red': 'hsl(7, 99%, 70%)',
                'primary-yellow': 'hsl(51, 100%, 49%)',
                'primary-dark-cyan': 'hsl(167, 40%, 24%)',
                'primary-dark-blue': 'hsl(198, 62%, 26%)',
                'primary-moderate-cyan': 'hsl(168, 34%, 41%)',
                'neutral-dark-blue': 'hsl(212, 27%, 19%)',
                'neutral-very-grayish-blue': 'hsl(213, 9%, 39%)',
                'neutral-dark-grayish-blue': 'hsl(232, 10%, 55%)',
                'neutral-grayish-blue': 'hsl(210, 4%, 67%)',
                'white': 'hsl(0, 0%, 100%)'
            }
        },
    },
    plugins: [],
}