import Trial from "../models/Trial.js";

export const bookTrial = async (req, res) => {
  try {
    const { name, email, phone, date, time } = req.body;

    const trial = await Trial.create({
      name,
      email,
      phone,
      date,
      time,
    });
    console.log("Saved Trial:", trial);

    res.status(201).json({
      success: true,
      message: "Free Trial Booked Successfully!",
      data: trial,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Booking Failed",
    });
  }
};