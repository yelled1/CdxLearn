# Junk or No

A beginner-friendly food checker built with **Next.js App Router, JavaScript, and Tailwind CSS**. No API key, database, or account is needed to run it.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Type a food and press Enter or click **Junk or no?**. Example buttons run a check immediately.

## Check and build

```sh
npm test
npm run build
```

This application uses Next.js static export. The production website is generated in `out/`. Deploy that directory to a static hosting service. `next start` does not serve static exports; use a static web server for `out/`.

## Understand the code

- `app/page.js`: food input, example buttons, and results. React's `useState` remembers the current input and result.
- `lib/foods.js`: the food list and `classifyFood(input)` function.
- `app/globals.css`: Tailwind import and visual styles.
- `app/layout.js`: shared layout and page metadata.
- `tests/foods.test.js`: classification checks using Node's built-in test runner.

## Add your own food

Add an entry to the `foods` array in `lib/foods.js`:

```js
{
  name: 'Orange',
  aliases: ['orange', 'oranges'],
  status: 'not-junk', // 'junk' or 'uncertain' are also supported
  emoji: '🍊',
  explanation: 'Whole oranges provide fiber and vitamin C.',
}
```

Aliases must be lowercase with single spaces. Matching ignores capitalization and extra spaces but uses the whole food name: “apple pie” is not classified as “apple.” Unknown and preparation-dependent foods return **Not sure**. Empty input produces a helpful message.

## About the answers

This is a small educational food guide, not a nutrition database or personalized dietary advice. Answers describe typical preparations. Ingredients, portions, and cooking methods can change the picture. No food guilt: occasional treats can be part of a balanced diet.
