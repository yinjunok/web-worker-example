## 关闭 worker

当线程使用完毕, 应当主动结束该线程, 以节省系统资源.

1. terminate  
主线程可以调用 worker 的 `terminate()` 方法结束线程.

```js
worker.terminate()
```

worker 线程会被立即杀死，不会有任何机会让它完成自己的操作或清理工作。

2. close  
子线程也可以主动调用 `close` 方法结束线程

```js
this.close()
```