var spdata = new Array(0);
spdata[0] = Array('','承接各类企业网站建设,提供优质企业建站解决方案,SEO强力优化,助力企业网络商务发展.');
spdata[1] = Array('','承接各类企业网站建设,提供优质企业建站解决方案,SEO强力优化,助力企业网络商务发展.');
spdata[2] = Array('','承接各类企业网站建设,提供优质企业建站解决方案,SEO强力优化,助力企业网络商务发展.');
function spinit(){
	sprnd = Math.floor(Math.random() * spdata.length);
	str = "";
	str += ""+spdata[sprnd][1]+"";
	spdata.splice(sprnd,1);
	sprnd = Math.floor(Math.random() * spdata.length);
	str += ""+spdata[sprnd][1]+"";
	document.write(str+"");
	spdata.splice(sprnd,1);
}
function time(){
    //获得显示时间的div
    t_div = document.getElementById('showtime');
   var now=new Date()
    //替换div内容 
   t_div.innerHTML = "现在是"+now.getFullYear()
    +"年"+(now.getMonth()+1)+"月"+now.getDate()
    +"日"+now.getHours()+"时"+now.getMinutes()
    +"分"+now.getSeconds()+"秒,请珍惜您现在的时光.您所浪费的今天是昨天逝去的人奢望的明天,您所浪费的现在,是未来的您回不去的曾经.";
    //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
   setTimeout(time,1000);
  }