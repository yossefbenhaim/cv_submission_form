import z from 'zod';

export enum LoginFormKeys {
    FIRST_NAME = 'first_name',
    LEAST_NAME = 'least_name',
    EMAIL = 'email',
    CONTACT = 'contact',
    GENDER = 'gender',
    YOUR_BEST_SUBJECT = 'your_best_subject',
    UPLOAD_RESUME = 'upload_resume',
    ENTER_URL = 'enter_url',
    SELECT_YOUR_CHOICE = 'select_your_choice',
    ABOUT_YOUR_SELF = 'about_your_self',
}

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

enum Subject {
    MATH = 'math',
    SCIENCE = 'science',
    ENGLISH = 'english',
}

const LoginFormSchema = z.object({
    [LoginFormKeys.FIRST_NAME]: z.string(),
    [LoginFormKeys.LEAST_NAME]: z.string(),
    [LoginFormKeys.EMAIL]: z.string().email(),
    [LoginFormKeys.CONTACT]: z.number().min(9).max(10),
    [LoginFormKeys.GENDER]: z.nativeEnum(Gender),
    [LoginFormKeys.YOUR_BEST_SUBJECT]: z.nativeEnum(Subject),
    [LoginFormKeys.UPLOAD_RESUME]: z.string(),
    [LoginFormKeys.ENTER_URL]: z.string().url(),
    [LoginFormKeys.SELECT_YOUR_CHOICE]: z.string(),
    [LoginFormKeys.ABOUT_YOUR_SELF]: z.string(),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
export default LoginFormSchema;
