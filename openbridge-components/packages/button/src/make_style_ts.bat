SET OUTFILE="obc-button-css.ts"
SET INFILE="obc-button.css"

rm %OUTFILE%
echo import {css} from 'lit-element'; >> %OUTFILE%
echo export const style = css` >> %OUTFILE%
cat %INFILE% >> %OUTFILE%
echo `; >> %OUTFILE%
