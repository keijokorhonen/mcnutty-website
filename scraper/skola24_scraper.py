### WEB SCRAPER FOR SCHEDULE DATA FROM SKOLA24 ###

from lxml import html
import requests



page = requests.get('http://ib.borgar.se/scraper/test.html')
tree = html.fromstring(page.content)

data = tree.xpath('//span[@class="textBox"]/text()')

del data[0:41]

classes = []
n = 0

while (':') not in data[n]:
    classes.append([data[n],data[n+1],data[n+2]])
    n += 3
else:
    time_start = n
    

times = data[time_start:]    
print classes

print times