//instead of doing this 
let value = someValue !== null && someValue !== undefined ? someValue : 'default';

//do this
let value = someValue ?? 'default';
