import express from "express"
import User from "./userSchema"
const userRouter = express.Router()
// 1
userRouter.post("/", async (req, res, next) => {
    try {
        if (!req.body.firstName || !req.body.lastName || !req.body.email) {
            res.status(400).send("Missing required fields")
        } else {
            const user = await User.create(req.body)
            res.send(user)
        }
    } catch (error) {
        next(error)
    }
})
// 2
userRouter.get("/", async (req, res, next) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        next(error)
    }
})
// 3
userRouter.get("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        next(error)
    }
})
// 4
userRouter.put("/:id", async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(user)
    } catch (error) {
        next(error)
    }
})
// 5
userRouter.delete("/:id", async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send("User deleted")
    } catch (error) {
        next(error)
    }
})
export default userRouter