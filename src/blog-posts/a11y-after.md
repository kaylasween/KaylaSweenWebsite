---
path: "/blog/a11y-after-the-fact"
date: "2019-07-19"
title: "The Problem with Accessibility After the Fact"
---

It seems to be a common belief that we can design a pixel-perfect application, go through the entire development process, and then squeeze in a little accessibility after everything is done. This process may help you boost your Lighthouse score a bit but won't do much to help your users.

*Accessibility shouldn't be an afterthought!*

## Automated testing doesn't catch everything.
Automated Web Content Accessibility Guidelines (WCAG) checkers will typically only catch the "low-hanging fruit," like insufficient color contrast, checking that an image has <code>alt</code> text, etc. Your application could pass every audit ran by an automated checker, but not catch things that negatively impact the usability of your application. For example, these tools cannot check the <code>alt</code> text for your images to ensure they properly describe what's in each image or convey the intent.

WCAG is a great place to start for accessibility testing, but developing an entire application and adding the WCAG cherry on top doesn't make it accessible. 

## You're making more work for yourself.
Trying to retrofit a web application with accessibility is, honestly, much more time consuming and frustrating than incorporating the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head">four principles of accessibility</a> from the beginning of your project. It makes your job (and the jobs of future developers working on your application) unnecessarily more difficult.

I can't tell you how many times I've had to try to shove accessibility concepts into an existing application in an attempt to make it a little more usable than it was before I touched it. What's worse is if the application wasn't written using <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML">semantic HTML</a>. 😱

Keeping accessibility in mind when you start a project is an efficient use of your time and will benefit your users.

## Key Takeaways
It's important to consider the spectrum of possible users for your site or application from the beginning. Designing for <strong>everyone</strong> early on is what makes a website accessible.

Always remember: designing and developing an application with accessibility in mind helps <strong>all</strong> users.

##### If you haven't already, check out <a href="https://dev.to/kaylasween/breaking-down-p-o-u-r-v2-0-3jdj">my last blog post, Breaking Down POUR</a>!