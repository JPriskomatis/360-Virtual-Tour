
/* This contains all the data we need about each hotspots
   Hotspots allow us to either travel to a different scene or
   they can display a small info panel with information
   If we don't want to display the info panel then we don't add the "infoText" parameter
*/

const hotspotsData = {

  //Example structure
  /**
   * "/images/image.jpg": [ //This is the current image that is showing
    {
      position: "1 1 -3",   //Position of the hotspot
      image: "/images/vader.png", // Clicking this goes to Vader
      color: "#b10000",
      text: "Vader",  //Text on the hotspot
      radius: 0.15,
      infoText: "Just an info panel, won't take us back to the other image",  //Text on the info panel when we hover the hotspot
    },
  ],
   */
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
      
      color: "#00ff00",
      text: "Back to forest",
      radius: 0.15,
      infoText: "Just an info panel, won't take us back to the other image",
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


/**
 * 09/12/2025 ΔΕΥΤΕΡΑ
 * 14/12/2025 ΚΥΡΙΑΚΗ
 * 17/12/2025 ΤΕΤΑΡΤΗ
 * 31/12/2025 ΤΕΤΑΡΤΗ
 * 04/01/2026 ΚΥΡΙΑΚΗ
 */