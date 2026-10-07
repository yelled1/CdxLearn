'use client';

import { useState } from 'react';
import { classifyFood } from '../lib/foods.js';

function Arrow({ className = '' }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Leaf({ className = '' }) {
  return <svg className={className} width="25" height="25" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M25 5C10 3 4 13 8 22c9 5 20-2 17-17Z" fill="currentColor"/><path d="m6 27 14-15" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}

const resultStyles = {
  'not-junk': { title: 'Not junk', label: 'AN EVERYDAY CHOICE', className: 'result-good', icon: '✓' },
  junk: { title: 'Junk', label: 'AN OCCASIONAL TREAT', className: 'result-junk', icon: '!' },
  uncertain: { title: 'Not sure', label: 'LET’S LOOK A LITTLE CLOSER', className: 'result-uncertain', icon: '?' },
};

export default function Home() {
  const [food, setFood] = useState('');
  const [result, setResult] = useState(null);

  // Both the form and example buttons use the same small, local classifier.
  function checkFood(value) { setResult(classifyFood(value)); }
  function chooseExample(value) { setFood(value); checkFood(value); }
  const style = result ? resultStyles[result.status] : null;

  return (
    <div className="min-h-screen">
      <header className="site-header mx-auto flex items-center justify-between">
        <a href="#" className="brand flex items-center gap-2.5" aria-label="Junk or No home"><span className="brand-symbol"><Leaf /></span><span>junk or no<span className="brand-dot">.</span></span></a>
        <nav className="flex items-center gap-7 text-sm" aria-label="Main navigation"><a className="nav-link hidden sm:block" href="#how-it-works">How it works</a><a className="nav-link hidden sm:block" href="#food-guide">Food for thought</a><a href="#checker" className="nav-pill flex items-center gap-2">Check a food <Arrow /></a></nav>
      </header>

      <main>
        <section className="hero mx-auto grid items-center lg:grid-cols-2">
          <div className="hero-copy">
            <span className="eyebrow flex items-center gap-2"><span className="tiny-dot" /> SMALL CHOICES. GOOD FEELINGS.</span>
            <h1>A little food<br />for <span className="thought">thought<svg viewBox="0 0 300 15" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9Q143-3 294 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg></span>.</h1>
            <p className="hero-description">That snack you’re reaching for?<br className="hidden sm:block" /> Let’s get to know it a little better.</p>
            <div className="hero-note flex items-center gap-2"><span className="small-check">✓</span> Simple answers. A little more know-how.</div>
          </div>

          <div className="food-scene" role="img" aria-label="A playful plate of broccoli, apple, and carrot, with a donut nearby">
            <div className="scene-orbit" /><span className="spark spark-one">✧</span><span className="spark spark-two">✦</span>
            <div className="plate"><div className="plate-inner"><span className="plate-broccoli">🥦</span><span className="plate-apple">🍎</span><span className="plate-carrot">🥕</span></div></div>
            <span className="floating-donut">🍩</span>
            <div className="scene-label label-good"><span>✓</span> A little nourishment</div>
            <div className="scene-label label-treat">A little treat <span>♡</span></div>
            <div className="balance-note">It’s all about balance.<svg width="45" height="28" viewBox="0 0 45 28" fill="none"><path d="M2 3c13 22 26 20 37 6m-1 0-8 1m8-1-1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></div>
          </div>
        </section>

        <section id="checker" className="checker mx-auto scroll-mt-8" aria-labelledby="checker-title">
          <div className="checker-heading flex items-center justify-between gap-4"><div><span className="eyebrow checker-eyebrow">THE FOOD CHECK</span><h2 id="checker-title">What’s on your mind (or plate)?</h2></div><span className="checker-decoration" aria-hidden="true">✳</span></div>
          <form onSubmit={(event) => { event.preventDefault(); checkFood(food); }}>
            <label htmlFor="food" className="sr-only">Food item</label>
            <div className={`input-row flex flex-col gap-3 sm:flex-row ${result?.status === 'empty' ? 'input-error' : ''}`}>
              <div className="input-wrap flex flex-1 items-center gap-3"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.7"/><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg><input id="food" name="food" value={food} onChange={(event) => { setFood(event.target.value); setResult(null); }} placeholder="Type a food, like apple or potato chips…" autoComplete="off" maxLength={100} aria-invalid={result?.status === 'empty'} aria-describedby={result?.status === 'empty' ? 'food-error' : 'food-help'} /></div>
              <button type="submit" className="check-button flex items-center justify-center gap-3">Junk or no? <Arrow /></button>
            </div>
          </form>
          <div className="examples flex flex-wrap items-center gap-2.5" id="food-help"><span className="example-label">A little inspiration:</span>{[['Apple', '🍎'], ['Chips', '🥔'], ['Soda', '🥤'], ['Broccoli', '🥦'], ['Pizza', '🍕']].map(([name, emoji]) => <button key={name} type="button" className="example-button flex items-center gap-1.5" onClick={() => chooseExample(name)}><span aria-hidden="true">{emoji}</span>{name}</button>)}</div>

          <div aria-live="polite" aria-atomic="true">
            {result?.status === 'empty' && <p id="food-error" className="error-message">{result.explanation}</p>}
            {style && <div className={`result-panel ${style.className}`}><div className="flex items-start gap-4"><span className="result-emoji" aria-hidden="true">{result.emoji}</span><div className="flex-1"><div className="result-label">{style.label}</div><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3>{style.title}<span className="result-icon" aria-hidden="true">{style.icon}</span></h3><span className="result-food">{result.name}</span></div><p>{result.explanation}</p></div></div></div>}
          </div>
          <p className="checker-footnote flex items-start justify-center gap-2"><svg className="shrink-0" width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor"/><path d="M10 9v5m0-8v1" stroke="currentColor" strokeLinecap="round" /></svg>A friendly starting point, based on a small food guide. No food guilt here.</p>
        </section>

        <section id="how-it-works" className="how-section mx-auto scroll-mt-8" aria-labelledby="how-title"><div className="section-title flex items-center gap-3"><span className="section-line"/><h2 id="how-title">A little curiosity goes to your belly</h2><span className="section-line"/></div><div className="grid gap-7 sm:grid-cols-3"><div className="how-item"><span className="step-number">01</span><h3>Name your food</h3><p>A snack, a drink, something for lunch.<br />Start with whatever you’re curious about.</p></div><div className="how-item"><span className="step-number">02</span><h3>Get the lowdown</h3><p>An easy-to-understand answer,<br />with the “why” right alongside it.</p></div><div className="how-item"><span className="step-number">03</span><h3>Make your own choice</h3><p>A little knowledge for your next bite.<br />You’re in charge of what’s on your plate.</p></div></div></section>

        <section id="food-guide" className="guide-section mx-auto scroll-mt-8" aria-labelledby="guide-title"><div className="guide-heading flex flex-wrap items-end justify-between gap-3"><div><span className="eyebrow">MORE THAN A YES OR NO</span><h2 id="guide-title">Keep these in your back pocket.</h2></div><span className="guide-caption">A few gentle reminders <span aria-hidden="true">↙</span></span></div><div className="grid gap-4 md:grid-cols-3"><article className="guide-card green-card"><span className="guide-icon" aria-hidden="true">🌱</span><h3>Everyday nourishment</h3><p>Whole foods, like fruits, vegetables, and grains, bring fiber and nutrients to the table.</p><span className="card-tag">A good place to start</span></article><article className="guide-card peach-card"><span className="guide-icon" aria-hidden="true">🍪</span><h3>Room for a little treat</h3><p>Foods high in added sugar or salt can be occasional treats. Balance beats perfection.</p><span className="card-tag">Enjoy the moment</span></article><article className="guide-card yellow-card"><span className="guide-icon" aria-hidden="true">🥣</span><h3>The details make a difference</h3><p>Ingredients, portions, and how a food is prepared matter. Sometimes the answer is “it depends.”</p><span className="card-tag">Stay a little curious</span></article></div></section>
        <div className="closing-note mx-auto"><Leaf /><p>Good food habits start with curiosity, not rules.</p></div>
      </main>
      <footer className="site-footer mx-auto flex flex-col justify-between gap-3 sm:flex-row"><span>© {new Date().getFullYear()} Junk or No. Made for the curious.</span><span>General food education · Not personalized nutrition advice</span></footer>
    </div>
  );
}
