### 起因

不知道什么时候开始，发现 CSDN 的 SEO 做得如此“牛 X”了，几乎技术相关的什么关键词都能被它匹配到，最恶心的诸如‘csdn 已为您找到关于’。。。此类的信息了，打开发现都是些什么垃圾玩意儿，由于我自己浏览信息通常比较快，所以虽然知道是垃圾信息也会频繁点进去，实属浪费感情。

虽然装了 adBlock 可以将 CSDN 整个屏蔽掉，但也可能屏蔽掉有些可能有用的东西，所以就从百度结果列表下手，屏蔽一些我自己不需要的。

### 实现

代码不多，整体目前只有五六十行，主要用了`chrome.webRequest.onHeadersReceived`拦截百度的搜索操作，以明确当前查询操作已完成，然后将命中“垃圾信息”关键词的 DOM 节点删除。主要是找到合适的方法和时机操作 DOM 花了些时间，具体用法参考[onHeadersReceived](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived/)

意在分享 get 到的小技能，避免开发时一边喷百度一边又不得不天天依靠百度查文档查经验的打工人们。

亦可是一个简单的架子，希望有小伙伴注意到其他类似垃圾关键词的网站分享出来，大家一起 diss 啊！

### 效果示例

diss 前
[![DFeFWd.png](https://s3.ax1x.com/2020/11/15/DFeFWd.png)](https://imgchr.com/i/DFeFWd)
diss 后
[![DFeiJH.png](https://s3.ax1x.com/2020/11/15/DFeiJH.png)](https://imgchr.com/i/DFeiJH)
