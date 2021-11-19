const Joi = require("joi");

const joiRegister = Joi.object({
    sName: Joi.string().min(3).max(255).required(),
    sEmail: Joi.string()
        .required()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        }),
    sInstitution: Joi.string().max(255),
    sTypePlanted: Joi.string().required().max(255),
    sDescription: Joi.string().max(255),
    sPhoto: Joi.string().required().max(255),
    sCommunity: Joi.string().max(255),
    sDirection: Joi.string().required().max(255),
    sLatitude: Joi.string().required().max(255),
    sLongitude: Joi.string().required().max(255),
    nState: Joi.number().max(255),
    nRowState: Joi.number().max(255),
});

// joiRegister.validate();
// schema.validate({ username: "abc", birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }
// schema.validate({});
// // -> { value: {}, error: '"username" is required' }
// // Also -
// try {
//     const value = await schema.validateAsync({
//         username: "abc",
//         birth_year: 1994,
//     });
// } catch (err) {}

const validateFields = (req, res = response, next) => {
    // manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({
            ok: false,
            errors: errors.mapped(),
        });
    }
    next();
};

module.exports = {
    validateFields,
};
