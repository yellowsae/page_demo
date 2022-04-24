"use strict";
var _a, _b, _c, _d, _e, _f;
// 定义 一个对象
let an = null;
(_a = document.querySelector('#account')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    if (an) {
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
// 绑定密码输入框的点击事件
(_b = document.querySelector('#password')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (an) {
        // 如果已存在anime动画,先暂停正在运行的动画
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
// 绑定登录按钮的鼠标移入事件
(_c = document.querySelector('#submit')) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseover', function () {
    if (an) {
        // 如果已存在anime动画,先暂停正在运行的动画
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
// 优化一下,输入框和登录按钮获取焦点也给动画
// 绑定账号输入框的获取焦点事件
(_d = document.querySelector('#account')) === null || _d === void 0 ? void 0 : _d.addEventListener('focus', function () {
    if (an) {
        // 如果已存在anime动画,先暂停正在运行的动画
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
// 绑定密码输入框的获取焦点事件
(_e = document.querySelector('#password')) === null || _e === void 0 ? void 0 : _e.addEventListener('focus', function () {
    if (an) {
        // 如果已存在anime动画,先暂停正在运行的动画
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
// 绑定登录按钮的获取焦点事件
(_f = document.querySelector('#submit')) === null || _f === void 0 ? void 0 : _f.addEventListener('focus', function () {
    if (an) {
        // 如果已存在anime动画,先暂停正在运行的动画
        an.pause();
    }
    // 构造一个动画对象
    an = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
