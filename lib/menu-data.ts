export type MenuCategory =
  | "chicken"
  | "fish"
  | "meat"
  | "carbs"
  | "salads"
  | "sauces"
  | "desserts"
  | "drinks"

export interface MenuItem {
  id: string
  nameEn: string
  nameAr: string
  category: MenuCategory
  price: number
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
  per100g?: boolean
  image: string
}

export const menuItems: MenuItem[] = [
  // Chicken
  { id: "creamy-chicken", nameEn: "Creamy Chicken", nameAr: "دجاج بالكريمة", category: "chicken", price: 28, calories: 320, protein: 38, carbs: 6, fat: 14, image: "/grilled-creamy-chicken-breast-healthy-plate.png" },
  { id: "kanto-chicken", nameEn: "Kanto Chicken", nameAr: "دجاج كنتو", category: "chicken", price: 28, calories: 310, protein: 37, carbs: 5, fat: 13, image: "/spicy-kanto-chicken-healthy-plate.png" },
  { id: "mushroom-chicken", nameEn: "Mushroom Chicken", nameAr: "دجاج مشروم", category: "chicken", price: 30, calories: 330, protein: 39, carbs: 7, fat: 15, image: "/mushroom-chicken-healthy-plate.png" },
  { id: "moutchia-chicken", nameEn: "Moutchia Chicken", nameAr: "دجاج موتشية", category: "chicken", price: 30, calories: 340, protein: 38, carbs: 8, fat: 16, image: "/moutchia-chicken-healthy-plate.png" },
  { id: "pesto-chicken", nameEn: "Pesto Chicken", nameAr: "دجاج بستو", category: "chicken", price: 32, calories: 350, protein: 40, carbs: 6, fat: 17, image: "/pesto-chicken-green-sauce-healthy-plate.png" },
  { id: "bbq-chicken", nameEn: "BBQ Chicken", nameAr: "دجاج بارفيكيو", category: "chicken", price: 30, calories: 360, protein: 39, carbs: 12, fat: 14, image: "/bbq-chicken-healthy-plate.png" },
  { id: "curry-chicken", nameEn: "Curry Chicken", nameAr: "دجاج كاري", category: "chicken", price: 30, calories: 335, protein: 38, carbs: 9, fat: 15, image: "/curry-chicken-healthy-plate.png" },
  { id: "masala-chicken", nameEn: "Masala Chicken", nameAr: "دجاج ماسلا", category: "chicken", price: 30, calories: 340, protein: 39, carbs: 8, fat: 15, image: "/masala-chicken-indian-spices-healthy-plate.png" },
  { id: "grilled-chicken", nameEn: "Grilled Chicken", nameAr: "دجاج مشوي", category: "chicken", price: 26, calories: 280, protein: 42, carbs: 2, fat: 9, image: "/grilled-chicken-breast-healthy-plate.png" },
  { id: "tandoori-chicken", nameEn: "Tandoori Chicken", nameAr: "دجاج تندوري", category: "chicken", price: 30, calories: 320, protein: 40, carbs: 6, fat: 13, image: "/tandoori-chicken-red-spices-healthy-plate.png" },
  { id: "peanut-chicken", nameEn: "Peanut Chicken", nameAr: "دجاج فول سوداني", category: "chicken", price: 32, calories: 380, protein: 38, carbs: 10, fat: 20, image: "/peanut-chicken-healthy-plate.png" },
  // Fish & seafood
  { id: "lemon-fish", nameEn: "Lemon Fish Fillet", nameAr: "فيليه سمك بالليمون", category: "fish", price: 35, calories: 260, protein: 36, carbs: 3, fat: 10, image: "/lemon-fish-fillet-healthy-plate.png" },
  { id: "shrimp-rose", nameEn: "Shrimp Rose Sauce", nameAr: "روبيان رود صوص", category: "fish", price: 40, calories: 290, protein: 34, carbs: 8, fat: 12, image: "/shrimp-rose-sauce-healthy-plate.png" },
  { id: "curry-shrimp", nameEn: "Curry Shrimp", nameAr: "روبيان كاري", category: "fish", price: 40, calories: 280, protein: 33, carbs: 7, fat: 11, image: "/curry-shrimp-healthy-plate.png" },
  // Meat
  { id: "meat-balls", nameEn: "Meat Balls", nameAr: "كرات اللحم", category: "meat", price: 35, calories: 360, protein: 34, carbs: 9, fat: 20, image: "/beef-meatballs-tomato-sauce-healthy-plate.png" },
  // Carbs (per 100g)
  { id: "white-rice", nameEn: "White Rice", nameAr: "رز أبيض", category: "carbs", price: 8, calories: 130, protein: 3, carbs: 28, fat: 0, per100g: true, image: "/white-rice-bowl.png" },
  { id: "red-rice", nameEn: "Red Rice", nameAr: "رز أحمر", category: "carbs", price: 8, calories: 120, protein: 3, carbs: 25, fat: 1, per100g: true, image: "/red-brown-rice-bowl.png" },
  { id: "boiled-potato", nameEn: "Boiled Potato", nameAr: "بطاطس مسلوق", category: "carbs", price: 6, calories: 87, protein: 2, carbs: 20, fat: 0, per100g: true, image: "/boiled-potatoes-healthy.png" },
  { id: "white-pasta", nameEn: "White Sauce Pasta", nameAr: "باستا وايت صوص", category: "carbs", price: 12, calories: 180, protein: 6, carbs: 30, fat: 4, per100g: true, image: "/white-sauce-pasta-healthy.png" },
  { id: "red-pasta", nameEn: "Red Sauce Pasta", nameAr: "باستا رد صوص", category: "carbs", price: 12, calories: 160, protein: 6, carbs: 30, fat: 2, per100g: true, image: "/red-sauce-pasta-tomato-healthy.png" },
  // Salads
  { id: "caesar-salad", nameEn: "Caesar Salad", nameAr: "سلطة سيزر", category: "salads", price: 65, calories: 220, protein: 12, carbs: 10, fat: 14, image: "/caesar-salad-fresh-healthy.png" },
  { id: "vegetable-salad", nameEn: "Vegetable Salad", nameAr: "سلطة خضار", category: "salads", price: 45, calories: 110, protein: 4, carbs: 14, fat: 5, image: "/fresh-vegetable-salad-healthy.png" },
  { id: "arugula-salad", nameEn: "Arugula Salad", nameAr: "سلطة جرجير", category: "salads", price: 30, calories: 90, protein: 3, carbs: 8, fat: 5, image: "/arugula-salad-fresh-healthy.png" },
  // Sauces
  { id: "caesar-sauce", nameEn: "Caesar Diet Sauce", nameAr: "سيزر دايت", category: "sauces", price: 2, calories: 25, protein: 1, carbs: 2, fat: 2, image: "/caesar-diet-sauce-cup.png" },
  { id: "tahini-sauce", nameEn: "Tahini Sauce", nameAr: "صوص طحينة", category: "sauces", price: 2, calories: 60, protein: 2, carbs: 3, fat: 5, image: "/tahini-sauce-cup.png" },
  { id: "zero-hot", nameEn: "Zero Hot Sauce", nameAr: "شطة زيرو", category: "sauces", price: 1, calories: 5, protein: 0, carbs: 1, fat: 0, image: "/hot-sauce-cup-red.png" },
  { id: "ranch-sauce", nameEn: "Ranch Sauce", nameAr: "صوص رانش", category: "sauces", price: 2, calories: 70, protein: 1, carbs: 2, fat: 7, image: "/ranch-sauce-cup-white.png" },
  // Desserts
  { id: "izzo", nameEn: "Izzo", nameAr: "إيزو", category: "desserts", price: 100, calories: 250, protein: 20, carbs: 25, fat: 8, image: "/protein-dessert-izzo-healthy.png" },
  { id: "whey-protein", nameEn: "Whey Protein", nameAr: "واي بروتين", category: "desserts", price: 11, calories: 120, protein: 24, carbs: 3, fat: 1, image: "/whey-protein-shake-cup.png" },
  { id: "nitro", nameEn: "Nitro", nameAr: "نيترو", category: "desserts", price: 9, calories: 90, protein: 5, carbs: 12, fat: 2, image: "/nitro-protein-dessert.png" },
  { id: "oat-dessert", nameEn: "Oat Dessert", nameAr: "حلا شوفان", category: "desserts", price: 12, calories: 200, protein: 8, carbs: 30, fat: 6, image: "/oat-dessert-healthy-bowl.png" },
  // Drinks
  { id: "pepsi-diet", nameEn: "Pepsi Diet", nameAr: "بيبسي دايت", category: "drinks", price: 3, calories: 0, image: "/diet-cola-can.png" },
  { id: "zero-diet", nameEn: "Zero Diet", nameAr: "زيرو دايت", category: "drinks", price: 3, calories: 0, image: "/zero-soda-can.png" },
  { id: "7up-diet", nameEn: "7UP Diet", nameAr: "سفن دايت", category: "drinks", price: 3, calories: 0, image: "/diet-lemon-lime-soda-can.png" },
  { id: "serapt", nameEn: "Serapt", nameAr: "سيرابت", category: "drinks", price: 3, calories: 0, image: "/sparkling-water-can.png" },
  { id: "water", nameEn: "Water", nameAr: "ماء", category: "drinks", price: 1, calories: 0, image: "/water-bottle-clear.png" },
  { id: "local-blender", nameEn: "Local Blender", nameAr: "بلدي بلدر", category: "drinks", price: 8, calories: 60, image: "/fresh-juice-blender-drink.png" },
  { id: "abe", nameEn: "ABE", nameAr: "ABE", category: "drinks", price: 18, calories: 5, image: "/energy-drink-bottle.png" },
]

export const subscriptionPricing: Record<
  number,
  Record<number, { single: number; double: number; triple: number }>
> = {
  10: {
    100: { single: 100, double: 280, triple: 420 },
    150: { single: 150, double: 340, triple: 510 },
    200: { single: 210, double: 420, triple: 630 },
  },
  15: {
    100: { single: 210, double: 420, triple: 630 },
    150: { single: 255, double: 510, triple: 765 },
    200: { single: 315, double: 630, triple: 945 },
  },
  20: {
    100: { single: 280, double: 560, triple: 840 },
    150: { single: 340, double: 680, triple: 1020 },
    200: { single: 420, double: 840, triple: 1260 },
  },
  25: {
    100: { single: 350, double: 700, triple: 1050 },
    150: { single: 425, double: 850, triple: 1275 },
    200: { single: 525, double: 1050, triple: 1575 },
  },
}

export const BRAND = {
  phone: "0579741866",
  whatsapp: "https://wa.me/966579741866",
}
