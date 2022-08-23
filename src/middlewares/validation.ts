import { checkSchema } from "express-validator"
export const userCreationValidator = checkSchema({
    firstName: {
        in: ['body'],
        isLength: {
            options: { min: 1 },
            errorMessage: 'You must provide a first name'
        }
    },
    lastName: {
        in: ['body'],
        isLength: {
            options: { min: 1 },
            errorMessage: 'You must provide a last name'
        }
    },
    email: {
        in: ['body'],
        isLength: {
            options: { min: 1 },
            errorMessage: 'You must provide a valid email'
        }
    }
})