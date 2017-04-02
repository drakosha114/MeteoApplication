import {
    cyan500,
    grey100,
    grey300,
    grey400,
    grey500,
    white,
    darkBlack,
    fullBlack
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#148ecb',
        primary2Color: '#d5d9e0',
        primary3Color: grey400,
        accent1Color: '#d5d9e0',
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
};