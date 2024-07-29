const express = require("express")
const zod = require("zod")
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const router = express.Router();

const signupBody = zod.object({
      username: zod.string().email(),
      firstname: zod.string(),
      lastname: zod.string(),
      password: zod.string().min(8)
})

const signinBody = zod.object({
      username: zod.string().email(),
      password: zod.string().min(8)
})

const updateBody = zod.object({
      firstname: zod.string(),
      lastname: zod.string(),
      password: zod.string().min(8)
})

router.post("/signup", async (req, res) => {
      try {
            const { success } = signupBody.safeParse(req.body);
            if (!success) {
                  return res.status(411).json({ message: "Incorrect inputs" });
            }

            const existingUser = await User.findOne({ username: req.body.username });

            if (existingUser) {
                  return res.status(411).json({ message: "Username already exists" });
            }

            const user = await User.create({
                  username: req.body.username,
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  password: req.body.password
            });

            const userId = user._id;

            /// ----- Create new account ------

            await Account.create({
                  userId,
                  balance: 1 + Math.random() * 10000
            })

            /// -----  ------

            const token = jwt.sign({ userId }, JWT_SECRET);

            res.send({
                  message: "User created successfully",
                  token
            });
      } catch (error) {
            console.error("Error in /signup endpoint:", error);
            res.status(500).json({ message: "Internal server error" });
      }
});


router.post("/signin", async (req, res) => {
      const { success } = signinBody.safeParse(req.body);
      if (!success) {
            return res.status(411).json({
                  message: "Incorrect inputs"
            })
      }

      const user = User.findOne({
            username: req.body.username,
            password: req.body.password
      })

      if (user) {
            const token = jwt.sign({
                  userId: user._id
            }, JWT_SECRET);

            res.send({
                  token
            })
            return;
      }

      res.status(411).json({
            message: "Error while logging in"
      })


})

router.put("/", authMiddleware, async (req, res) => {
      const { success } = updateBody.safeParse(req.body);
      if (!success) {
            return res.status(411).json({
                  message: "Incorrect inputs"
            })
      }

      await User.updateOne({
            _id: req.userId
      }, req.body)

      res.send({
            message: "Updated successfully"
      })
})

router.get("/bulk", async (req, res) => {
      const filter = req.query.filter || "";

      const users = await User.find({
            $or: [{
                  firstName: {
                        $regex: filter
                  }
            }, {
                  lastName: {
                        $regex: filter
                  }
            }]
      })

      res.json({
            user: users.map(user => ({
                  id: user._id,
                  username: user.username,
                  firstname: user.firstname,
                  lastname: user.lastname
            }))
      })
})


module.exports = router