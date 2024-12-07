window.onload = function () {
    const textContent = "console_log('Hello world!Zhengfu200 here,a student from Fzsz.I'm a player and a developer.Currently working on Vue3 and Android Studio.Plan to learn Unity and C#.visit my blog by the link on my profile:）');";  // 要显示的文本
    const maxWidth = 580;  // 最大宽度（SVG 背景框宽度减去一些边距）
    const lineHeight = 24; // 每行的高度（可以根据实际需要调整）
    const fixedHeight = 300;  // 背景框的固定高度
    let index = 0;  // 当前显示字符的索引
    const textElement = document.getElementById("text");  // 获取 SVG 中的文本元素
    const backgroundRect = document.getElementById("background-rect");  // 获取背景矩形元素
    let currentLine = '';  // 当前行的文本
    let currentTspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');  // 创建新的 tspan 元素
    let lineCount = 1;  // 当前行数（初始化为 1）
  
    // 打字速度（每个字符的显示时间）
    const typingSpeed = 50;
  
    // 设置初始 tspan 元素
    currentTspan.setAttribute('x', 10);
    currentTspan.setAttribute('y', 50);
    textElement.appendChild(currentTspan);
  
    // 设置字体为等宽字体，类似于代码显示
    textElement.setAttribute("font-family", "'Courier New', monospace");  // 设置 font-family 为等宽字体
  
    // 打字动画函数
    function typeWriter() {
      if (index < textContent.length) {
        const currentChar = textContent.charAt(index);
  
        // 如果当前字符是"-"，则换行
        if (currentChar === '.'||currentChar ==="!") {
          currentLine += currentChar;  // 加入当前字符
          currentTspan.textContent = currentLine;
          
          // 换行处理
          currentLine = '';  // 清空当前行
          currentTspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');  // 创建新行
          currentTspan.setAttribute('x', 10);  // 设置新行的位置
          currentTspan.setAttribute('dy', '1.2em');  // 设置下一行的垂直位置
          textElement.appendChild(currentTspan);
  
          // 增加行数
          lineCount++;
        } else {
          currentLine += currentChar;  // 否则正常加上字符
        }
  
        // 更新当前行的文本
        currentTspan.textContent = currentLine;
  
        // 背景框高度固定，保持原高度
        backgroundRect.setAttribute("height", fixedHeight);  // 设置背景框的固定高度
  
        // 增加字符索引并继续打字
        index++;
        setTimeout(typeWriter, typingSpeed);  // 继续调用
      }
    }
  
    // 启动打字效果
    typeWriter();
  };
  