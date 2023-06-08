/*export const validContact = new RegExp(
    '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,8})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$'
); */

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const validContact = new RegExp(
    '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,12}$'
);

