import glob,sys
t=open('src/index.template.html',encoding='utf-8').read()
js='\n'.join(open(f,encoding='utf-8').read() for f in sorted(glob.glob('src/js/*.js')))
open('index.html','w',encoding='utf-8').write(t.replace('/*__JS__*/',js))
open('tools/game.js','w',encoding='utf-8').write(js)
print('OK index.html',len(js),'bytes JS')
