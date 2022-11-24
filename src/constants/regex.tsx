export const NAME_REGEX = /^[a-zA-Z\s]+$/;
export const EMAIL_REGEX = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
export const AGE_REGEX = /^(1[89]|[2-9]\d)$/;    //limit - 18 to 99