---
layout: post
title: 02 스칼라(Scaler)와 벡터(Vector)
date: 2026-03-21 15:50:00-0900
description: 선형대수 학습 노트 02
tags: Linear_Algebra, statistics
categories: methodology
related_posts: true
---

#### 1. 스칼라, 스케일러 (Scalar)

스칼라는 우리가 일상에서 가장 흔하게 접하는 '숫자' 그 자체라고 생각하면 된다. 방향은 중요하지 않고, 오직 크기(Magnitude)만 나타내는 값이다.

A scalar is just a number. It only has magnitude (size). It tells you 'How much?

- 특징: 하나(1차원)의 숫자만으로 정보를 완벽하게 전달할 수 있다.
- 예시: 
	- 온도: 현재 기온 20°C (어느 방향으로 20도인지 묻지 않는다?)
    - 몸무게: 70kg
    - 나이: 25세
    - 속력(Speed): 시속 60km (단순히 얼마나 빨리 가는지만 나타냄)

> 💡 힌트: 'Scale(눈금)'에서 유래한 단어로, 눈금 위에 찍히는 숫자 하나라고 생각하면 편하다.

<hr>

#### 2. 벡터 (Vector)
벡터는 스칼라에 방향(Direction)이라는 정보가 추가된 값이다. 단순히 "얼마나 큰가"를 넘어 "어느 쪽으로 향하는가"가 핵심이다.

A vector is like an arrow. It has both magnitude (size) and direction. It tells you 'How much?' and 'Which way?

- 특징: 화살표로 시각화할 수 있다. 화살표의 길이는 크기를, 머리 방향은 실제 방향을 의미한다.
- 예시:
    - 속도(Velocity): "자동차가 동쪽으로 시속 60km로 달린다." (속력에 방향이 붙으면 속도가 된다.)
    - 힘(Force): "상자를 오른쪽으로 10만큼의 힘으로 밀고 있다."
    - 위치 변화: "현재 위치에서 북쪽으로 3m 이동했다."


<hr>

#### 3. 스칼라 vs 벡터

| 구분     | 스칼라 (Scalar)  | 벡터 (Vector)                                                                 |
| ------ | -------- | ---------------------------------------- |
| 핵심 요소  | 오직 크기             | 크기 + 방향                                                                         |
| 표기법    | $a, x, 5$ (일반 숫자) | $\mathbf{v}, \vec{v}, \begin{bmatrix} 3 \\ 2 \end{bmatrix}$ (굵은 글씨나 화살표, 행렬 형태) |
| 비유     | 단순히 양을 측정하는 '저울'  | 목표물을 가리키는 '화살표'                                                                 |
| 물리량 예시 | 속력, 질량, 에너지       | 속도, 가속도, 힘                                                                      |

선형대수에서 스칼라(Scalar)인 이유는, 바로 벡터의 길이를 '조절(Scale)'하기 때문이다. 벡터(화살표)에 스칼라(숫자)를 곱하면 화살표가 길어지거나 짧아지는데, 이 과정을 'Scaling'이라고 한다.

쉽게 말해서 벡터(화살표)에 스칼라(숫자)를 곱하면, 화살표의 방향은 그대로 둔 채 길이만 늘리거나 줄일 수 있다. 이것을 '스칼라 배(Scalar Multiplication)'라고 부른다.

<hr>

#### 4. 선형대수에서 vector를 쓰는 이유

우리가 행렬 안에 세로로 숫자를 적는 이유가 바로 이 벡터를 표현하기 위해서이다. 예를 들어 $\begin{bmatrix} 3 \ 2 \end{bmatrix}$라는 벡터는 "오른쪽으로 3칸, 위로 2칸 가라"는 방향 지시서와 같다.

여기에 스칼라 $2$를 곱하면 어떻게 될까? "그 동작을 2배로 크게 해라"가 되어 $\begin{bmatrix} 6 \ 4 \end{bmatrix}$가 된다. 화살표의 길이는 2배가 되지만 방향은 변하지 않는 것이다.    

이렇게 벡터(방향)를 스칼라(비율)로 조절해서 우리가 원하는 목표 지점($b$)에 도달하는 방법을 배우는 것이 바로 선형대수의 시작이다. 


<iframe width="560" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs?si=pFBIVJmT4jHay0CB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>