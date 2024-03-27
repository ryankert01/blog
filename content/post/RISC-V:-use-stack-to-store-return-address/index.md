---
title: "RISC-V: Use Stack to Store Return Address"
description: 
date: 2024-03-27T17:56:44+08:00
image: 
hidden: false
comments: true
categories:
    - RISC-V
tags:  
    - RISC-V
    - Stack
---

## Intro

In RISC-V, the return address is stored in the `ra` register. However, in some cases, you may want to use the stack to store the return address. This can be useful when you need to save the return address before calling a function and restore it after the function returns.

## Best Practice

To use the stack to store the return address in RISC-V, you can follow these steps:

1. Push the return address onto the stack before calling the function.
2. Call the function.
3. Pop the return address from the stack after the function returns.

Here is an example of how to use the stack to store the return address in RISC-V:

```assembly
.section .text
.global _start


_start:
    # Push the return address onto the stack
    addi sp, sp, -4
    sw ra, 0(sp)

    # Call the function
    jal function

    # Pop the return address from the stack
    lw ra, 0(sp)
    addi sp, sp, 4

    # Exit the program
    li a7, 93
    li a0, 0
    ecall

function:
    # Function body
    ret
```
