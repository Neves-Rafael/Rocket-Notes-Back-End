module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "secret",
        expiresIn: "1d"
    }
}