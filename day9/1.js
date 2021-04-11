"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 타입스크립트의 단점 => 타입을 정의하는 리소스가 소요
// 이러한 단점을 상쇄하기 위해 타입 추론을 제공하여 필수의 타입만 정의하게 한다.
var v1 = 123;
var v2 = 'abc';
v1 = 'a';
v2 = 456;
