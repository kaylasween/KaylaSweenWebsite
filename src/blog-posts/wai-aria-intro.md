---
path: "/blog/what-is-wai-aria"
date: "2019-09-13"
title: "What is WAI-ARIA?"
---

##### WAI-ARIA stands for Web Accessibility Initiative – Accessible Rich Internet Applications... What a mouthful! WAI-ARIA is a technical specification written by the World Wide Web Consortium (W3C) that specifies how to improve the accessibility of a website or web application with supplemental HTML attributes. It helps us add more context to UI elements that browsers and assistive technologies can use to assist the user in understanding the content of a site or application. Over the coming posts, we'll discuss WAI-ARIA a little more in depth.

# A complement to semantic HTML
Semantic HTML is markup that provides context for its contents. For more information about semantic HTML, check out my post, "The Importance of Semantic HTML." WAI-ARIA is in no way meant to replace semantic HTML. On its own, semantic HTML and general good usability practices can offer a lot when it comes to accessibility. Sometimes, we can do more to provide users of assistive technologies with better context. This is where WAI-ARIA comes in. It helps fill in the gaps that may be left behind by semantic HTML.

Let me reiterate: **WAI-ARIA is not a replacement for semantic HTML**. It's also **not a quick fix for poor usability or accessibility practices**. You can't just put WAI-ARIA into an unusable application and expect it to be more usable... even if it's "WCAG compliant!" It's kind of like putting lipstick on a pig. I recommend reading the [article, "Accessibility Lipstick on a Usability Pig," by Jared Smith](https://webaim.org/blog/accessibility-lipstick-on-a-usability-pig/).
![A pig emoji with lipstick on it saying that's metaphorically your poor usability and a lipstick emoji that is metaphorically WAI-ARIA for your poor usability.](https://thepracticaldev.s3.amazonaws.com/i/nlv3yrje0p9xfub9crow.png)

# In the spec
The WAI-ARIA specification talks about three main features: roles, states, and properties. Roles tell browsers and assistive technologies what the element is or what it does. States define the current status of an element and can change throughout the lifecycle of the app. Properties give extra meaning or semantics to UI elements. We'll go into more detail on each of these in this series.

##### I look forward to getting this series going! If there is a particular WAI-ARIA topic you'd like me to write about, please let me know in the comments!

*Title illustration from <a href="https://undraw.co">unDraw</a>.*