---
title: "CKA Core Concepts"
description: 
date: 2024-07-25T20:08:26+08:00
image: 
hidden: false
comments: true
categories:
    - Example Category
tags:  
    - Example Tag
---

## ETCD

1. Etcd is a distributed reliable key-value store that is simple, secure, and fast.
2. Key-value store (document DB, jasn-yaml-like structure)
    - set a key value pair in etcd:
    ```sh
    etcdctl set key value
    ```
3. Every info (eg. Nodes, pods, configs, secrets) are stored in ETCD cluster.
4. k8s stored structure:  
![alt text](image.png)

## Kube-API server

1. how `get node` work?

![alt text](image-1.png)

2. how `create pod` work?

![alt text](image-2.png)

## Kube controller Manager

1. Continueously watch the status.
2. take necessary action to remediate the situation.

remediate: *to correct something that is wrong or damaged or to improve a bad situation.*