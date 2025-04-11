import dish1 from "../img/mobile/dish1-md.jpeg";
import dish2 from "../img/mobile/dish2-md.jpeg";
import dish3 from "../img/mobile/dish3-md.jpeg";
import dish4 from "../img/mobile/dish4-md.jpeg";
import dish5 from "../img/mobile/dish5-md.jpeg";
import dish6 from "../img/mobile/dish6-md.jpeg";
import dish7 from "../img/mobile/dish7-md.jpeg";
import dish8 from "../img/mobile/dish8-md.jpeg";
import dish9 from "../img/mobile/dish9-md.jpeg";
import dish10 from "../img/mobile/dish10-md.jpeg";

import dish1Lg from "../img/desktop/dish1-lg.jpeg";
import dish2Lg from "../img/desktop/dish2-lg.jpeg";
import dish3Lg from "../img/desktop/dish3-lg.jpeg";
import dish4Lg from "../img/desktop/dish4-lg.jpeg";
import dish5Lg from "../img/desktop/dish5-lg.jpeg";
import dish6Lg from "../img/desktop/dish6-lg.jpeg";
import dish7Lg from "../img/desktop/dish7-lg.jpeg";
import dish8Lg from "../img/desktop/dish8-lg.jpeg";
import dish9Lg from "../img/desktop/dish9-lg.jpeg";
import dish10Lg from "../img/desktop/dish10-lg.jpeg";

import dish1Xl from "../img/desktop/dish1-xl.jpeg";
import dish2Xl from "../img/desktop/dish2-xl.jpeg";
import dish3Xl from "../img/desktop/dish3-xl.jpeg";
import dish4Xl from "../img/desktop/dish4-xl.jpeg";
import dish5Xl from "../img/desktop/dish5-xl.jpeg";
import dish6Xl from "../img/desktop/dish6-xl.jpeg";
import dish7Xl from "../img/desktop/dish7-xl.jpeg";
import dish8Xl from "../img/desktop/dish8-xl.jpeg";
import dish9Xl from "../img/desktop/dish9-xl.jpeg";
import dish10Xl from "../img/desktop/dish10-xl.jpeg";

import italian from "../img/italian.jpeg";
import japanese from "../img/japanese.jpeg";
import indian from "../img/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

/**
 *
 * @type {Array<Project>}
 */
export const DISHES = [
  {
    id: 1,
    image: {
      md: dish1,
      lg: dish1Lg,
      xl: dish1Xl,
    },
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    id: 2,
    image: {
      md: dish2,
      lg: dish2Lg,
      xl: dish2Xl,
    },
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    id: 3,
    image: {
      md: dish3,
      lg: dish3Lg,
      xl: dish3Xl,
    },
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    id: 4,
    image: {
      md: dish4,
      lg: dish4Lg,
      xl: dish4Xl,
    },
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    id: 5,
    image: {
      md: dish5,
      lg: dish5Lg,
      xl: dish5Xl,
    },
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    id: 6,
    image: {
      md: dish6,
      lg: dish6Lg,
      xl: dish6Xl,
    },
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    id: 7,
    image: {
      md: dish7,
      lg: dish7Lg,
      xl: dish7Xl,
    },
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    id: 8,
    image: {
      md: dish8,
      lg: dish8Lg,
      xl: dish8Xl,
    },
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    id: 9,
    image: {
      md: dish9,
      lg: dish9Lg,
      xl: dish9Xl,
    },
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    id: 10,
    image: {
      md: dish10,
      lg: dish10Lg,
      xl: dish10Xl,
    },
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://instagram.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
