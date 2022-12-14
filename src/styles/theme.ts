import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                webkitScrollbarTrack: 'black',
                webkitScrollbar: '12px',
                scrollBehavior: 'smooth',
                bg: '#0C0C0C',
                color: 'black',
            }
        }
    },
    breakpoints: {
        sm: '320px',
        msm: '425px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    }
})

