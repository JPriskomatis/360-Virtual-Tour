const hotspotsData = {
  "/images/image.jpg": [
    {
      position: "1 1 -3",
      image: "/images/vader.png", // Clicking this goes to Vader
      color: "#b10000",
      text: "Vader",
      radius: 0.15,
      
    },
  ],

  
  "/images/vader.png": [
    {
      position: "-1 1 -3",
      image: "/images/image.jpg", // Clicking this goes back
      color: "#00ff00",
      text: "Back to forest",
      radius: 0.15,
      infoText: "This has info text",
    },
    {
      position: "1 1 -3",
      image: "/images/image.jpg", // Clicking this goes back
      color: "#00ff00",
      text: "Back to forest",
      radius: 0.15,
    },
  ],
};

export default hotspotsData;
