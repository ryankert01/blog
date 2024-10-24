---
title: "Cryptography and Network Security Ch2"
description: 
date: 2024-10-24T10:56:59+08:00
image: 
hidden: false
comments: true
categories:
    - Cryptography and Network Security
tags:  
    - Network Security
    - Cryptography
---

### **Introduction to Number Theory**

**1. Divisibility:**
- A nonzero integer $b$ divides $a$ if $a = mb$ for some integer $m$, which means $b$ divides $a$ with no remainder.
- **Notation:** $b \mid a$, meaning $b$ is a divisor of $a$.
- **Example:** Positive divisors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24.

**2. Properties of Divisibility:**
- If $a \mid 1$, then $a = \pm 1$.
- If $a \mid b$ and $b \mid a$, then $a = \pm b$.
- Any nonzero $b$ divides 0.
- **Transitivity:** If $a \mid b$ and $b \mid c$, then $a \mid c$.

**3. Division Algorithm:**
- For any integer $a$ and positive integer $n$, dividing $a$ by $n$ yields a quotient $q$ and remainder $r$, such that:
  $$a = qn + r, \quad 0 \leq r < n$$
  Example: $11 \div 7 = 1$ quotient, $r = 4$ remainder.

**4. Euclidean Algorithm:**
- A method to find the greatest common divisor (GCD) of two integers.
- Two integers are relatively prime if their only common divisor is 1.

**5. GCD (Greatest Common Divisor):**
- The GCD of $a$ and $b$ is the largest integer that divides both.
- **Properties:** 
  - $\gcd(a,b) = \gcd(|a|,|b|)$.
  - $\gcd(a,0) = |a|$.

**6. Modular Arithmetic:**
- If $a$ is an integer and $n$ is positive, $a \mod n$ is the remainder when $a$ is divided by $n$.
- **Properties of Modular Arithmetic:**
  $$[(a \mod n) + (b \mod n)] \mod n = (a + b) \mod n$$
  $$[(a \mod n) - (b \mod n)] \mod n = (a - b) \mod n$$
  $$[(a \mod n) \cdot (b \mod n)] \mod n = (a \cdot b) \mod n$$

**7. Prime Numbers:**
- A prime number has no divisors other than 1 and itself.
- **Fundamental Theorem of Arithmetic:** Any integer $a > 1$ can be factored uniquely into prime numbers.

**8. Fermat’s Theorem:**
- If $p$ is a prime number and $a$ is a positive integer not divisible by $p$:
  $$a^{p-1} \equiv 1 \pmod{p}$$

**9. Euler’s Theorem:**
- If $a$ and $n$ are relatively prime, then:
  $$a^{\phi(n)} \equiv 1 \pmod{n}$$
  where $\phi(n)$ is Euler’s totient function.

**10. Primality Testing:**
- **Miller-Rabin Algorithm:** A probabilistic algorithm to test whether a number is prime.
- **AKS Algorithm:** A deterministic primality test, though less efficient than Miller-Rabin.

**11. Chinese Remainder Theorem:**
- Allows reconstruction of an integer from its residues modulo a set of pairwise relatively prime integers.

### **Key Concepts to Focus on:**
- **Understanding Divisibility** and how it affects number theory.
- **Euclidean Algorithm**: Crucial for finding the GCD.
- **Modular Arithmetic**: Forms the basis for cryptography, especially for operations like encryption and hashing.
- **Fermat's and Euler’s Theorems**: Important for encryption algorithms like RSA.
- **Prime Numbers and Primality Testing**: Core concepts for cryptographic systems.
