import { Formik } from "formik"
import * as Yup from "yup"

const CreateUser = () => {
    /* esquema de validacion */
    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Campo requerido')
            .email('Ingrese un correo electrónico válido')
            .max(50, 'El correo es demasiado largo'),
        username: Yup.string()
            .required('Campo requerido')
            .min(5, 'Username demasiado corto')
            .max(50, 'Username demasiado largo'),
        password: Yup.string()
            .required('Campo requerido')
            .min(5, 'La contraseña es demasiado corta')
            .max(50, 'La contraseña es demasiado larga')
    })

    const RegisterUser = (values) => {
        console.log('valores', values)
    }


    return (
        <Formik
            initialValues={{ email: '', password: '' , username: ''}}
            validationSchema={ValidationSchema} 
        >
            {({
                values, /* el valor de c/input */
                errors, /* ver si el usuario no cuple alguna regla */
                touched, /* detectar los clicks */
                handleChange, /* manejar los cambios de valor de c/input */
                handleBlur, /* maneja cuando el usuario deja de hacer foco en un input */
                isSubmitting,
                /* and other goodies */
            }) => (
                <form >
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button onClick={() => RegisterUser(values)} type="button" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default CreateUser