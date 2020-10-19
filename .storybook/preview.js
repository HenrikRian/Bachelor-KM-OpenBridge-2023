import '!style-loader!css-loader!openbridge-css/dist/css/openbridge.css';

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Theme color',
        defaultValue: 'day',
        toolbar: {
            icon: 'globe',
            items: ['bright', 'day', 'dusk', 'night'],
        },
    },
};

const withThemeProvider = (Story, context) => {
    document.documentElement.setAttribute('theme', context.globals.theme);
    return Story();
};
export const decorators = [withThemeProvider];


export const parameters = {
    docs: {
        layout: 'centered',
    },
};
