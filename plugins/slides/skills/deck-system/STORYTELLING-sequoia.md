# Storytelling: Sequoia pitch deck

How to build an investor deck that survives the first two minutes.

The Sequoia Capital pitch deck format is the most imitated structure in startup fundraising. It works because it mirrors how investors actually evaluate companies: purpose, problem, solution, proof, team, ask. In that order. Skip a beat and the audience fills the gap with doubt.

This guide maps the Sequoia sequence onto the Slides component library. Same design system, same headline pattern, different story shape.

---

## The twelve-beat structure

```
Start ──────────────────────────────────────────────────────── End
│ Purpose │ Problem │ Solution │ Why now │ Market │ Product │ Model │ Traction │ Team │ Competition │ Financials │ Ask │
```

Twelve beats. Most decks run 12–18 slides total. Some beats share a slide, some take two. The percentages below are time shares for a live pitch. For a read-only deck, they're rough page-weight guides.

| Beat | ~Share | Purpose |
|------|--------|---------|
| Company purpose | 5% | Say what you do |
| Problem | 10% | Build urgency |
| Solution | 10% | Show the fix |
| Why now | 5% | Explain the timing |
| Market size | 10% | Prove the opportunity is real |
| Product | 15% | Show the thing itself |
| Business model | 5% | Explain how money works |
| Traction | 15% | Prove it's working |
| Team | 10% | Prove you can execute |
| Competition | 5% | Show you know the landscape |
| Financials | 5% | Show the path forward |
| The ask | 5% | Say what you need |

---

## Beat by beat

### 1. Company purpose

**What it accomplishes:** Frames the entire conversation. The investor should know what you do before slide two loads.

**What to include:** One sentence. Verb, object, outcome. No jargon, no adjectives, no "platform" or "ecosystem" unless those words carry real meaning.

**What to leave out:** Your founding story. Your mission statement. Anything that takes more than fifteen seconds to say.

**Headlines:**

```html
<h1>We make enterprise search <span class="dim">actually work.</span></h1>
<h1>Payroll for contractors. <span class="dim">Everywhere.</span></h1>
<h1>Replacing spreadsheets <span class="dim">in construction.</span></h1>
```

**Best component:** Cover slide. Company name, one-line purpose, your name and title. Nothing else. No tagline. No investor logos. No "Confidential."

**Common mistakes:**
- Writing a mission statement instead of a purpose. "Empowering teams to unlock their potential" says nothing. "We automate SOC 2 compliance" says everything.
- Using two sentences. If you need two, the first one is too weak.

---

### 2. Problem

**What it accomplishes:** Makes the investor feel the pain. If they don't feel it, the solution won't matter.

**What to include:** Who has this problem (be specific: job title, company size, industry). How they cope today (manual process, bad software, spreadsheet, workaround). What it costs them (time, money, risk, opportunity cost). Use a real example or a real quote if you have one.

**What to leave out:** Your solution. Let the problem breathe first.

**Headlines:**

```html
<h1>Compliance takes 400 hours. <span class="dim">Every year.</span></h1>
<h1>Three tools. <span class="dim">None of them talk to each other.</span></h1>
<h1>$2.3M in annual waste. <span class="dim">Per mid-size hospital.</span></h1>
```

**Best components:** Two-column (problem on the left, cost/impact on the right) or Eyebrow + headline + subtitle for a single sharp framing. If you have a customer quote that captures the pain, use a Quote slide first, then follow with the data.

**Common mistakes:**
- Describing the problem too abstractly. "Communication is broken" is a bumper sticker. "Field crews call the office 11 times per job to get updated plans" is a problem.
- Jumping to solution language. If your problem slide mentions your product name, you've moved too early.
- Making the problem too broad. "Healthcare is inefficient" is true and useless. Narrow it to the specific pain your product fixes.

---

### 3. Solution

**What it accomplishes:** Answers "so what did you build?" Clean, concrete, visual if possible.

**What to include:** What you built. How it fixes the problem from beat 2. The core insight: the one thing you do differently. Keep it to one or two slides. This is a preview. The full product section comes later.

**What to leave out:** Feature lists. Architecture diagrams. Implementation details. Anything that requires technical context the investor doesn't have yet.

**Headlines:**

```html
<h1>One dashboard. <span class="dim">Every compliance requirement.</span></h1>
<h1>Automated plans. <span class="dim">Updated in real time.</span></h1>
<h1>Replace the spreadsheet. <span class="dim">Keep the workflow.</span></h1>
```

**Best components:** Eyebrow + headline + subtitle to state the solution, then a Collage slide with a product screenshot for visual proof. If the solution has two or three pillars, use a Three-column. Three is the maximum. If the product transforms an input into an output (data in, report out; raw footage, polished edit), a Spec block makes the mechanism immediately tangible.

**Common mistakes:**
- Listing features instead of describing the solution. Features come in the Product section. Here you need the shape of the answer.
- Being too technical. The investor is evaluating the business. Lead with what the user sees: "we show every dependency in one view" is a solution. "We use a graph database" is an implementation detail.
- Forgetting to connect back to the problem. The solution slide should feel like the natural answer to the problem slide. If you have to re-explain the problem, the framing was wrong.

---

### 4. Why now

**What it accomplishes:** Answers the question every investor is already asking: "If this is such a good idea, why hasn't someone done it?"

**What to include:** One to three forces that created the opening. These are usually: technology shifts (new API, cheaper compute, new model), market changes (regulation, consolidation, behavior shift), or timing events (pandemic, platform launch, standard adoption). Be specific. Name the force, date it, quantify it if you can.

**What to leave out:** Anything that was also true five years ago. The "why now" has to be recent and irreversible.

**Headlines:**

```html
<h1>The regulation changed. <span class="dim">January 2024.</span></h1>
<h1>LLMs made this possible. <span class="dim">Last year it wasn't.</span></h1>
<h1>Three shifts. <span class="dim">All in the last 18 months.</span></h1>
```

**Best components:** Dark callout for a single punchy force. Three-column if you have three distinct shifts. Dot flow if the forces are sequential (regulation → adoption → demand).

**Common mistakes:**
- Saying "AI" without explaining what specifically changed. Everyone has a "why now" slide that says AI. Yours needs to say which capability, released when, and why it specifically enables your product.
- Listing trends instead of triggers. "Remote work is growing" is a trend. "Zoom's API launched in Q3 2023 with real-time transcription" is a trigger.

---

### 5. Market size

**What it accomplishes:** Proves the opportunity is large enough to build a venture-scale business.

**What to include:** TAM (total addressable market), SAM (serviceable addressable market), SOM (serviceable obtainable market). Both top-down (industry reports, analyst numbers) and bottom-up (number of potential customers × average revenue per customer). Specific numbers with sources. The bottom-up number matters more. It shows you understand your actual customer.

**What to leave out:** TAM-only slides. Nobody believes your $50B TAM. They want to see the bottom-up math.

**Headlines:**

```html
<h1>$8.2B market. <span class="dim">Growing 34% annually.</span></h1>
<h1>142,000 mid-size manufacturers. <span class="dim">$12K each.</span></h1>
<h1>Bottom-up: $1.7B. <span class="dim">Top-down confirms it.</span></h1>
```

**Best components:** Stat grid or a Two-column layout: top-down on the left, bottom-up on the right. If you're showing growth over time, a Timeline makes the trajectory concrete. For the core numbers, use a simple stat with a label. Clean numbers invite agreement; charts invite scrutiny.

**Common mistakes:**
- Only showing TAM. Investors discount TAM by 90% in their heads. Show the SAM and SOM so they don't have to guess.
- Using a market map you didn't build. If your TAM slide is a screenshot from a Gartner report, you've told the investor you haven't thought about your own market.
- Confusing market size with market potential. The market is what exists today. The potential is what might exist. Lead with what exists. Mention potential in one sentence if you must.

---

### 6. Product

**What it accomplishes:** Shows the thing itself. After five slides of framing, the investor wants to see what they're buying into. This is where you earn credibility.

**What to include:** How it works. Screenshots, a short demo flow, or a simplified architecture view. Show the user experience. Focus on what the customer sees. Walk through one workflow end-to-end. If you have a live demo, this is where it goes. If not, use screenshots with annotations.

**What to leave out:** Everything beyond the top three or four features. Show enough to prove the product is real, usable, and differentiated.

**Headlines:**

```html
<h1>How it works. <span class="dim">Three steps.</span></h1>
<h1>From upload to report. <span class="dim">Under four minutes.</span></h1>
<h1>The workflow. <span class="dim">No training required.</span></h1>
```

**Best components:** This section usually takes two to three slides. Start with an Eyebrow + headline + subtitle for the overview, then a Product slide (showcase style) for the hero screenshot or a Collage slide for a multi-angle product view. If you're walking through steps, use a Dot flow. A Feature card row works well when you have three or four distinct capabilities to highlight side by side. For a before/after, use Two-column. Art overlay is effective when a bold product visual tells the story better than text.

**Common mistakes:**
- Showing too many screenshots. Each one dilutes the impact of the others. Three is the maximum. One great screenshot beats three mediocre ones.
- Showing the admin panel. Investors want to see the user experience. Show what the customer interacts with.
- Skipping the demo. If your product works and looks good, showing it live is the single most persuasive thing you can do. If it doesn't work or doesn't look good, that's a different problem.

---

### 7. Business model

**What it accomplishes:** Answers "how do you make money?" and "is this a good business?"

**What to include:** Pricing model (subscription, usage-based, marketplace, transaction fee). Price point. Unit economics if you have them: CAC, LTV, LTV/CAC ratio, gross margin, payback period. If you're pre-revenue, show your planned pricing and comparable benchmarks.

**What to leave out:** Multiple pricing tiers and feature matrices. That's for the sales page, not the pitch deck. Show the core model and the core economics.

**Headlines:**

```html
<h1>$2,400/year per seat. <span class="dim">85% gross margin.</span></h1>
<h1>Transaction fee. <span class="dim">2.5% of every payment.</span></h1>
<h1>Land at $500/mo. <span class="dim">Expand to $4,200.</span></h1>
```

**Best components:** Capability list (Q&A) for showing key metrics in a clean row format. Three-column for the three numbers that matter most (price, margin, payback). Eyebrow + headline + subtitle if the model is simple enough for one slide.

**Common mistakes:**
- Making the model too complicated. If you can't explain how you make money in two sentences, simplify.
- Hiding bad unit economics. If your LTV/CAC is below 3:1, don't hide it. Acknowledge it and explain the path to improvement. Investors will find it anyway.
- Showing a pricing page screenshot. Distill the model to its essence.

---

### 8. Traction

**What it accomplishes:** Proves the business is working. This is the slide investors flip to first when they get a cold deck. It's the most important section after the problem.

**What to include:** Revenue (ARR or MRR). Growth rate (month-over-month or quarter-over-quarter). Number of customers. Retention (net revenue retention, churn rate). Key milestones (launch date, first customer, first $1M ARR). Logos if you have recognizable ones. If you're pre-revenue, show engagement metrics: DAU, activation rate, waitlist size, pilot conversions.

**What to leave out:** Vanity metrics. Total signups without activation rates. Gross revenue without churn. Downloads without retention. Every number on this slide should survive the question "so what?"

**Headlines:**

```html
<h1>$1.8M ARR. <span class="dim">4× in 12 months.</span></h1>
<h1>94% net retention. <span class="dim">Negative churn by Q3.</span></h1>
<h1>0 to 340 customers. <span class="dim">No sales team.</span></h1>
```

**Best components:** Stat grid for the key numbers: three to five metrics, each with a label and a value. Two-column for before/after growth. If you have logos worth showing, a Logo bar of four to six customer marks anchors credibility instantly. For social proof at scale, a Testimonial grid lets you show three or four customer voices in one view. Use an Update row to convey shipping velocity: a tight list of recent launches or milestones that signals momentum. Use a Quote slide for one strong customer testimonial, then follow with the numbers.

**Common mistakes:**
- Showing a graph without labeling the axes. Every chart needs numbers, not just a line going up.
- Mixing timeframes. If your revenue is monthly, your growth should be monthly. Don't show MRR growth with a YoY percentage.
- Hiding churn behind gross numbers. A slide that says "$2M ARR" but doesn't mention 8% monthly churn is hiding the real story. Investors notice what's missing.
- Using customer logos you don't have permission to use. Ask first. "Design partner" and "paying customer" are different things.

---

### 9. Team

**What it accomplishes:** Answers "why will this team win?" A case for competence.

**What to include:** Founders and key hires (four people max on the slide). For each: name, role, and the one thing that makes them credible for this specific company. Relevant experience: the specific part that matters for this company. Unfair advantages: domain expertise, prior exits, technical depth, network, proprietary insight.

**What to leave out:** Advisory boards (unless the advisor is actively involved and the name carries weight). Headshots that look like stock photos. Org charts.

**Headlines:**

```html
<h1>Built this before. <span class="dim">At Stripe and Square.</span></h1>
<h1>Three founders. <span class="dim">22 years in logistics.</span></h1>
<h1>The team. <span class="dim">Domain-first.</span></h1>
```

**Best components:** Three-column or a Two-column layout. Each column: name, role, one-line credibility statement. Keep it tight. If one founder has a standout background, use a Quote slide with their insight before the team slide. A quote is more memorable than a bullet point. If you have notable investors or advisors worth surfacing, a Logo grid reinforces the network behind the team without taking up slide real estate.

**Common mistakes:**
- Listing every hire. The slide should have three or four people. Everyone else is implied.
- Leading with the school, not the skill. "MIT PhD" is less persuasive than "built the fraud detection system at Stripe that processes $800B/year."
- Forgetting to explain why this team for this problem. Generic talent is nice. Specific expertise is investable.

---

### 10. Competition

**What it accomplishes:** Shows you understand the landscape and have a defensible position within it.

**What to include:** Who the real competitors are (including the spreadsheet, the manual process, or "do nothing"). Your positioning: the strategic difference, stated in one line. Why customers choose you over alternatives. One or two lines on defensibility: network effects, data moats, switching costs, regulatory advantage.

**What to leave out:** Feature comparison matrices. The 2x2 quadrant where you're conveniently in the top right. Dismissive language about competitors.

**Headlines:**

```html
<h1>They sell software. <span class="dim">We sell outcomes.</span></h1>
<h1>The landscape. <span class="dim">And where we sit.</span></h1>
<h1>Built for SMB. <span class="dim">From the ground up.</span></h1>
```

**Best components:** Two-column (competitors on the left, your positioning on the right). Three-column if you want to frame it as "Legacy tool / Horizontal SaaS / Us (vertical-specific)." A JEDUF works well when your positioning is the middle path between two extremes: the incumbent that over-serves and the lightweight tool that under-delivers. Capability list (Q&A) works if you want to list competitors with one-line positioning for each. Skip the feature matrix. It invites line-item comparison and you will lose on at least three rows.

**Common mistakes:**
- The 2×2 magic quadrant. Every startup puts themselves in the upper right. Investors have seen this a thousand times. It communicates nothing.
- Claiming no competition. There's always competition. If nobody else is solving the problem, that's either a market-size issue or you haven't looked hard enough. The spreadsheet is a competitor. The status quo is a competitor.
- Feature-by-feature comparison. You will always lose on some features. Position on the dimension where you're strongest and the alternatives are weakest.

---

### 11. Financials

**What it accomplishes:** Shows you've thought about the path from here to a real business. A framework for thinking about growth.

**What to include:** Revenue forecast for the next 18–24 months. Focus on what you can credibly project. Current burn rate. Runway with current cash. Path to profitability or path to next fundraise. Key assumptions behind the forecast (customer growth rate, expansion revenue, churn improvement).

**What to leave out:** Detailed P&L projections. Five-year hockey sticks. Revenue forecasts that assume 100% quarter-over-quarter growth for three years straight. Anything you can't defend in a follow-up question.

**Headlines:**

```html
<h1>$4.2M ARR by Q4 2025. <span class="dim">Here's how.</span></h1>
<h1>18 months of runway. <span class="dim">Breakeven at $3M ARR.</span></h1>
<h1>The model. <span class="dim">Conservative case.</span></h1>
```

**Best components:** Capability list (Q&A) for key assumptions and numbers. Three-column for three scenarios (conservative, base, aggressive), but only if you actually have three distinct models. A simple Eyebrow + headline + subtitle works for early-stage decks where the financial plan is short.

**Common mistakes:**
- The hockey stick graph. Every startup shows one. None of them are accurate. Use specific numbers with specific assumptions instead.
- Not showing burn rate. Investors want to know how fast you're spending and how long you can survive. Hiding this signals you're afraid of it.
- Over-engineering the financial model. At pre-seed and seed, a simple bottoms-up model with three or four assumptions is more credible than a 50-tab spreadsheet.

---

### 12. The ask

**What it accomplishes:** Tells the investor exactly what you want and exactly what it buys.

**What to include:** How much you're raising. What the money will be used for (hiring, product, go-to-market, in two or three line items). What milestones it unlocks (next revenue target, product launch, market expansion). The implied next step: "This gets us to Series A metrics by Q3 2026."

**What to leave out:** Valuation (save for the meeting). Detailed budget breakdowns. Cap table structure.

**Headlines:**

```html
<h1>Raising $4M. <span class="dim">To reach $5M ARR.</span></h1>
<h1>The next 18 months. <span class="dim">And what unlocks after.</span></h1>
<h1>$2.5M seed. <span class="dim">Three hires. One market.</span></h1>
```

**Best components:** Eyebrow + headline + subtitle for the core ask, then a Three-column or Dot flow showing how the capital maps to milestones. Keep it to one slide. If you need two, the first slide has the number and the second has the milestone roadmap.

End with a closing line. A line that sticks. See the section on closing lines below.

**Common mistakes:**
- Being vague about the amount. "$3M at $15M post" is an ask (but save valuation for the conversation). "We're raising a round" is a wish.
- Listing too many uses of funds. Three line items maximum. More than that and it looks like you don't have priorities.
- Forgetting the milestones. The money is a means to specific milestones. Tell the investor what it buys: "This round gets us to 1,000 customers, $3M ARR, and Series A readiness."

---

## Adapting for stage

The twelve beats stay the same. The emphasis shifts.

### Pre-seed

You have an idea, maybe a prototype, maybe early design partners. Lead with Problem and Why Now. Those carry the deck. Product is a mockup or early build. Traction is qualitative: "12 design partners, 3 LOIs." Team is the main asset. Financials are a back-of-napkin model. The ask is small and specific.

| Beat | Weight |
|------|--------|
| Problem | Heavy |
| Why now | Heavy |
| Product | Light (mockup is fine) |
| Traction | Qualitative |
| Team | Heavy |
| Financials | Light |

### Seed / Series A

You have a product, customers, and early revenue. Lead with Traction and Product. Those carry the deck. Problem and Solution are tight (one slide each). Market size needs real bottom-up math. Team shows you've started hiring key roles. Financials show a credible path to the next round.

| Beat | Weight |
|------|--------|
| Problem | Tight |
| Product | Heavy (show the real thing) |
| Traction | Heavy |
| Market size | Medium (bottom-up required) |
| Team | Medium |
| Financials | Medium |

### Series B+

You have significant revenue and a clear growth engine. Lead with Traction and Financials. The numbers carry the deck. Product shows the roadmap and expansion opportunities. Competition matters more here: you're defending a position, and the landscape is crowded. The ask is large and tied to a specific scaling plan.

| Beat | Weight |
|------|--------|
| Traction | Heavy (the lead slide) |
| Financials | Heavy |
| Market size | Heavy (expansion TAM) |
| Product | Medium (roadmap focus) |
| Competition | Medium |
| Team | Light (org structure) |

---

## Adapting for format

### 10-minute meeting

You have ten minutes. Assume five for the pitch, five for questions. Cut to eight slides: Purpose, Problem, Solution, Product (one screenshot), Traction, Team, Ask. Skip Why Now (weave it into Problem), skip Market (mention one number verbally), skip Competition (address in Q&A), skip Financials (have them ready as backup).

### 30-minute pitch

The full twelve beats. Take your time on Problem (let them feel it), Product (show the demo), and Traction (walk through the numbers). Budget five minutes for Q&A at the end.

### Read-only deck (emailed, no presenter)

Every slide needs to stand alone. Add subtitles to every headline. They do the work the presenter would do verbally. Use body copy more generously. Add a one-page executive summary as slide 2 (after the cover). Investors who skim will read the summary and the traction slide. Everything else is supporting detail.

The headline arc should tell the story by itself. If you read only the headlines in order, the pitch should make sense.

---

## The closing line

Spend more time on your closing line than any other line in the deck.

The last slide is the line the investor repeats when they pitch your company to their partners on Monday morning.

It should be:
- **Short.** One sentence.
- **Forward-looking.** It points at the future.
- **Inevitable.** It should feel like a conclusion.

Examples:

> *"This market moves in 18 months. We're already there."*
> *"Every manufacturer will automate this. We're the ones building it."*
> *"The question isn't whether this gets funded. It's by whom."*
> *"This is year one. Imagine year three."*
> *"We're showing you what's already working."*

Use a Dark slide or a Quote slide. Large type. Nothing else on the slide. Pause before you say it. Pause after. Then stop talking.

---

## Common mistakes specific to pitch decks

### Too many slides

Fifteen is the ceiling. Twelve is the target. Every slide past fifteen dilutes the ones before it. If you can't cut a slide, its content probably belongs on another slide.

### Hiding bad metrics

Investors notice what's missing more than what's present. If your churn is high, show it and explain the plan. If your CAC is unsustainable, show it and explain the trend. Hiding a number raises suspicion about every other number on the slide.

### Feature matrices instead of positioning

A four-column table where you have checkmarks and competitors have X marks tells the investor nothing about why you win. Positioning is a narrative: "They built a horizontal tool and bolted on our vertical as an afterthought. We built for this vertical from day one. That's why our NPS is 72 and theirs is 31."

### Burying the traction

If your traction is strong, move key metrics up to slide 2 or 3, right after the purpose. Some investors flip to traction first anyway. Give them the number early, then explain the story behind it.

### The "we're the Uber of X" analogy

Analogies are crutches. They invite the wrong comparisons and let the investor fill in details you didn't intend. Say what you do. If you need an analogy to explain it, the purpose statement needs work.

### Putting valuation on a slide

Valuation belongs in the conversation. Putting it in writing anchors you before the negotiation starts. State the raise amount. Leave valuation for the meeting.

### Forgetting the ask

Some decks end with the team slide or a "thank you" slide and never state what they're raising. The entire deck exists to earn the right to make the ask. Make it. Clearly. On its own slide.

---

## A formula that works

If you don't know where to start:

```
1.  Say what you do in one sentence.
2.  Show the pain. Make them feel it.
3.  Show the fix. Make it obvious.
4.  Explain why now. Why this moment.
5.  Size the market with real math.
6.  Show the product. The real thing.
7.  Explain how money flows.
8.  Prove it's working with specific numbers.
9.  Show why this team wins.
10. Position against the landscape.
11. Project the path forward.
12. Ask for what you need. Say what it buys.
```

Twelve beats. The order is the structure. The headlines are the story. The data is the proof. Everything else is design.

---

## One more thing

The best pitch decks don't feel like pitch decks. They feel like a conversation with someone who deeply understands a problem, has built something real to fix it, and can prove it's working.

The structure is a scaffold. The components are the vocabulary. The conviction that makes an investor lean forward comes from you knowing your business cold.

If you know your numbers, your customers, and your market better than anyone in the room, the deck will work. If you don't, no amount of design will save it.

Build the business first. Then build the deck.
