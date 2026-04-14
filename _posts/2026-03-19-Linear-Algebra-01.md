---
layout: post
title: 01 선형대수의 개념
date: 2026-03-19 15:50:00-0900
description: 선형대수 학습 노트 01
tags: Linear_Algebra, statistics
categories: methodology
related_posts: true
---

선형대수는 벡터(Vector)와 행렬(Matrix)을 다루는 수학의 한 분야이다. 단순히 숫자를 계산하는 것을 넘어, 선형 방정식(Linear Equations)을 효율적으로 해결하고, 벡터가 존재하는 공간의 성질과 그 공간이 어떻게 변하는지(Linear Transformation)를 연구하는 학문이다.

Linear Algebra is a branch of mathematics concerning vector spaces and linear mappings between these spaces. It focuses on representing and solving systems of linear equations using matrices.

선형대수는 한마디로 '직선(Linear)들의 관계를 다루는 계산법(Algebra)'이다. 즉 "수많은 직선적 관계(데이터)를 행렬이라는 도구로 묶어서, 공간 속에서 효율적으로 다루는 학문"이다.

<hr>

#### 1. 선형(線型, Linear)

'선형'은 예측 가능한 직선적인 관계를 말한다.

Linear means a straight line. It is predictable. If you double the input, you double the output

- 내가 1시간을 달려서 10km를 갔다면, 2시간을 달리면 20km를 갈 것이라고 예상할 수 있다.
- 이렇게 넣는 값(Input)에 비례해서 결과(Output)가 나오는 정직한 관계를 '선형'이라고 한다.
- 그래프로 그리면 굽어짐 없이 쭉 뻗은 직선이나 평면이 된다.
- 장점
	- [x] 계산의 단순함 (Simplicity of Calculation): 선형적인 관계는 계산하기가 매우 쉽다. 입력이 2배가 되면 결과도 2배가 된다는 규칙 덕분에, 아무리 데이터가 많아도 컴퓨터가 순식간에 계산할 수 있다.
	- [x] 조각내서 풀기: 중첩의 원리 (Superposition): 복잡하고 큰 벡터(문제)를 여러 개의 작은 벡터로 쪼개서 각각 계산한 뒤, 나중에 다시 합쳐도 결과가 같다. $f(a + b) = f(a) + f(b)$
	- [x] 차원의 확장성 (Scalability to High Dimensions): 변수가 3개인 연립방정식을 푸는 방법이나, 인공지능처럼 변수가 수억 개인 문제를 푸는 방법이나 그 논리적 구조가 완벽히 동일하다. 덕분에 우리는 보이지 않는 고차원의 세계를 수학이라는 안경으로 들여다볼 수 있다.
	- [x] 현실의 근사 (Linear Approximation): 사실 우리가 사는 세상은 곡선과 반전이 가득한 '비선형'의 세계이다. 하지만 아주 짧은 구간을 확대해서 보면 모든 곡선은 결국 직선에 가깝다. 복잡한 곡선 문제를 풀기 어려울 때, 우리는 그 곡선을 수많은 작은 직선들로 나누어 생각한다. 이것이 공학이나 경제학에서 복잡한 현상을 분석하는 핵심 기법이다.

<hr>

#### 2. 대수(代數, Algebra)

대수는 숫자를 $x, y$ 같은 문자로 대신해서 식을 푸는 것을 말한다.
Algebra is a branch of math where we use symbols (like $x$ or $y$) to represent numbers. Instead of calculating fixed numbers, we study mathematical structures and relationships.

- 중학교 때 배운 $2x + 3 = 7$ 같은 방정식이 대수의 시작
- 장점
    - [x] 미지수 찾기: 모르는 값을 $x$로 두고 식을 세우면, 복잡한 문제도 논리적으로 해결할 수 있다.
	- [x] 일반화(Generalization): 특정 숫자 하나에만 통하는 규칙이 아니라, 모든 숫자에 적용되는 '공식'을 만들 수 있다.

<hr>

#### 3. 선형대수가 하는 일: "공간의 지도 만들기"

선형대수를 배우는 진짜 이유는 단순히 계산을 잘하기 위해서가 아니라, 데이터를 공간 속의 '벡터'로 바꾸어 해석하기 위해서이다.

- 데이터의 표현: 세상의 복잡한 정보(날씨, 주가, 언어 데이터 등)를 숫자의 묶음인 '벡터'로
- 공간의 변형: 이 벡터들에 행렬을 곱해서 공간을 늘리거나, 줄이거나, 회전시킨다. (이를 '선형 변환'이라고 한다.)
- 최적의 길 찾기: 복잡하게 얽힌 데이터들 사이에서 가장 의미 있는 방향이나 핵심적인 규칙($Ax = b$의 해)을 찾아낸다.

<hr>

#### 4. 왜 지금 선형대수인가?

오늘날 우리가 사용하는 거의 모든 현대 기술의 밑바닥에는 선형대수가 깔려 있다. 선형대수는 미지수가 수십 개, 수백 개인 복잡한 방정식을 행렬(Matrix)이라는 상자에 담아 한꺼번에 계산하는 학문이다. 

Linear Algebra is the language of modern science and data. It is the study of vectors, matrices, and the relationships between them.

- 인공지능(AI): 챗봇이 문장을 이해하거나 이미지를 인식할 때, 엄청나게 큰 행렬 계산을 수행
- 구글 검색: 전 세계 웹페이지의 중요도를 계산할 때 선형대수의 '고윳값(Eigenvalue)' 개념을 사용
- 3D 그래픽: 영화나 게임에서 캐릭터가 움직일 때마다 좌표 벡터에 행렬을 곱해 위치를 바꿈