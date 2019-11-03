---
path: "/blog/POUR"
date: "2019-06-28"
title: "Breaking Down P.O.U.R. (v2.0)"
---

###### This post has been modified from its original content ([published on Software Unwound](https://softwareunwound.com/2016/11/28/breaking-down-p-o-u-r-a-ux-accessibility-blog-post/) on November 28, 2016) for clarity, to "modernize" it, and to include some things I have learned since.


Web accessibility is an extremely broad subject. To make it seem less daunting, we can break it down into what the World Wide Web Consortium calls the [four main principles of accessibility](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head): perceivable, operable, understandable, and robust, otherwise known as P.O.U.R. These four principles are *the pillars on which the world rests. Together we will restore the Seven Kingdoms*... Sorry, wrong pillars...

# Perceivable
**Definition:** "Information and user interface components must be presentable to users in ways they can perceive."

Perceivable refers to your user's ability to gather all of the information you've presented in your software or website via sight, sound, or touch. This means that your users need to be able to have some way of perceiving all of the information and UI components of your page. In other words, it can't be invisible to *any* of your users. 

This is probably the most common principle people think of when they think of accessibility because of how this correlates to those who are visually impaired.

It’s important to think about how you are conveying important information in ways that may not be easily perceived by everyone, such as communicating that a field is required only using color or giving solely audible directions on a website. Always make sure your content is communicated in at least two different modes of perception. For example, using descriptive `alt` text on images or showing an icon next to red required fields. 

Look through your applications to ensure that the information is presented in more than one channel and ask yourself the following questions:

* Do all images have an equivalent caption or `alt` text?
* Does your `alt` text describe the image and convey the intent?
* Do all audio clips have a transcript associated with them?
* Do all video clips have a transcript associated with them?
* Is there sufficient contrast between your text color and background color?
* If you have an image of text, such as a scanned document, is a text-based alternative an option?

# Operable
**Definition:** "Users must be able to operate the interface via components and navigation available."  

Being "operable" means that the user must be able to use all of the functionality of the software. For some users, this could mean navigating a website using only the tab and enter keys. For a user with learning disabilities, it could mean that the developer needs to ensure the user has enough time to respond to timed UI elements, such as alerts. It could even mean that the software or site is safe for seizure-prone individuals.

Not everyone has the ability to use a mouse. Some people use voice control software to navigate online content. Other people use switches that are controlled by their hands, feet, or head to navigate. Your content must be navigable and operable by these different modes of input. There are even actions to accommodate for that mouse users may be able to perform that  a touchscreen user can’t, and vice versa.

It’s important to think through workflows with different input devices. Make sure all actions that can be accomplished with a mouse can also be accomplished with a keyboard. Always consider how the user will know their location in the software while navigating. Always consider whether or not timed actions *actually* need to be timed, and consider lengthening the time if necessary.

A few questions to ask yourself:

* Can you navigate to every interactive element on your page using only the keyboard?
* If you can navigate to an element via keyboard, can you navigate away from it? (make sure your users won't get stuck in a "keyboard trap")
* Does the focus order of all the elements on your page make logical sense?
* Are your form elements associated to their corresponding labels?
* Is it easy to interact with all elements that can be interacted with in your application?

# Understandable
**Definition:** "Users must be able to understand the information as well as the operation of the user interface." 

The content or operation can't be beyond the user's understanding. What qualifies as "understandable" largely depends on the application and its context. Understandable in an internal enterprise application will mean different things to those working within the company and those who don't. 

It also includes using predictable navigation and consistent labeling throughout your application to enable the user to build a mental map.

The best way to plan for understandable content is to keep all interactions and information to a minimum when possible. Make sure your users aren't having an information overload situation.

Make sure your content is written in plain language and explain any jargon or acronyms.

Questions to ask yourself:

* Is the site’s language identified in the code (for example, `<html lang=”en”>`)?
* Are unusual words, acronyms, and jargon explained?
* Are images and graphics used to assist with comprehension (keeping in mind that they need to be perceivable)?
* Do your forms have proper validation and error messaging that allows the user to understand what happened in the event a form could not be submitted?
* Are words in a language other than the main content's language properly marked for assistive technologies?
* Is it easy for the user to understand where they are in the application?

# Robust
**Definition:** "Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies." 

This means that as technologies get better and better, users should still be able to access your content. Robust websites use standardized markup that can be reliably interpreted across different browsers, operating systems, and types of hardware. Your users should be able to access your content on anything they choose (tablet, smart phone, different browsers, etc). For example, if your website only works in Chrome, it isn’t robust.

Creating robust products allows users to customize their technologies to meet their needs. Web content that required Flash, for example, excludes users whose devices didn’t support that technology. The more control your users have, the more likely they will be able to access your content easily and effectively.

**TEST IN EVERY BROWSER.**

Question to ask yourself:

* How does your application appear and behave in various browsers, operating systems, and platforms (mobile, PC, tablet, etc.)?
* Are you using a [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) in case a user is using your application through an older browser or a browser that has not yet began to support a piece of functionality?
* Has this application been developed using the current best practices?


#Closing Thoughts
Implementing the P.O.U.R. principles places your customers and users first. Web accessibility, in general, is about designing and developing in an inclusive manner so that every person can have an opportunity to buy from your online storefront, read your blog posts, or complete a task in a more efficient way. 