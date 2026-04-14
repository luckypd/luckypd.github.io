---
layout: post
title: 04 행렬(Matrix)
date: 2026-03-23 15:50:00-0900
description: 선형대수 학습 노트 04
tags: Linear_Algebra, statistics, 행렬, matrix
categories: methodology
related_posts: true
---

### 1. 행렬의 개념 (Concept of Matrix)

행렬은 단순히 숫자를 가로(Row)와 세로(Column)로 배열한 직사각형 모양의 표이다. 하지만 선형대수 관점에서 행렬은 '함수(Function)'이자 '공간을 변형시키는 규칙'이다. 행렬은 벡터를 입력받아 다른 벡터로 출력하는 '변환 기계'이다.

A matrix is a rectangular array of numbers. More importantly, it acts as a linear transformation machine that turns one vector into another.

---

### 2. 행렬을 쓰는 이유 (Why We Use Matrices)

단순히 숫자를 정리하는 것 이상으로, 행렬이 선형대수에서 필수적인 이유는 크게 두 가지이다.

- 효율적인 데이터 압축 (Compactness & Efficiency)
	- 수백 개의 연립방정식을 일일이 쓰는 대신, 행렬 하나($A$)로 묶어서 표현할 수 있다. 이는 복잡한 시스템을 $Ax = b$라는 아주 단순한 수식 하나로 요약하게 해준다.
	- "Matrices help us store a lot of data in one place. Instead of writing 100 equations, we just write one matrix $A$."    
- 2.2. 공간의 이동과 변형 (Geometry & Transformation)
	- 행렬은 공간 속에 있는 벡터를 회전시키거나, 늘리거나, 대칭 이동시키는 '명령서' 역할을 한다. 예를 들어, 어떤 행렬은 "모든 벡터를 오른쪽으로 45도 회전시켜라"라는 정보를 담고 있다.
	- "A matrix can rotate, stretch, or shrink space. It tells vectors where to move."   

---

### 3. 행렬의 활용 (Applications of Matrix)

행렬은 현대 기술의 거의 모든 분야에서 중추적인 역할을 한다.

- **인공지능 (AI & Machine Learning):** 신경망의 수많은 '가중치(Weights)'가 행렬 형태로 저장된다. 우리가 AI에게 질문을 던지면, AI는 행렬 연산을 통해 답을 찾아낸다.
- **컴퓨터 그래픽스 (Computer Graphics):** 게임이나 영화 속 캐릭터가 움직일 때마다 수백만 개의 행렬 연산이 일어나서 캐릭터의 위치와 모양을 바꾼다.
- **네트워크 분석 (Network Analysis):** 구글 검색 엔진은 웹페이지들 사이의 연결 관계를 거대한 행렬로 만들어 순위를 매긴다(PageRank).

---

### 4. 행렬의 종류

#### 4.1. 형태에 따른 분류

가장 기본적인 분류는 행과 열의 개수에 따른 구분이다.

- **정사각행렬 (Square Matrix):** 행의 개수($n$)와 열의 개수($n$)가 같은 행렬이다. ($n \times n$ 행렬)
    
    - 예시: $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
        
- **직사각행렬 (Rectangular Matrix):** 행과 열의 개수가 다른 행렬이다. ($m \times n$ 행렬)
    
    - 예시: $\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$
        
- **열벡터 (Column Vector):** 하나의 열로만 이루어진 행렬이다. ($m \times 1$ 행렬)
    
- **행벡터 (Row Vector):** 하나의 행으로만 이루어진 행렬이다. ($1 \times n$ 행렬)
    
#### 4.2. 특수한 원소를 가진 행렬

원소의 배치나 값에 특별한 규칙이 있는 정사각행렬이다.

* 영행렬 (Zero Matrix): 모든 원소가 0인 행렬. 보통 $O$로 표기하며, 행렬의 덧셈에 대한 항등원 역할

> 	예시: $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$

* 대각행렬 (Diagonal Matrix): 주대각선(왼쪽 위에서 오른쪽 아래 방향) 성분을 제외한 모든 성분이 0인 정사각행렬

> 	예시: $\begin{pmatrix} 3 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

* 단위행렬 (Identity Matrix): 주대각선 성분이 모두 1이고 나머지 성분은 0인 대각행렬. 보통 $I$ 또는 $E$로 표기하며, 행렬의 곱셈에 대한 항등원 역할

> 	예시: $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

* 삼각행렬 (Triangular Matrix): 주대각선을 기준으로 위쪽이나 아래쪽 성분이 모두 0인 행렬입니다.

- **상삼각행렬 (Upper Triangular):** 주대각선 아래쪽 성분이 모두 0.
    
- **하삼각행렬 (Lower Triangular):** 주대각선 위쪽 성분이 모두 0.
    
#### 4.3. 연산 및 성질에 따른 분류

데이터 분석이나 물리적 변환을 다룰 때 자주 등장하는 중요한 행렬들이다.

- 전치행렬 (Transpose Matrix): 원래 행렬의 행과 열을 맞바꾼 행렬로 $A^T$로 표기

> 	$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} \rightarrow A^T = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix}$

- 대칭행렬 (Symmetric Matrix): 전치행렬이 자기 자신과 같은 정사각행렬. 즉, $A = A^T$를 만족

> 	예시: $\begin{pmatrix} 1 & \mathbf{2} \\ \mathbf{2} & 3 \end{pmatrix}$ (주대각선을 축으로 대칭)

- 역행렬 (Inverse Matrix): 행렬 $A$와 곱했을 때 단위행렬 $I$가 나오게 하는 행렬로, $A^{-1}$로 표기. 모든 행렬이 역행렬을 가지는 것은 아니며, 행렬식(Determinant)이 0이 아니어야 한다.

> 	$AA^{-1} = A^{-1}A = I$

 - 직교행렬 (Orthogonal Matrix): 자신의 전치행렬이 역행렬과 같은 행렬 ($A^T = A^{-1}$ 또는 $AA^T = I$) 각 열벡터들이 서로 수직(Orthogonal)이고 크기가 1이다.