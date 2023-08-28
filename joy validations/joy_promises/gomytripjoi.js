const joi = require("joi");
const { statusCode } = require("./statusCode");
// schema for normal signup

const validation = {
  signUpValidation: async (req, res, next) => {
    // schema for signup

    const mobileSchema = joi.object({
      first_name: joi.any().label("first_name").allow(""),
      last_name: joi.any().label("last_name").allow(""),
      gender: joi.any().label("gender").allow(""),
      google_id: joi.any().label("google_id").allow(""),
      apple_id: joi.any().label("apple_id").allow(""),
      email: joi.any().label("email").allow(""),
      country_code: joi
        .number()
        .required()
        .label("country_code")
        .options({ convert: true })
        .messages({
          "any.required": "Country Code is a required field",
          "number.empty": "Country Code is not allowed to be empty",
          "number.base": "Country Code must be a number",
        }),
      mobile: joi.number().required().label("mobile").messages({
        "number.empty": "Mobile Number is not allowed to be empty",
        "any.required": "Mobile Number is a required field",
      }),

      platform: joi
        .number()
        .integer()
        .valid(0, 1, 2, "0", "1", "2")
        .required()
        .label("platform")
        .messages({
          "string.empty": "Platform is not allowed to be empty",
          "any.required": "Platform is a required field",
          "any.only": "Invalid Platform",
        }),

      device_id: joi.string().required().label("device_id").allow("").messages({
        "any.required": "device_id is a required field",
      }),

      type: joi.any().label("type").required().allow(1, "1"),
    });
    const emailSchema = joi.object({
      first_name: joi.any().label("first_name").allow(""),
      last_name: joi.any().label("last_name").allow(""),
      gender: joi.any().label("gender").allow(""),
      google_id: joi.any().label("google_id").allow(""),
      apple_id: joi.any().label("apple_id").allow(""),
      mobile: joi.any().label("mobile").allow(""),
      country_code: joi.any().label("country_code").allow(""),

      email: joi.string().email().label("email").required().messages({
        "string.empty": "Email is not allowed to be empty",
        "any.required": "Email is a required field",
        "string.email": "Invalid Email",
      }),
      platform: joi
        .number()
        .integer()
        .valid(0, 1, 2, "0", "1", "2")
        .required()
        .label("platform")
        .messages({
          "string.empty": "Platform is not allowed to be empty",
          "any.required": "Platform is a required field",
          "any.only": "Invalid Platform",
        }),

      device_id: joi.string().required().label("device_id").allow("").messages({
        "any.required": "device_id is a required field",
      }),

      type: joi.any().label("type").required().allow(2, "2"),
    });

    const googleLoginSchema = joi.object({
      gender: joi.any().label("gender").allow(""),
      apple_id: joi.any().label("apple_id").allow(""),
      mobile: joi.any().label("mobile").allow(""),
      country_code: joi.any().label("country_code").allow(""),

      first_name: joi
        .string()
        .required()
        .label("first_name")
        .allow("")
        .messages({
          "string.empty": "First Name is not allowed to be empty",
          "any.required": "First Name is a required field",
        }),

      last_name: joi.string().required().label("last_name").allow("").messages({
        "string.empty": "Last Name is not allowed to be empty",
        "any.required": "Last Name is a required field",
      }),
      platform: joi
        .number()
        .integer()
        .valid(0, 1, 2, "0", "1", "2")
        .required()
        .label("platform")
        .messages({
          "string.empty": "Platform is not allowed to be empty",
          "any.required": "Platform is a required field",
          "any.only": "Invalid Platform",
        }),
      email: joi.string().required().email().label("email").messages({
        "string.empty": "Email is not allowed to be empty",
        "any.required": "Email is a required field",
        "string.email": "Invalid Email",
      }),
      device_id: joi.string().required().label("device_id").allow("").messages({
        "any.required": "Device Id is a required field",
      }),
      google_id: joi.string().label("google_id").required().messages({
        "string.empty": "Google Id is not allowed to be empty",
        "any.required": "Google Id is a required field",
      }),
      type: joi.any().label("type").required().allow(3, "3"),
    });
    const appleLoginSchema = joi.object({
      first_name: joi.any().label("first_name").allow(""),
      last_name: joi.any().label("last_name").allow(""),
      gender: joi.any().label("gender").allow(""),
      google_id: joi.any().label("google_id").allow(""),
      mobile: joi.any().label("mobile").allow(""),
      country_code: joi.any().label("country_code").allow(""),

      type: joi.any().label("type").required().allow(4, "4"),
      platform: joi
        .number()
        .integer()
        .valid(0, 1, 2, "0", "1", "2")
        .required()
        .label("platform")
        .messages({
          "string.empty": "Platform is not allowed to be empty",
          "any.required": "Platform is a required field",
          "any.only": "Invalid Platform",
        }),
      device_id: joi.string().required().label("device_id").allow(""),
      apple_id: joi.string().label("apple_id").required().messages({
        "string.empty": "Apple ID is not allowed to be empty",
        "any.required": "Apple ID is a required field",
        "string.email": "Invalid Email",
      }),
      email: joi.string().required().email().label("email").allow("").messages({
        "string.empty": "Email is not allowed to be empty",
        "any.required": "Email is a required field",
        "string.email": "Invalid Email",
      }),
    });

    const { type } = req.body;
    // console.log(parseInt(type))
    // social login 0-normal login 1-googleLoign
    switch (parseInt(type)) {
      case 1:
        var { error } = mobileSchema.validate(req.body);
        if (error) {
          console.log(error);
          const message = error.details[0].message;
          return res.json(statusCode(0, message));
        }
        return next();
      case 2:
        var { error } = emailSchema.validate(req.body);
        if (error) {
          const message = error.details[0].message;
          return res.json(statusCode(0, message));
        }
        return next();

      case 3:
        var { error } = googleLoginSchema.validate(req.body);
        if (error) {
          const message = error.details[0].message;
          return res.json(statusCode(0, message));
        }
        return next();
      case 4:
        var { error } = appleLoginSchema.validate(req.body);
        if (error) {
          const message = error.details[0].message;
          return res.json(statusCode(0, message));
        }
        return next();
      default:
        return res.json(statusCode(0, "Invalid  type."));
    }
  },
  addTravellerValidation: async (req, res, next) => {
    const schema = joi.object({
      user_id: joi.number().integer().required().label("user_id").messages({
        "any.required": `User Id is a required field`,
        "string.empty": `User Id is not allowed to be empty`,
        "number.base": "Invalid user id",
      }),
      first_name: joi.string().required().label("first_name").messages({
        "any.required": `First Name is a required field`,
        "string.empty": `First Name is not allowed to be empty`,
      }),
      last_name: joi.string().required().label("last_name").messages({
        "any.required": `Last Name is a required field`,
        "string.empty": `Last Name is not allowed to be empty`,
      }),
      gender: joi
        .any()
        .allow(1, 2, 3, "1", "2", "3", "")
        .label("gender")
        .messages({
          "any.only": `Invalid gender`,
          "string.empty": "Gender is not allowed to be empty",
          "any.required": "Gender is a required field",
        }),
      dob: joi
        .string()
        .regex(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/)
        .label("dob")
        .allow("")
        .messages({
          "any.required": `DOB is a required field`,
          "string.empty": `DOB is not allowed to be empty`,
          "string.pattern.base": `Invalid date format DD/MM/YYYY`,
        }),
      passport_expiry: joi
        .string()
        .regex(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/)
        .allow("")
        .label("passport_expiry")
        .messages({
          "any.required": `Passport Expiry is a required field`,
          "string.empty": `Passport Expiry is not allowed to be empty`,
          "string.pattern.base": `Invalid date format DD/MM/YYYY`,
        }),
      passport: joi.string().allow("").label("passport").messages({
        "any.required": `Passport is a required field`,
        "string.empty": `Passport is not allowed to be empty`,
      }),
      cover_pic: joi.any().allow("").label("cover_pic"),

      traveller_id: joi.any().allow("").label("traveller_id"),
    });
    var { error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  searchValidation: async (req, res, next) => {
    const val1 = joi.object({
      AdultCount: joi
        .number()
        .integer()
        .required()
        .label("AdultCount")
        .min(0)
        .messages({
          "any.required": `AdultCount is a required field`,
          "string.empty": `AdultCount is not allowed to be empty`,
        }),
      ChildCount: joi
        .number()
        .integer()
        .required()
        .label("ChildCount")
        .min(0)
        .messages({
          "any.required": `ChildCount is a required field`,
          "string.empty": `ChildCount is not allowed to be empty`,
        }),
      InfantCount: joi
        .number()
        .integer()
        .required()
        .label("InfantCount")
        .min(0)
        .messages({
          "any.required": `InfantCount is a required field`,
          "string.empty": `InfantCount is not allowed to be empty`,
        }),
      DirectFlight: joi.boolean().label("DirectFlight").required().messages({
        "string.empty": "DirectFlight is not allowed to be empty",
        "any.required": "DirectFlight is a required field",
      }),
      OneStopFlight: joi.boolean().label("OneStopFlight").messages({
        "string.empty": "OneStopFlight is not allowed to be empty",
        "any.required": "OneStopFlight is a required field",
      }),
      JourneyType: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .label("JourneyType")
        .required()
        .messages({
          "string.empty": "JourneyType is not allowed to be empty",
          "any.required": "JourneyType is a required field",
        }),
      PreferredAirlines: joi
        .any()
        .required()
        .label("PreferredAirlines")
        .allow("", null),
      Segments: joi.any().label("Segments"),
    });
    // Define the schema for each object in the segment array
    const segmentVal = joi.object({
      Origin: joi.string().required().label("origin"),
      Destination: joi.string().required().label("destination"),
      FlightCabinClass: joi
        .number()
        .integer()
        .label("FlightCabinClass")
        .min(1)
        .max(6),
      PreferredDepartureTime: joi
        .string()
        .regex(/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)
        .label("PreferredDepartureTime")
        .messages({
          "string.pattern.base": "INVALID DATE FORMAT DD/MM//YYYY",
        }),
      PreferredArrivalTime: joi
        .string()
        .regex(/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)
        .label("PreferredArrivalTime")
        .messages({
          "string.pattern.base": "INVALID DATE FORMAT DD/MM//YYYY",
        }),

      // PreferredDepartureTime:  joi.date().label("PreferredDepartureTime")  ,
      // PreferredArrivalTime :  joi.date().integer().label("PreferredArrivalTime")  ,
    });

    // validate the object except segments key
    var { error } = val1.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    // Define the schema for the array of objects
    const arraySchema = joi.array().items(segmentVal);

    // Validate the segments array of objects against the schema
    var { error, value } = arraySchema.validate(req.body.Segments);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    console.log("search validation passed");
    return next();
  },
};

module.exports = validation;
