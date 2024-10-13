// poem
var words=[
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '偷偷表白一个叫dmz的女孩',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '我余光中都是你',
    '人生自是有情痴',
    '此恨不关风与月',
    '因为你，我多少适应了这个世界',
    '春蚕到死丝方尽',
    '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },10000)
      setTimeout(function(){
        textone.innerHTML = '故事的小黄花';
      },29260)
     setTimeout(function(){
        textone.innerHTML = '从出生那年就飘着';
      },32710)
      setTimeout(function(){
        text.innerHTML = '童年的荡秋千';
      },36240)
      setTimeout(function(){
        textone.innerHTML = '随记忆一直晃到现在';
      },39750)
      setTimeout(function(){
        textone.innerHTML = 'Re So So Si Do Si La';
      },42900)
      setTimeout(function(){
        textone.innerHTML = 'So La Si Si Si Si La Si La So';
      },45920)
      setTimeout(function(){
        textone.innerHTML = '吹着前奏望着天空';
      },49860)
      setTimeout(function(){
        textone.innerHTML = '我想起花瓣试着掉落';
      },53200)
      setTimeout(function(){
        textone.innerHTML = '为你翘课的那一天';
      },56710)
      setTimeout(function(){
        textone.innerHTML = '花落的那一天';
      },58820)
      setTimeout(function(){
        textone.innerHTML = '教室的那一间';
      },60600)
      setTimeout(function(){
        textone.innerHTML = '我怎么看不见';
      },62320)
      setTimeout(function(){
        textone.innerHTML = '消失的下雨天';
      },64120)
      setTimeout(function(){
        textone.innerHTML = '我好想再淋一遍';
      },65810)
      setTimeout(function(){
        textone.innerHTML = '没想到失去的勇气我还留着';
      },69980)
     setTimeout(function(){
       textone.innerHTML = '好想再问一遍';
      },76120)
        setTimeout(function(){
        textone.innerHTML  = '你会等待还是离开';
      },77960)
         setTimeout(function(){
        textone.innerHTML  = '刮风这天我试过握着你手';
      },84900)
        setTimeout(function(){
        textone.innerHTML  = '但偏偏雨渐渐大到我看你不见';
      },90450)
        setTimeout(function(){
        textone.innerHTML = '还要多久我才能在你身边';
      },98880)
        setTimeout(function(){
        textone.innerHTML  = '等到放晴的那天也许我会比较好一点';
      },105430)
        setTimeout(function(){
        textone.innerHTML  = '从前从前有个人爱你很久';
      },112860)
        setTimeout(function(){
        textone.innerHTML  = '但偏偏风渐渐把距离吹得好远';
      },118540)
        setTimeout(function(){
        textone.innerHTML  = '好不容易又能再多爱一天';
      },126930)
        setTimeout(function(){
        textone.innerHTML  = '但故事的最后你好像还是说了拜拜';
      },132500)
        setTimeout(function(){
        textone.innerHTML  = '为你翘课的那一天';
      },154900)
        setTimeout(function(){
        textone.innerHTML  = '花落的那一天';
      },156870)
        setTimeout(function(){
        textone.innerHTML  = '教室的那一间';
      },158650)
        setTimeout(function(){
        textone.innerHTML  = '我怎么看不见';
      },160380)
        setTimeout(function(){
        textone.innerHTML  = '消失的下雨天';
      },162150)
        setTimeout(function(){
        textone.innerHTML  = '我好想再淋一遍';
      },163870)
        setTimeout(function(){
        textone.innerHTML  = '没想到失去的勇气我还留着';
      },168000)
        setTimeout(function(){
        textone.innerHTML  = '好想再问一遍';
      },174150)
        setTimeout(function(){
        textone.innerHTML  = '你会等待还是离开';
      },176030)
        setTimeout(function(){
        textone.innerHTML  = '刮风这天我试过握着你手';
      },182910)
        setTimeout(function(){
        textone.innerHTML  = '但偏偏雨渐渐大到我看你不见';
      },188490)
        setTimeout(function(){
        textone.innerHTML  = '还要多久我才能在你身边';
      },196930)        
        setTimeout(function(){
        textone.innerHTML  = '等到放晴的那天也许我会比较好一点';
      },203430)        
        setTimeout(function(){
        textone.innerHTML  = '从前从前有个人爱你很久';
      },210870)        
        setTimeout(function(){
        textone.innerHTML  = '偏偏风渐渐把距离吹得好远';
      },217130)        
        setTimeout(function(){
        textone.innerHTML  = '好不容易又能再多爱一天';
      },224870)        
        setTimeout(function(){
        textone.innerHTML  = '但故事的最后你好像还是说了拜拜';
      },231410)        
        setTimeout(function(){
        textone.innerHTML  = '刮风这天我试过握着你手';
      },238490)        
        setTimeout(function(){
        textone.innerHTML  = '但偏偏雨渐渐大到我看你不见';
      },241960)        
        setTimeout(function(){
        textone.innerHTML  = '还要多久我才能够在你身边';
      },245650)
        setTimeout(function(){
        textone.innerHTML  = '等到放晴那天也许我会比较好一点';
      },249060)        
        setTimeout(function(){
        textone.innerHTML  = '从前从前有个人爱你很久';
      },252910)        
        setTimeout(function(){
        textone.innerHTML  = '但偏偏雨渐渐把距离吹得好远';
      },255900)        
        setTimeout(function(){
        textone.innerHTML  = '好不容易又能再多爱一天';
      },259370)        
        setTimeout(function(){
        textone.innerHTML  = '但故事的最后你好像还是说了拜';
      },262860)        
        