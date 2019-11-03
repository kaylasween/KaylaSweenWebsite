---
path: "/blog/important-css"
date: "2019-08-05"
title: "Is it really !important?"
---

##### We know not to use <code>!important</code> in our CSS, but why is that? We'll delve into what the <code>!important</code> rule does, why not use it, and when it is acceptable to use.

## What is specificity?
Before we get into <code>!important</code>, we need to know a little bit about specificity. 

Browsers use specificity to determine which CSS property will be applied to an element. The more specific the selector, the more likely it is that the CSS will be applied. An element id selector (<code>#id</code>) is more likely to be applied than a class selector (<code>.class</code>), and a class is more likely to be applied than an element selector (<code>h2</code>). <a href="http://www.standardista.com">Estelle Weyl</a> has a cute visual representation of this called "CSS SpeciFISHity."

<img alt="An illustration describing CSS specificity using fish. This goes from least specific to most specific. I recommend checking out Mozilla's MDN for more information on specificity. I will have it linked at the end of the article." src="https://thepracticaldev.s3.amazonaws.com/i/ysnxb41w3tum9462sz0x.png" /><small>Image from <a href="https://specificishity.com">www.specifishity.com</a>.</small>
**For more information about specificity, check out the [MDN article on specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).**

## What is <code>!important</code>?
The <code>!important</code> suffix is the "one ring to rule them all" solution to force your style on an element. It overrides any other declaration of that property on the element. Initially, this was meant to be used for users to override the website's stylesheets for preference or accessibility reasons.

*Hot take:* My guess is it gained popularity because people realized it was easier to use <code>!important</code> than to learn how CSS works. </p>

## Why shouldn't we use <code>!important</code>?
It overrides natural CSS specificity and can negatively affect how styles cascade. It also makes your CSS harder to maintain. Nick Rollins has a good case of this from his post, ["CSS !important: Don't Use It. Do This Instead."](https://uxengineer.com/css-specificity-avoid-important-css/#what-!important-do) He uses the example of a developer italicizing everything inside a <code>blockquote</code> element.

<pre><code>blockquote * { 
  font-style: italic; 
}
</code></pre>

It doesn't work the first go around, so we'll just add <code>!important</code> to the end.

<pre><code>&lt;blockquote&gt; 
  &lt;p&gt;Don't write lazy CSS&lt;/p&gt;
  &lt;cite&gt;- Nick Rollins&lt;/cite&gt;
&lt;/blockquote&gt;

&lt;style&gt;
  blockquote * { 
    font-style: italic !important; 
  }
&lt;/style&gt;
</code></pre>

<em lang="fr">Voilà!</em> Works like a charm.

Six months later, another developer needs to make sure citations aren't in italics. Using standard CSS specificity practices, this developer is unable to remove the italics from the <code>&lt;cite&gt;</code> tag. The only option to override a <code>!important</code> is with an <code>!important</code>, as we can see in Estelle's illustration above.

<pre><code>cite { 
  font-style: normal !important; 
}</code></pre>

Now, we have a cycle of everything needing to be overridden using <code>!important</code>, and specificity loses all meaning.</p>

*Yes, technically if everything has <code>!important</code>, we fall back on specificity, but the point is if everything is important, nothing is. That's true in life too!*

## When should we use <code>!important</code>?
For the most part, using <code>!important</code> is unnecessary. You can almost always use specificity to apply a particular style to an element. If you are using it, you should certainly have a good reason to remove control of the style of that element from the user.

I believe the best time to use <code>!important</code> is in the user's browser stylesheet. The user should have the ability to override any styles that may be detrimental to them being able to perceive or understand what is happening on a website. <em>If you are interested in applying a stylesheet to your browser, Safari, for example, allows you to use your own stylesheet in Preferences > Advanced > Style sheet.</em>

**📣 What do you think? Are there other legitimate reasons to use !important?**


*Title illustration from [unDraw](https://undraw.co/illustrations). Shoutout to [Emma Wedekind](https://dev.to/emmawedekind) for inspiring me to use those illustrations!*

