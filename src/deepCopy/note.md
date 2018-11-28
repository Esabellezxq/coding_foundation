# for in 使用注意 ##最好不要在遍历的时候增删改属性 
## 不会枚举 prototype 中的属性 
## 枚举数组不一定按顺序（按顺序用 for 循环） 
## 用 hasOwnProperty 可以过滤掉继承的属性
