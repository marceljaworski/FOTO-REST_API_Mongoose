export const postSchema = {
    type: "object",
    // required: ["url"],
    additionalProperties: false,
    properties: {
        title: { type: "string" },
        email: { type: "string", format: "email" },
        address: {
            type: "object",
            additionalProperties: false,
            properties: {
                street: { type: "string" },
                houseNummer: { type: "string" },
                zipCode: { type: "string" },
                city: { type: "string" },
                country: { type: "string" },
            },
        },
    },
};
export const getSchema = {
    type: "object",
    additionalProperties: true,
};
export const getAllSchema = {
    type: "object",
    additionalProperties: true,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: true,
};
