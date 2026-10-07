// Add a food by listing its common names, category, and a plain-language reason.
// Exact matching avoids guessing that "apple pie" is the same as "apple".
const foods = [
  { name: 'Apple', aliases: ['apple', 'apples', '사과'], status: 'not-junk', emoji: '🍎', explanation: 'A whole apple provides fiber and naturally occurring nutrients. It is a simple, nourishing everyday snack.' },
  { name: 'Banana', aliases: ['banana', 'bananas', '바나나'], status: 'not-junk', emoji: '🍌', explanation: 'Bananas provide fiber and potassium, with natural sugars packaged in a whole fruit.' },
  { name: 'Broccoli', aliases: ['broccoli', '브로콜리'], status: 'not-junk', emoji: '🥦', explanation: 'Broccoli is a vegetable rich in fiber and nutrients. Steamed or roasted, it is an everyday nourishing choice.' },
  { name: 'Carrot', aliases: ['carrot', 'carrots', '당근'], status: 'not-junk', emoji: '🥕', explanation: 'Carrots offer fiber and beta-carotene. Raw or simply cooked carrots make a nourishing snack or side.' },
  { name: 'Oatmeal', aliases: ['oats', 'oatmeal', 'plain oatmeal', '오트밀'], status: 'not-junk', emoji: '🥣', explanation: 'Plain oats are a whole grain that provides fiber. Sweetened instant varieties can contain added sugar.' },
  { name: 'Plain yogurt', aliases: ['plain yogurt', 'plain yoghurt', 'unsweetened yogurt'], status: 'not-junk', emoji: '🥛', explanation: 'Plain, unsweetened yogurt provides protein and calcium without the added sugar of many flavored varieties.' },
  { name: 'Almonds', aliases: ['almonds', 'almond', 'unsalted nuts', '아몬드'], status: 'not-junk', emoji: '🌰', explanation: 'Unsalted almonds provide protein, fiber, and unsaturated fats. A small handful makes a satisfying snack.' },
  { name: 'Brown rice', aliases: ['brown rice', '현미'], status: 'not-junk', emoji: '🍚', explanation: 'Brown rice is a whole grain with fiber and nutrients. It can be part of a balanced meal.' },
  { name: 'Lentils', aliases: ['lentils', 'lentil', 'beans', 'chickpeas'], status: 'not-junk', emoji: '🫘', explanation: 'Simply prepared legumes provide plant protein and fiber, making them a nourishing everyday food.' },
  { name: 'Egg', aliases: ['egg', 'eggs', 'boiled egg', '계란'], status: 'not-junk', emoji: '🥚', explanation: 'Eggs provide protein and several nutrients. This result assumes a simply prepared egg.' },
  { name: 'Salmon', aliases: ['salmon', 'grilled salmon', '연어'], status: 'not-junk', emoji: '🐟', explanation: 'Simply cooked salmon provides protein and omega-3 fats. Preparation and accompanying sauces still matter.' },
  { name: 'Potato chips', aliases: ['chips', 'potato chips', 'crisps', '감자칩'], status: 'junk', emoji: '🥔', explanation: 'Typical potato chips are high in salt and fat and easy to overeat. Enjoy them occasionally; try lightly seasoned air-popped popcorn for a swap.' },
  { name: 'Soda', aliases: ['soda', 'cola', 'soft drink', 'sugary soda', 'coke', '탄산음료'], status: 'junk', emoji: '🥤', explanation: 'Regular sugary soda adds a lot of sugar with little nutritional value. Water or unsweetened sparkling water is an easy everyday swap.' },
  { name: 'Candy', aliases: ['candy', 'candies', 'sweets', '사탕'], status: 'junk', emoji: '🍬', explanation: 'Candy is typically high in added sugar and provides few nutrients. It can be an occasional treat rather than an everyday snack.' },
  { name: 'Donut', aliases: ['donut', 'donuts', 'doughnut', 'doughnuts', '도넛'], status: 'junk', emoji: '🍩', explanation: 'Typical donuts combine refined flour, added sugar, and frying fat. They are best enjoyed as an occasional treat.' },
  { name: 'French fries', aliases: ['fries', 'french fries', '감자튀김'], status: 'junk', emoji: '🍟', explanation: 'Typical deep-fried fries are high in fat and salt. Roasted potato wedges with a little oil are an everyday alternative.' },
  { name: 'Ice cream', aliases: ['ice cream', '아이스크림'], status: 'junk', emoji: '🍨', explanation: 'Typical ice cream contains added sugar and saturated fat. Enjoy it as a treat; fruit with plain yogurt is a nourishing alternative.' },
  { name: 'Cookies', aliases: ['cookie', 'cookies', '쿠키'], status: 'junk', emoji: '🍪', explanation: 'Typical sweet cookies contain added sugar and refined flour. They fit best as an occasional treat.' },
  { name: 'Pizza', aliases: ['pizza', '피자'], status: 'uncertain', emoji: '🍕', explanation: 'It depends on the crust, toppings, and portion. A vegetable-topped pizza can differ a lot from one with extra cheese and processed meat.' },
  { name: 'Salad', aliases: ['salad', '샐러드'], status: 'uncertain', emoji: '🥗', explanation: 'Ingredients matter. Vegetables, beans, and a simple dressing can make a nourishing meal; sugary dressings and fried toppings change the picture.' },
  { name: 'Burger', aliases: ['burger', 'hamburger', 'cheeseburger', '버거', '햄버거'], status: 'uncertain', emoji: '🍔', explanation: 'A burger can vary widely. The patty, bun, toppings, cooking method, and portion all affect its nutritional value.' },
  { name: 'Yogurt', aliases: ['yogurt', 'yoghurt', 'greek yogurt', '요거트'], status: 'uncertain', emoji: '🥛', explanation: 'Plain yogurt and heavily sweetened yogurt are different. Try “plain yogurt” or check the label for added sugar.' },
  { name: 'Popcorn', aliases: ['popcorn', '팝콘'], status: 'uncertain', emoji: '🍿', explanation: 'Air-popped popcorn is a whole-grain snack. Lots of butter, salt, or caramel can make it more of an occasional treat.' },
];

export function classifyFood(input) {
  const normalized = input.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!normalized) return { status: 'empty', name: '', emoji: '✏️', explanation: 'Type a food first, or choose one of the examples below.' };
  const food = foods.find((entry) => entry.aliases.includes(normalized));
  if (food) return { status: food.status, name: food.name, emoji: food.emoji, explanation: food.explanation };
  return { status: 'uncertain', name: input.trim().replace(/\s+/g, ' '), emoji: '🔎', explanation: 'This food is not in our small food guide yet. We would rather be honest than guess. Try a common food such as apple, chips, or soda.' };
}
