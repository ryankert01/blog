---
title: "Assembly Language and Computer Organization"
description: 
date: 2024-03-06T08:53:38+08:00
image: 
math: 
keywords: ["Assembly Language", "Computer Organization"]
---

## First Look

### Moore's Law

- The number of transistors on a chip doubles every 18 to 24 months

### Types of Computer Systems

- Embedded Systems: Cameras, Cars, Phones, etc.
- Desktop Systems: Personal Computers
- Server Systems: Web Servers, Database Servers, etc.

### Seven Great Ideas in Computer Architecture

1. Use **abstractions** to simplify design
    - Example: Using high-level programming languages like C++ or Java to abstract away low-level details and simplify software development.

2. Make the **common case fast**
    - Example: Optimizing algorithms and data structures for the most frequently performed operations to improve overall performance.

3. Performance via **parallelism**
    - Example: Utilizing multi-threading or distributed computing to execute multiple tasks simultaneously and achieve faster execution times.

4. Performance via **pipelining**
    - Example: Breaking down complex tasks into smaller stages and processing them concurrently to improve throughput and reduce latency.

5. Performance via **prediction**
    - Example: Implementing branch prediction techniques to minimize the impact of conditional branches on the execution pipeline.

6. **Hierarchy** of memories
    - Example: Utilizing different levels of cache memory (L1, L2, L3) to store frequently accessed data closer to the processor for faster access.

7. Dependability via **redundancy**
    - Example: Implementing redundant components or backup systems to ensure system reliability and fault tolerance.

### 程式處理階層 (Software Hierarchy)
- 應用程式(Application software)：為了達成特定需求(如遊戲、圖片\影片編輯......等等)，由高階語言編成的軟體。
- 系統軟體(System software) ：負責管理及協調硬體階層，包括了作業系統及編譯器等等。
- 硬體層面(Hardware)：囊括了處理器、記憶體，以及IO控制器等等.

### 程式語言處理階層 (Language Hierarchy)
- 高階語言(High level language)：貼近人類語言，容易閱讀及編寫，透過編譯器或直譯器轉換為機器碼。
- 組合語言(Assembly language)：屬於低階語言，指令多與處理器直接對應，以文字來描述機器的行為，透過組譯器轉換為機械碼。
- 機器碼(Machine code)：由0和1構成的處理器的指令集，電腦可以直接識別。

### 電腦的元件：

不論是嵌入式、伺服器，或是桌上型電腦，都包含了這5個主要部分：

1. 輸入(Input)
2. 輸出(Output)
3. 記憶體(Memory)
4. 資料路徑(Datapath)
5. 控制(Control)

其中，資料路徑(Datapath)與控制(Control)有時會合併成為處理器(Processor)。

## Evaulating Computer Performance

### Response Time vs. Throughput

- Response Time(反應時間): Also known as elapsed time, it represents the time required to complete a task. It includes CPU time, I/O, OS overhead, and idle time.
- Throughput(生產能力): The amount of work that can be completed within a certain period of time.

### CPU time

$$CPU time = IC \times CPI \times t$$

- IC: Instruction count
- CPI: Cycles per instruction
- t: Clock cycle time

### CPI

CPI (Cycle per instruction) ，表示每執行一個指令(Instruction)，所要花費的時脈周期。  
Clock cycle time (t) ，表示每一個時脈周期所花費的時間。  
Clock Cycles (ClockCycles) ，表示執行所有指令所花費的時脈周期個數。
$$ClockCycles = \sum IC_i \times CPI_i$$  
Average CPI: $$avgCPI = \frac{ClockCycles}{IC}$$  
指令的個數由編譯器、ISA(ISA instruction set architecture)、程式與演算法共同決定。

### CPU Power

$$Power = Capacitance \times Voltage^2 \times Frequency$$

**Power Wall**: To achieve high frequency and low power, it is necessary to mitigate the impact of both factors. However, after 2004, the techniques of **reducing voltage** and **cooling** reached saturation and stagnation. This resulted in a power wall, which posed a significant challenge in improving processor performance. To overcome this challenge, the focus shifted towards the development of multi-core processors.

### Amdahl's Law (阿姆達爾定律)

$$Speedup = \frac{1}{(1 - P) + \frac{P}{S}}$$

- P: Fraction of the program that can be parallelized
- S: Speedup of the parallelizable portion

Since the parallelizable portion of the program is limited by the sequential portion, **the speedup is also limited**. This is known as Amdahl's Law.

## Cost per die(晶片成本)

- Cost per die:  
$$CostPerDie = \frac{CostPerWafer}{DiePerWafer \times Yield}$$
- Die per wafer:
$$DiePerWafer \approx \frac{WaferArea}{DieArea} \approx \frac{\pi \times (WaferDiameter/2)^2}{DieArea}$$
- Yield:
$$Yield = \frac{1}{(1-(DefectsPerArea \times DieArea))^N}$$

    - DefectsPerArea: The number of defects per unit area
