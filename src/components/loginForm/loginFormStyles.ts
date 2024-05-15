import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    autocomplete: {
        backgroundColor: 'red',
        '& .MuiAutocomplete-root': {
            width: '100px !impotent',
        },
    },
}));

export default useStyles;
