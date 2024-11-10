### 11/04/2024-11/10/2024, Fall 2024 Week 6
 
* Universal Enveloping Algebras, Nilpotent Lie Algebras 

I fell in love with the expositions of the mastero Jean-Pierre Serre. His level of concision is unmatched, and reading it feels like him standing in front of me giving me a live lecture. And also he has so many relevant books that lies right on my interest: Lie Groups and Lie Algebras, A Course in Arithmetic, Local Fields, Galois Cohomology, and much more...

* Whitney's Embedding Theorem, Smooth Approximation Theorem
* Hilbert's Theorem 90, Ring of Integers of Cyclotomic Fields

Hilbert's Theorem 90 gives an explicit description of the kernel of the norm map of a finite cyclic extensions of fields. Namely,
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mo>ker</mo>
    <msub>
      <mi>N</mi>
      <mrow>
        <mi>L</mi>
        <mi>/</mi>
        <mi>K</mi>
      </mrow>
    </msub>
    <mo>=</mo>
    <mo stretchy="false" form="prefix">{</mo>
    <mfrac>
      <mrow>
        <mi>σ</mi>
        <mrow>
          <mo stretchy="true" form="prefix">(</mo>
          <mi>β</mi>
          <mo stretchy="true" form="postfix">)</mo>
        </mrow>
      </mrow>
      <mi>β</mi>
    </mfrac>
    <mo>∣</mo>
    <mi>β</mi>
    <mo>∈</mo>
    <msup>
      <mi>L</mi>
      <mo>×</mo>
    </msup>
    <mo stretchy="false" form="postfix">}</mo>
  </mrow>
</math>
<br>

One of the graduate students here Zach Baguher gave a Graduate students seminar talk on Proving Theorems by Overkill. One of his examples was to show that there exists a nontrivial rational point on the unit circle, and the way he proved it was to show that there exists a point for every p-adics by Hensel's Lemma and for the real field. I think we can similarly overkill this problem by Hilbert 90, which gives even more: an explicit description of the pythagorean triples.
* Solving group theory problems on the Algebra Qual

I learned a new trick in checking that a group is not simple. When we exhaust all information from Sylow Theorems, we can instead look at the normalizer <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <msub>
      <mi>N</mi>
      <mi>G</mi>
    </msub>
    <mrow>
      <mo stretchy="true" form="prefix">(</mo>
      <mi>P</mi>
      <mo stretchy="true" form="postfix">)</mo>
    </mrow>
  </mrow>
</math>
here, which has order 
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mrow>
      <mo stretchy="true" form="prefix">|</mo>
      <mi>G</mi>
      <mo stretchy="true" form="postfix">|</mo>
    </mrow>
    <mi>/</mi>
    <mrow>
      <mo stretchy="true" form="prefix">|</mo>
      <mtext mathvariant="normal">orb</mtext>
      <mrow>
        <mo stretchy="true" form="prefix">(</mo>
        <mi>P</mi>
        <mo stretchy="true" form="postfix">)</mo>
      </mrow>
      <mo stretchy="true" form="postfix">|</mo>
    </mrow>
  </mrow>
</math>
and then we can apply the second isomorphism theorem and Frattini's Argument to count elements and get a contradiction. The exercise that taught me this trick is about showing that every group of order 315 is the direct product of a group of order 5 and a semidirect product of a group of order 7 and a subgroup of order 9.
* Filling in gaps in category theory

My understanding in category theory had always been that of any pure mathematician outside of algebra-demanding fields like homotopy theory. I am familiar with common categorical constructs and definitions, and I speak the categorical language frequently, but I would never say that I am good at it. Reading the algebra class notes made me realize there were many constructs I didn't know. I learned about comma categories, universal objects, universal objects, and cleared up my confusion on subtle things as small as "should I call this right or left, over or under?". In future weeks, I hope to go over the last chapters of Riehl's Category Theory in Context and do tons of exercise, so I can become better in proving things in abstract nonsense style.
