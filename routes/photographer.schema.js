export const postSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string" }
        // address: {
        //     type: "object",
        //     additionalProperties: false,
        //     properties: {
        //         street: { type: "string" },
        //         houseNumber: { type: "string" },
        //         zipCode: { type: "string" },
        //         city: { type: "string" },
        //         country: { type: "string" },
        //     },
        // },
    },
};
export const getSchema = {
    type: "object",
    additionalProperties: false,
};
export const getAllSchema = {
    type: "object",
    additionalProperties: false,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: false,
};
