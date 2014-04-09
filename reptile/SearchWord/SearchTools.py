#-*- coding:utf-8 -*-
#抓取百度和谷歌的搜索结果
#作者：yfl<yerugemimi@gmail.com>
#创建时间:2014-04-09
#环境：python 2.7.5

import urllib
import urllib2

#抓取百度结果
#param {word:关键词，filepath：结果文件路径}
#return
def searchBaidu(word,filepath):
	#设置url
	url="http://www.baidu.com/s?"
	#伪装浏览器环境
	user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
	headers={'User-Agent':user_agent}

	#传入关键词,百度的关键词标签是wd
	values={'wd':word}
	#转码
	urlf=url+urllib.urlencode(values)
	#print urlf

	#取结果
	response=urllib2.urlopen(urlf)
	html=response.read()

	#保存文件
	open(filepath,'w').write(html)

#抓取谷歌结果
#param {word:关键词，filepath：结果文件路径}
#return
def searchGoogle(word,filepath):
	#设置url
	url="https://www.google.com.hk/search?"
	#伪装浏览器环境
	user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
	headers={'User-Agent':user_agent}

	#传入关键词,百度的关键词标签是wd
	values={'q':word}
	#转码
	urlf=url+urllib.urlencode(values)
	#print urlf

	#取结果
	response=urllib2.urlopen(urlf)
	html=response.read()

	#保存文件
	open(filepath,'w').write(html)