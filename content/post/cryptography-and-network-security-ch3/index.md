---
title: "Cryptography and Network Security Ch3"
description: 
date: 2024-10-24T11:15:27+08:00
image: 
hidden: false
comments: true
categories:
    - Cryptography and Network Security Ch3
tags:  
    - Network Security
    - Cryptography
---

## 1. **Overview of Classical Encryption Techniques**

Classical encryption techniques form the foundation of modern cryptography, relying on a set of methods to secure communication. These techniques can be categorized into two types:
- **Substitution Ciphers**: Replacing letters or bits with other elements.
- **Transposition Ciphers**: Rearranging the order of elements without changing them.

## 2. **Symmetric Cipher Model**
A symmetric cipher requires:
- **A strong encryption algorithm**.
- **A secure, shared secret key** between the sender and receiver.

Examples of **Symmetric Ciphers**:
- **Caesar Cipher**
- **Vigenère Cipher**
- **Hill Cipher**

## 3. **Encryption Scheme Security**
Encryption schemes can be categorized by their security:
- **Unconditionally Secure**: Impossible to break the encryption, regardless of the time or computational power (e.g., one-time pad).
- **Computationally Secure**: It would take an impractically long time or too many resources to break the encryption.

## 4. **Substitution Ciphers**
Substitution ciphers replace letters of the plaintext with other symbols or letters.

### 4.1 **Caesar Cipher**
- **Concept**: Shifts each letter of the plaintext by a fixed number of positions in the alphabet.
  - Example: Shifting letters by 3.
    - **Plaintext**: meet me after the toga party
    - **Ciphertext**: PHHW PH DIWHU WKH WRJD SDUWB
  - **Mathematical Formula**:  
    $$ C = E(k, p) = (p + k) \mod 26 $$ where $p$ is the letter’s index in the alphabet and $k$ is the shift.

- **Vulnerability**: Easy to break through brute-force attack due to limited possible keys (25 shifts).

### 4.2 **Monoalphabetic Cipher**
- Uses a single substitution alphabet.
- There are **26!** possible keys (around $4 \times 10^{26}$).
- **Weakness**: It can be broken through frequency analysis because it preserves the frequency of letters.

### 4.3 **Playfair Cipher**
- A **digrams-based cipher**: Encrypts two letters at a time using a 5x5 key matrix.
  - Example: With the keyword **MONARCHY**, the letters are filled into the matrix, and each digram in the plaintext is mapped to corresponding cipher digrams.

## 5. **Polyalphabetic Ciphers**
Polyalphabetic ciphers use multiple substitution alphabets, improving security by alternating the substitution rules.

### 5.1 **Vigenère Cipher**
- **Concept**: Each letter of the plaintext is encrypted using a Caesar cipher, but the amount of shift depends on a repeating key.
  - Example:
    - **Key**: deceptive
    - **Plaintext**: wearediscoveredsaveyourself
    - **Ciphertext**: ZICVTWQNGRZGVTWAVZHCQYGLMGJ

### 5.2 **Vigenère Autokey System**
- Extends the key by appending part of the plaintext to it.
  - Example:
    - **Key**: deceptivewearediscovered
    - **Plaintext**: wearediscoveredsaveyourself
    - **Ciphertext**: ZICVTWQNGKZEIIGASXSTSLVVWLA
- **Weakness**: Still vulnerable to frequency analysis.

## 6. **Transposition Ciphers**
Transposition ciphers scramble the order of letters in the plaintext without changing the actual letters.

### 6.1 **Rail Fence Cipher**
- Write the message diagonally and read it off row by row.
  - Example:
    - **Plaintext**: meet me after the toga party
    - **Ciphertext**: MEMATRHTGPRYETEFETEOAAT

### 6.2 **Row Transposition Cipher**
- Write the message in rows, but read it off by columns after permuting the order of columns.
  - Example:
    - **Plaintext**: attack postponed until two am xyz
    - **Key**: 4312567
    - **Ciphertext**: TTNAAPTMTSUOAODWCOIXKNLYPETZ

## 7. **Brute-Force Attacks and Cryptanalysis**
- **Brute-Force Attack**: Trying all possible keys until the correct one is found. This is feasible for weak ciphers like the Caesar cipher but becomes infeasible for stronger ciphers with large key spaces (e.g., AES).
- **Cryptanalysis**: Analyzing the structure of the encryption scheme to find vulnerabilities (e.g., frequency analysis for substitution ciphers).

### Table: **Types of Attacks on Encrypted Messages** (from textbook)
- **Ciphertext-only Attack**: Attacker only has the ciphertext.
- **Known-plaintext Attack**: Attacker has access to both the plaintext and the ciphertext.
- **Chosen-plaintext Attack**: Attacker can encrypt chosen plaintext messages.
- **Chosen-ciphertext Attack**: Attacker can decrypt chosen ciphertext messages.

## 8. **Key Concepts to Study**
- **Difference between substitution and transposition ciphers**.
- **Cryptanalysis techniques**, such as frequency analysis for monoalphabetic ciphers.
- **Modern implications** of classical techniques (e.g., the importance of key length in modern encryption).

## Practical Example

To better understand how substitution and transposition work, try encrypting a simple message using the following steps:
1. **Use the Caesar cipher** with a shift of 4:
   - Plaintext: hello
   - Ciphertext: lipps
2. **Try the Vigenère cipher** with the key "key":
   - Plaintext: cryptography
   - Ciphertext: MVZZYZVKHNML
3. **Encrypt using a Rail Fence cipher** with a depth of 3:
   - Plaintext: security
   - Ciphertext: SCITYEUR
