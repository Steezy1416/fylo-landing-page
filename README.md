# Fylo Dark Theme Landing Page

<img width="1496" alt="Screenshot 2023-12-19 at 3 54 36 PM" src="https://github.com/Steezy1416/produce-practice-pro/assets/105886307/33dec33f-5ff9-4b89-89f9-931a83a81aee">

The Fylo landing page is a web page that describes the company's service to secure your files. This project is based on the [fylo-dark-landing-page](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd) challenge from Frontend Mentor. The final solution can be accessed at [dark-fylo-landing-page](https://dark-fylo-landing-page.netlify.app).

## Why did I do this challenge?

I did this challenge because I wanted a chance to practice writing practical CSS, being able to seperate and organize my code so it's easier to manage, and just to have fun and see what challenges I face along the way so I can see what the gaps in my knowledge are.

## Technologies

- React
- JSX
- CSS
- Netlify

## Challenge I Faced

With this challenge things were actually going pretty smoothly until I tried to replicate this effect...

<img width="461" alt="Screenshot 2023-12-19 at 4 01 19 PM" src="https://github.com/Steezy1416/produce-practice-pro/assets/105886307/417d0856-305c-44f1-b424-18d49cdb1836">

My initial thought was to do something like this

```css
.card {
  position: relative;
}

/*quotes*/
.card::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  top: -10px;
  left: -10px;
  z-index: -1;
}
```

But that did not work so I tried putting a z-index of 1 on the ".card" and it still did not work. I even went around looking at my code to see if I accidently created a different stacking context but nothing and I was stuck on this for a while until eventually I did more research on stacking context and pseudo elements and came up with this solution.

```css
.card-parent {
  position: relative;
  z-index: 1;
}

.card {
  position: relative;
  /*no z-index on the card at all*/
}

/*quotes*/
.card::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  top: -10px;
  left: -10px;
  z-index: -1;
}
```

This works because pseudo elements are considered children of their parent so in order to make the pseudo element be behind its parent you need a new stacking context for the parent. So you need to wrap the parent in a container and give that container a z-index but not the parent.

## Where can I view this page?

To view this page you can go to the [dark-fylo-landing-page](https://dark-fylo-landing-page.netlify.app) web page.
