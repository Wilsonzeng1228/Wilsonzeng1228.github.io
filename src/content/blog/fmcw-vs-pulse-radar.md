---
title: "FMCW 连续波 vs 脉冲雷达发射体制"
description: "对比 FMCW 与脉冲雷达的发射方式、测距原理、功率和采样硬件，并说明 dechirp 为什么是 FMCW 的核心。"
pubDate: 2026-08-06
tags:
  - 雷达信号处理
  - FMCW
  - 脉冲雷达
draft: false
---

> 来源：TI SPYY005A §1；《FMCW 基础学习-第一阶段》§1；learning-tutor `fmcw-vs-pulse-tx` 知识点（block1，2026-08-06）。

## 体制对比

| 维度 | FMCW（调频连续波） | 脉冲雷达 |
| --- | --- | --- |
| 发射方式 | 连续发射周期性 chirp（扫频） | 发射短脉冲，间隔听回波 |
| 测距原理 | dechirp 混频 → beat 频率 → `R = c·fb/(2S)` | 回波时延 `τ` → `R = c·τ/2`（或脉冲压缩/匹配滤波） |
| 峰值功率 | 低（连续波） | 高（短脉冲） |
| 采样硬件 | 混频器 + 低速 ADC（采集 beat，MHz 级） | 高速 ADC 或匹配滤波器（采集射频/中频） |
| 典型场景 | 车载近距（77 GHz，几米至 200 m） | 远距探测、军事、气象 |

## FMCW 的核心动作：dechirp

FMCW 不直接测量纳秒级时延，而是把回波 chirp 与本振 chirp 混频（dechirp），得到低频 beat 信号，把“测时延”转换成“测频率”。这是 FMCW 体制的核心，脉冲雷达不采用这条测距路径。

## FMCW 为什么适合车载

1. **低峰值功率**：固态器件容易实现，成本低且不需要高压。
2. **Beat 信号频率低（MHz 级）**：可使用成本较低的 ADC，后续 DSP 处理也更简单。
3. **近距离测距精度高**：带宽为 4 GHz 时，距离分辨率 `ΔR = 3.75 cm`。

## 关联主题

- **Chirp 信号解析式与 B、Tc、S 参数关系**：FMCW 发射的连续周期信号就是 chirp，chirp 是 FMCW 体制的信号载体。
- **Dechirp 原理：测时延如何变成测频率**：dechirp 是 FMCW 区别于脉冲雷达的核心测距动作。
- **FMCW dechirp 与 LFM 脉冲压缩的本质区别**：项目中的 `example.m` 使用 LFM 脉冲压缩（匹配滤波），与 FMCW dechirp 属于两种不同体制。
