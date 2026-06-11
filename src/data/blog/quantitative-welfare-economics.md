---
author: Rudy Galan
pubDatetime: 2026-06-11T14:35:00Z
title: "The Thermodynamics of Markets: Modeling Constraints and Systemic Leakage"
postSlug: quantitative-welfare-economics-modeling
featured: true
draft: true
tags:
  - systems-logic
  - economics
  - quantitative-modeling
description: "A first-principles geometric and mathematical evaluation of consumer surplus, producer surplus, and deadweight loss under boundary constraints."
---

## 1. Executive Summary

This analysis models a closed microeconomic market system to map resource optimization under external boundaries. Using coordinate-plane geometry, we calculate human utility changes when a system shifts from unconstrained equilibrium to constrained states (Price Floors and Price Ceilings).

---

## 2. Model 01: Unconstrained Market Equilibrium

When a market is unconstrained, it optimizes naturally where marginal benefit (Demand) equals marginal cost (Supply). 

<img src="/assets/economics-welfare/market-equilibrium.png" alt="Unconstrained Market Equilibrium" width="100%" />

### Quantitative Breakdown:
*   **Equilibrium Vector:** $(Q^* = 8, P^* = \$8)$
*   **Consumer Surplus (CS):** Bounded by the maximum demand intercept $(\$12)$ and market price $(\$8)$.
    $$\text{CS} = \frac{(12 - 8) \times 8}{2} = 16$$
*   **Producer Surplus (PS):** Bounded by market price $(\$8)$ and the baseline supply intercept $(\$2)$.
    $$\text{PS} = \frac{(8 - 2) \times 8}{2} = 24$$
*   **System Friction (DWL):** $0$. Total potential utility is maximized at **$40$**.

---

## 3. Model 02: High Artificial Boundary (Price Floor = \$10)

Imposing a legal minimum price above the equilibrium price restricts consumer participation and creates structural asset accumulation (a market surplus).

<img src="/assets/economics-welfare/price-floor-surplus.png" alt="Price Floor Market Distortion" width="100%" />

### Quantitative Breakdown:
*   **Throttled Quantity:** At $\$10$, $Q_d = 4$ and $Q_s = 10.67$. The system bottlenecks at actual units sold = **$4$**.
*   **Welfare Realignment:**
    *   **CS (Triangle):** $\frac{(12 - 10) \times 4}{2} = 4$
    *   **PS (Trapezoid):** $\text{Rectangle } [ (10 - 5) \times 4 = 20 ] + \text{Triangle } [ \frac{(5 - 2) \times 4}{2} = 6 ] = 26$
*   **Systemic Leakage (Deadweight Loss):** 
    $$\text{DWL} = \frac{(10 - 5) \times (8 - 4)}{2} = 10$$

---

## 4. Model 03: Low Artificial Boundary (Price Ceiling = \$5)

Imposing a legal maximum price below equilibrium restricts manufacturer capability and generates structural supply depletion (a market shortage).

<img src="/assets/economics-welfare/price-ceiling-shortage.png" alt="Price Ceiling Market Distortion" width="100%" />

### Quantitative Breakdown:
*   **Throttled Quantity:** At $\$5$, $Q_s = 3$ and $Q_d = 10$. The system bottlenecks at actual units sold = **$3$**.
*   **Welfare Realignment:**
    *   **CS (Trapezoid):** $\text{Rectangle } [ (7.8 - 5) \times 3 = 8.4 ] + \text{Triangle } [ \frac{(9 - 7.8) \times 3}{2} = 1.8 ] = 10.2$
    *   **PS (Triangle):** $\frac{(5 - 2) \times 3}{2} = 4.5$
*   **Systemic Leakage (Deadweight Loss):**
    $$\text{DWL} = \frac{(7.8 - 5) \times (5 - 3)}{2} = 2.8$$
