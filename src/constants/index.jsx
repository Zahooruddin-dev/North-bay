import dish1 from "../assets/menu/Avacado toast.webp";
import dish2 from "../assets/menu/putine.webp";
import dish3 from "../assets/menu/pancake.webp";
import dish4 from "../assets/menu/Deluxe Burger.webp";
import dish5 from "../assets/menu/French Toast - Egg Sandwich.webp";
import dish6 from "../assets/menu/Loaded Fries.webp";
import dish7 from "../assets/menu/Mac and Cheese with Bacon.webp";
import dish8 from "../assets/menu/Parfait.webp";
import dish9 from "../assets/menu/Spicy chicken wrap.webp";
import dish10 from "../assets/menu/caption.jpg";



import italian from "../assets/menu/burger.jpeg";
import japanese from "../assets/menu/Blueberry-Pancakes-9.jpg";
import indian from "../assets/menu/poutine-1-3.jpg";

import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Avacado toast",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    image: dish2,
    title: "Poutine",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "pancake",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Deluxe Burger",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "French Toast - Egg Sandwich",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish10,
    title: "Beef Burrito",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Mac and Cheese with Bacon",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "breakfast sandwich",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    image: dish9,
    title: "Spicy chicken wrap",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish6,
    title: "Loaded Fries",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At North Bay, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Casual Dining",
    description:
      "Savor the flavors of our casual dining menu, offering a mix of classic comfort foods and modern dishes for a relaxed and enjoyable experience.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Desert",
    description:
      "Indulge in the art of exquisite desserts, offering a perfect blend of classic flavors and modern creations for a truly delightful experience.",
  },
  {
    number: "03.",
    image: indian,
    title: "Canadian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Romeo Badulkhan",
  profession: "Food Reviewer",
  content:
    "“North Bay Diner in Luxembourg offered a delightful experience from start to finish. The staff was attentive and friendly, adding to the welcoming atmosphere. Each dish we tried was expertly prepared, bursting with flavor and made with fresh, high-quality ingredients. The portion sizes were generous, ensuring nobody left hungry. Overall, North Bay Diner exceeded expectations, delivering both great food and exceptional service. Highly recommended for anyone craving a delicious meal in Luxembourg!”",
};

export const CONTACT = [
  { key: "address", value: "Address: 23 Rue Nicolas Martha, Luxembourg, Luxembourg" },
  { key: "phone", value: "Phone: +352 24 87 38 78" },
  { key: "email", value: "Email: northbaylux@gmail.com" },
];export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/NorthBayLuxembourg",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/p/C7FRee-t2Ao/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "tel:+35224873878", // Added "tel:" scheme
    icon: <FaPhone fontSize={30} className="hover:opacity-80" />,
  },
];
