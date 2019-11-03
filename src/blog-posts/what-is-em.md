---
path: "/blog/what-even-is-em"
date: "2019-07-25"
title: "What even is em?"
---

##### While it's best practice to use <code>em</code> or <code>rem</code> when defining font sizes, it's common for developers to be unsure of which one to use or even how each of them work. In this post, we'll go over what <code>em</code> and <code>rem</code> are and their differences so that you can pick the one that best suits your needs.

Before posting this blog, I did a little quiz on Twitter. Here are the results from that poll:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Time to test your CSS knowledge! <br><br>Let’s say you want to make a button, but you want to customize the font size and padding with:<br><br>button {<br> font-size: 2em;<br> padding: 1em;<br>}<br><br>Assuming 16px is inherited, what are the values for font-size and padding in px?</p>&mdash; Kayla Sween (@_KaylaSween) <a href="https://twitter.com/_KaylaSween/status/1153799464340971525?ref_src=twsrc%5Etfw">July 23, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Only **12%** of people answered with the correct answer. I knew <code>em</code> confused me, but I didn't realize it confused a lot of other people as well. So let's dive into what <code>em</code> and <code>rem</code> are and how they work.

<h2>EM</h2>
In CSS, <code>em</code> is a unit that is relative to the font size of the element. If the element doesn't have a specified font size, it will inherit its parent's font size. I like to think of <code>em</code> as standing for the "element's measurement." 

Let's use a button as an example.

<pre><code>button {
  font-size: 2em;
  padding: 1em;
}</code></pre>

In this example, we'll assume the button is inheriting a <code>16px</code> font size. This would originally make <code>1em</code> = <code>16px</code>. 

So far, so good.

When we change the font size of the button to <code>2em</code>, the element's font size changes from <code>16px</code> to <code>32px</code> (or <code>2em</code>). This also makes sense. The confusing part is what happens to padding. Since the element's new font size is <code>32px</code>, this makes the button's padding become <code>32px</code>, or the new value for <code>1em</code>. 

Yeah, CSS is wild.

<h2>REM</h2>
<code>rem</code>, or root <code>em</code>, is a unit that is relative to the font size of the root (<code>&lt;html&gt;</code>) element, which is typically <code>16px</code>. Applying my own version of what <code>em</code> stands for to <code>rem</code>, <code>rem</code> would stand for the "root element's measurement." 

Using <code>rem</code>, changing the element's font size doesn't change the <code>rem</code> value for other properties. It's always <code>1rem</code> = <code>16px</code>, or whatever the root element's font size is. (Note: it's probably not a good idea to override the <code>html</code> element's font size because the user agent stylesheet sets it. You can learn more about the user agent stylesheet in <a href="https://meiert.com/en/blog/user-agent-style-sheets/">Jens Oliver Meiert's article, "User Agent Style Sheets: Basics and Samples"</a>.) 

Let's revisit the example from earlier, but this time, we'll use <code>rem</code>. 

<pre><code>button {
  font-size: 2rem;
  padding: 1rem;
}</code></pre>

In this case, the font size (<code>2rem</code>) is <code>32px</code> and the padding (<code>1rem</code>) is <code>16px</code>, which is exactly what you'd expect.

<h2>So which one should I use?</h2>
It depends! If this is something you're concerned about, I recommend doing your own research to see which works best for your purposes.

After doing some research, I prefer <code>rem</code> so that I don't have to worry about the font size of an element changing to something unexpected, especially if I work in a system that a lot of other developers have touched.

📣 **Sound off!** 📣 Do you prefer to primarily use <code>em</code> or <code>rem</code> and why? If you learned something, let me know what you learned!