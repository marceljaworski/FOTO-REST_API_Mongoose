export const postSchema = {
    type: "object",
    properties: {
        price: { type: "number" },
        date: { type: "string" },
        url: { type: "string" },
        theme: { type: "string" },
    },
    additionalProperties: true,
}
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
