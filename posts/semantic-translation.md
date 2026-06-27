---
title: "LLMs in Professional Software Engineering"
date: 2026-06-27
authors:
  - KnorpelSenf
preview: "You boss wrote the next to-do application in 15 minutes using their favourite LLM. So what?"
---

> This post is based on my talk at the Waterkant Festival 2026.

The AI hype is as ubiquitous as it is annoying.
Some say that AI will beat software engineers at every task in a few months.
Some say that human performance will always be better than AI.
Both groups are wildly wrong.

I get it.
Your next to-do application is written in 15 minutes by your favourite LLM.
So what?

I care about solving real problems in the real world.
Unsolved problems.
Hard problems.
There is no training data for this, and no examples.
The stuff that tickles your mind, and that requires some novel solutions and the right trade-offs.

Can LLMs even help here at all?

Let's collect some evidence.

1. Take a properly hard engineering problem.
2. Get your CTO to pay for infinite tokens.
3. Systemically try out various ways to use LLMs to solve the problem, and write down how it goes.

This is what I did, and here is what I found out.

## A Hard Problem

At [my current employer](https://solvares-fieldservice.com/), we solve large instances of the [Vehicle Routing Problem](https://en.wikipedia.org/wiki/Vehicle_routing_problem).
This is a fairly complex domain, so we deal with rather complex systems every day.
Any tool we want to adopt must prove itself on large code bases with sophisticated algorithms, non-trivial interdependencies, and admittedly a vast amount of legacy, too.

The problem we picked for this experiment was to compute a distance matrix.
