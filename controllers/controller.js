const axios = require("axios");

const success = async (req, res) => {
  try {
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: process.env.NASA_API,
      },
    });

    const imageOfTheDay = response.data;
    res.render("pages/photo", {
      root: "public",
      imageUrl: imageOfTheDay.url,
      explanation: imageOfTheDay.explanation,
    });
  } catch (error) {
    console.error("Error fetching NASA image of the day:", error);
    res
      .status(500)
      .send("An error occurred while fetching the NASA image of the day.");
  }
};

module.exports = { success };
