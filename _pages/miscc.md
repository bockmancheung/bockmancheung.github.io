---
layout: archive
title: "Miscellaneous"
permalink: /miscc/
author_profile: true
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

<div class="aside">
  
Friends
------
* <a href="https://loganhyslop.github.io"> Logan Hyslop </a>, my great precursor who does real math. <br>
* <a href="https://max.steinbergfour.com/"> Max Steinberg </a> <br>
* <a href="https://benspitz.com/"> Ben Spitz </a>, my DRP mentor who is mega cool. <br>
* <a href="https://amgminequality.github.io/"> Eaton Liu </a>, aspiring logician <br>
* <a href="http://bzhangbp.student.ust.hk/"> Baining (Ben) Zhang </a> <br>
* <a href= "https://teinc3.github.io/"> Ron Shum </a> <br>
* <a href= "https://akselai.github.io/"> Hiu-Long Chan (Akselai) </a> <br>

Harmless funsies 
------
## Translating Grothendieck's EGA (to learn Math and French) <br>
Sentences might be incomplete; my rule of translation here is to convey the mathematics most closely resembling the orignial version. The preservation of literary value comes closely after that. <br>

### 1.0. Rings and Algebras <br>
(1.0.1)  (05/09/2024) All the rings we consider here are assumed to be unital; all modules over some ring is supposed to contain a multiplicative identity; the ring homomorphisms are assumed to map a unital element to a unital element; unless mentioning explicitly to the contrary, an automorphism of a ring \(A\) is assumed to be fixing unital elements. We consider in most cases a commutative ring, and when we do not mention explicitly, the ring in question is assumed to be commutative. If \(A\) is a ring not necessarily commutative, the A-module is still understood as a left module, unless otherwise mentioned. <br>
(1.0.2) (05/09/2024) Let \(A,B\) be two rings, not necessarily commutative, and \(\phi: A \to B\) be a homomorphism. For all left (resp. right) \(B\)-module \(M\), we can define an \(A\)-module strucutre by the formula \(a \cdot m := \phi(a)\cdot m \) (resp. \(m \cdot a := m \cdot \phi(a)\); when we distinguish \(M\) as \(A\) and \(B\) modules, we call the module \(M_{\phi}\) by definition. If \(L\) is an \(A\)-module, a homomorphism \(u: L \to M_{\phi}\) can be obtained by defining on the abelian groups such that \(u(a\cdot x) = \phi(a)\cdot u(x)\) for \(a \in A, x \in L\); in a fancy way, there is a homomorphism \(L \to M\), with a couple  \(\phi, u\) that is a *di-homomorphism* \((A,L) \to (B,M)\). The couples \((A,L)\) consists of a ring \(A\) and a \(A\)-module \(L\) forms a catgeory with morphisms as *di-homomorphisms*.  
