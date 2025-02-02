---
title: "Apache Yunikorn 的 Preemption 機制"
description: "YuniKorn的預佔機制是一種智能資源管理功能，允許高優先級任務在需要時自動獲取資源，以確保關鍵工作負載的效能和系統整體的資源利用率。"
date: 2024-09-17T11:42:24+08:00
image:
hidden: false
comments: true
categories:
  - k8s
tags:
  - Yunikorn
  - Apache Yunikorn
---

## 目的和功能

YuniKorn 中的預佔機制允許高優先級任務通過預佔低優先級任務來動態重新分配資源，確保關鍵工作負載獲得必要的資源。這種主動機制維持系統穩定性和公平性，並與 Kubernetes 的優先級類別和 YuniKorn 的層級佇列系統整合。

## 預佔類型(Preemption type)

YuniKorn 提供兩種預佔類型：

1. 通用預佔：基於層級佇列模型，允許 Pod 選擇不運行。
2. DaemonSet 預佔：確保必須在特定節點上運行的 Pod 能夠運行。

## 主要特點

- 延遲觸發：預佔在指定延遲後觸發，可通過`preemption.delay`屬性配置。
- 層級佇列模型：預佔確保每個佇列的資源使用達到至少保證的資源量。
- 預佔法則：YuniKorn 實施七條預佔法則，以防止預佔風暴或循環。（下面會說明）

## 配置

1. 佇列配置：可以在佇列級別使用`preemption.policy`和`preemption.delay`等屬性配置預佔。

2. Pod 級別配置：Pod 可以使用`yunikorn.apache.org/allow-preemption`註釋選擇不被預佔。

3. 優先級類別：YuniKorn 與 Kubernetes 的 PriorityClasses 整合以進行預佔。

## 預佔法則(Preemption Rules)

YuniKorn 遵循七條預佔法則，以確保公平和高效的資源分配：

1. 預佔策略是強烈建議，而非保證。
2. 預佔不能使佇列低於其保證容量。
3. 任務不能預佔同一應用程序中的其他任務。
4. 只有當佇列低於保證容量時，任務才會觸發預佔。
5. 只有當佇列超過保證容量時，任務才會被預佔。
6. 任務只能預佔優先級較低或相等的任務。
7. 任務不能預佔其預佔圍欄之外的任務。

## 預佔圍欄(Preemption fencing)

YuniKorn 引入了預佔圍欄(Preemption fencing)的概念，允許將預佔範圍限制在某些佇列中。這確保特定佇列（及其子佇列）的優先級在內部評估，防止在多租戶環境中進行跨租戶預佔。

通過實施這些預佔功能，YuniKorn 為複雜的 Kubernetes 環境提供了靈活而強大的調度解決方案，實現了跨各種工作負載和租戶的高效資源分配和優先級排序。
