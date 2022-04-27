import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Vui lòng nhập dưới 25 ký tự')
        .required('Vui lòng nhập Họ và tên đệm'),
        .matches =
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Vui lòng nhập dưới 25 ký tự')
        .required('Vui lòng nhập tên'),
})
