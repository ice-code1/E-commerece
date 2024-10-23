const constants = {
    DATABASE_URI: process.env.DATABASE_URI,

    DATABASE: {
        ITEM: "item",
    },

    USER_TYPES: {
        USER:"user",
        AGENT:"agent"
    },

    MESSAGES: {
        FETCHED:"Resource fetched successfully",
        UPDATED:"Resource updated successfully",
        ERROR:"Resource error",
        CREATED:"Resource created successfully",
        DELETED:"Resource fetched successfully",
    }
};

module.exports = constants