
/* This contains all the data we need about each hotspots
   Hotspots allow us to either travel to a different scene or
   they can display a small info panel with information
   If we don't want to display the info panel then we don't add the "infoText" parameter
*/

import { image } from "motion/react-client";

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
      infoTitle: "Room 102", //Title of the hotspot
      infoText: "Just an info panel, won't take us back to the other image",  //Text on the info panel when we hover the hotspot
    },
  ],
   */
  "/images/image.jpg": [
    {
      position: "1 1 -3",
      image: "/images/vader.png",
      text: "!",
      iconImage: "./images/enter.png",
      infoTitle: "Κύρια Είσοδος",
      //infoText: "Σας καλωσορίζουμε στην ιστοσελίδα της Σχολής Προγραμματιστών Ηλεκτρονικών Υπολογιστών (ΣΠΗΥ). \n Θεωρούμε την επαφή μας με το κοινό ιδιαίτερα σημαντική.\n \n Για το λόγο αυτό με την παρουσία μας στο διαδίκτυο παρέχουμε πληροφορίες για την αποστολή, την οργάνωση, την ιστορία, την εκπαίδευση και εν γένει τις δραστηριότητες της Σχολής."
    },
  ],

  
  "/images/vader.png": [
    {
      position: "-1 1 -3",
      

      iconImage: "./images/info.png",
      infoTitle: "Καλώς ήλθατε στην ιστοσελίδα της Σ.Π.Η.Υ",
      infoText: "Σας καλωσορίζουμε στην ιστοσελίδα της Σχολής Προγραμματιστών Ηλεκτρονικών Υπολογιστών (ΣΠΗΥ). \n Θεωρούμε την επαφή μας με το κοινό ιδιαίτερα σημαντική.\n \n Για το λόγο αυτό με την παρουσία μας στο διαδίκτυο παρέχουμε πληροφορίες για την αποστολή, την οργάνωση, την ιστορία, την εκπαίδευση και εν γένει τις δραστηριότητες της Σχολής."
    },
    {
      position: "1 1 -3",

      iconImage: "./images/enter.png",
      infoTitle: "Δευτερο hotspot!",
      infoText: "Αν το πατήσεις αυτό θα σε πάει στην προηγούμενη εικόνα!"

    },
  ],

};

export default hotspotsData;

