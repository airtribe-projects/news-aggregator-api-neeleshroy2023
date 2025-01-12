const User = require("../../database/models/user");

const getPreferences = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const userDetail = await User.findOne({ email: user.email });
    if (!userDetail) {
      return res.status(404).json({ error: "User details not found." });
    }
    return res.status(200).json({ preferences: userDetail.preferences });
  } catch (error) {
    console.error("Error getting preferences:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const setPreferences = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const userDetail = await User.findOne({ email: user.email });
    if (!userDetail) {
      return res.status(404).json({ error: "User details not found." });
    }
    userDetail.preferences = req.body.preferences;
    await userDetail.save();
    return res.status(200).json({ preferences: userDetail.preferences });
  } catch (error) {
    console.error("Error setting preferences:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = {
  getPreferences,
  setPreferences,
};
