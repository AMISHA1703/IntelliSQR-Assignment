const User = require("../models/user")
const { z } = require("zod")
const bcrypt = require("bcryptjs");

// define zod schema for input validation

const signUpSchema = z.object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    password: z
        .string()
});
async function handleUserSignUp(req, res) {

    try {
        // console.log(req.body)

        // Validate request body using Zod
        const result = signUpSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(411).json({ errors: result.error.format() });
        }

        const { fullName, email, password } = result.data;


        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(" Email already registered:", email);
            return res.status(400).json({ error: "User already exists" });
        }

         //one way and another directly in model  // **Hash the password before saving**
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // for new user to save in DB
        const newUser = new User({ fullName, email, password:hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }


}

// define zod schema for input validation
const loginSchema = z.object({
    email: z.string().email({ mesagge: "Invalid email Formate" }),
    password: z.string().min(6, { message: "Password must be at least 5 characters long" })
})


async function handleUserLogin(req, res) {
    try {

        //validate request data
        const result = loginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({ error: result.error.format() });
        }
        const { email, password } = result.data;

        // finding user in db
        const user = await User.findOne({ email });
        // console.log(email, password)
        if (!user) {

            return res.satus(400).json({
                error: " Invalid email or password "

            })
        }


        // **Compare hashed password**
          const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        return res.status(200).json({ message: "Login successfully", user })

    }
    catch (error) {

        return res.status(500).json({ error: "Server error" });
    }


}
module.exports = {
    handleUserSignUp,
    handleUserLogin

}

