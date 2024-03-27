---
title: "RISC V: Tips and Tricks"
description: 
date: 2024-03-27T20:45:51+08:00
image: 
hidden: false
comments: true
categories:
    - Example Category
tags:  
    - Example Tag
---

## Basics

### Registers

![register conventions](<Screenshot 2024-03-27 at 11.39.36 PM.png>)

### Pseudo Instructions

- `li` is used to load an immediate value into a register.
- `la` is used to load an address into a register. (also can load a label address)
- `mv` is used to move a value from one register to another. (inclusive of addresses)
- `ret` is used to return from a function using the `ra` register.

### Print the prompt and read an integer

```asm
# Print the prompt
la a0, prompt      # Load address of the prompt into a0
li a7, 4           # System call for printing string
ecall              # Execute the call

# Read an integer
li a7, 5           # System call for reading an integer
ecall              # Execute the call, integer is now in a0

# Store the integer in another register, e.g., t0
mv t0, a0          # Move the integer from a0 to t0
```


## Branch will not store return address(ra)

blt, bge, bltu, bgeu, etc. will not also set the `ra` register. If you want to use the return address, you need to save it before the branch instruction. or use labels and `jal` instruction.

eg. the following code is a function demostrates `1` times `a2` to `a3 + 1`:
```asm
times_a2_to_a3_plus_1:
	li a0, 1
times_a2_to_a3_plus_1_loop:
	beq a2, a3, times_a2_to_a3_plus_1_end
	div t4, t5, a2
	bge a0, t4, raise_int_max_exceeded
	mul a0, a0, a2
	addi a2, a2, -1
	j times_a2_to_a3_plus_1_loop
times_a2_to_a3_plus_1_end:
	jr ra  # or `ret` alternatively
	
raise_int_max_exceeded:
	la a0, strRaisedIntMaxExceeded
	li a7, 4
	ecall
	jr t3
```

in line 6, where I invoke the `raise_int_max_exceeded` function, I save the return address in `t3` register. and in the `raise_int_max_exceeded` function, I use `jr t3` to return to the caller.

## Difference between `jal`, `jalr`, `j`, `jr`

- `jal` and `jalr` is used to jump to a **label** and save the return address in `ra` register.
- `jalr` is used to jump to a **register** and save the return address in `ra` register.
- `j` is used to jump to a **label**.
- `jr` is used to jump to a **register**.

## Use stack to save registers

eg.

```asm
validate_input:
	addi sp, sp, -4
	sw ra, 0(sp)
	
	# assert M > 0
	blez s1, raised_not_natural
	# assert N >= 0
	blt s2, zero, raised_less_than_zero
	# assert M >= N
	blt s1, s2, raised_M_smaller_than_N
	
	lw ra, 0(sp)
	addi sp, sp, 4
	ret
```

for more info, visit this blog post: [RISC-V: Use Stack to Store Return Address]({{< relref "RISC-V:-use-stack-to-store-return-address" >}})