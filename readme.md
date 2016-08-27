### head first javascript
百度网盘地址(http://pan.baidu.com/s/1o7KGRiU)
#### capter 01(page1-32)
#### capter 02(page22-84)
#### capter 03(page85-134)
#### capter 04(page135-188)
#### capter 05(page189-242)
#### capter 06(page243-288)
#### capter 07(page289-342)
- 正则表达式
    * 正则表达式总是以斜线起始和结束`/ + Expression + /`
    * 元字符，用于连接字母与数字，创建高度描述性文本模式
    * 常用正则表达式元字符：
    
    1、`.(点)`匹配任何字符，换行符除外

    2、` \s`匹配空格，包括空白字符（space）、tab、换行符、return/enter
    
    3、` \d`匹配任何数字字符
    
    4、` \w`匹配任何字母数字字符（字母或数字）字符
    
    5、` ^`字符串需以模式起始，匹配模式的字符串前不能有其他文字
    
    6、` ^$`字符串需以模式结束，匹配模式为字符串的最后一个字母
    
    举个栗子：邮政编号格式为#####-####都是数字且只能单独出现，正则表达式为`/^\d\d\d\d\d-\d\d\d\d$/`
    
    * 深入正则表达式：限定符，限定符能指定子模式出现的精确次数
    
    1、`*`限定符前的子模式必须出现0或多次，子模式为可选的，可出现任意次数
    
    2、`+`限定符前的子模式必须出现1或多次，子模式必须出现，可出现任意次数
    
    3、`？`限定符前的子模式必须出现0或1次，子模式为可选的，若出现也只能出现一次
    
    4、`{n}`限定符前的子模式必须恰好出现n次，子模式为可选的，可出现任意次数
    
    5、`（）`集合字符或/和元字符，或为子模式
    
    举个栗子：邮政编号格式为#####-####都是数字且只能单独出现，正则表达式为`/^\d{5}-/d{4}$/`
    
    * 匹配最少次数与最多次数`{min,max}`
    
    举个栗子：`/^\w{5,8}$/`有些密码可选择5-8个字符
    
    * 选替`this|that`如果匹配子模式this或that，模式匹配成功
    
#### capter 08(page343-391)
- getElementById() 用于获取元素独一无二的id
- innerHTML 用于设置元素的内容类元素
  * elem.innerHTML += "..." 增加或改变元素内容
- DOM树 

   
    

