export const postSchema = {
    type: "object",
    properties: {
        price: { type: "number" },
        date: { type: "string" },
        url: { type: "string" },
        theme: { type: "string" },
    }
}
export const getSchema = {
    type: "object",
    additionalProperties: false,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: false,
};
