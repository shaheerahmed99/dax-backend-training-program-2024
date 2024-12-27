import { z } from "zod";

/**
 * Middleware for validating the request body using a Zod schema.
 * @param schema - The Zod schema to validate the request body against.
 * @returns Middleware function for Express.
 */

 

const validateParam = (paramSchema) => {
    return (req, res, next) => {
        try {
            if (paramSchema && req.params) {
                paramSchema.parse(req.params);
            }
            next(); // Proceed to the next middleware or route handler
        } catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json({
                    error: 'Validation Error',
                    details: err.errors,
                });
            } else {
                next(err);
            }
        }
    };
};


const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            // Validate the request body
            if (schema) {
                schema.parse(req.body);
            }
            next(); // Proceed to the next middleware or route handler

        } catch (err) {
            // Handle validation errors
            if (err instanceof z.ZodError) {
                res.status(400).json({
                    error: 'Validation Error',
                    details: err.errors,
                });
            } else {
                next(err);
            }
        }
    };
};

export {validateBody,validateParam};
