import Member from "../models/Member.js";

export const registerMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json({
      success: true,
      message: "Membership Registered Successfully!",
      data: member,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
    });
  }
};