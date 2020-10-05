function add(){
  document.getElementById('none').style.display = 'none';
  document.getElementById('add').classList.remove('pulse');
  if(document.getElementById('time').value != ''){
const count = list.push(document.getElementById('input').value + '::' + document.getElementById('time').value);
  }else{
   const count = list.push(document.getElementById('input').value );
  }
localStorage.setItem('list',list);
list = localStorage.getItem('list');
list = list.split(',');
console.log(list);
document.getElementById('list').innerHTML = document.getElementById('list').innerHTML + '<p    class = "list"><span class="badge" style="color: white;">'+document.getElementById('time').value+'</span>' + document.getElementById('input').value + '</p>';
badgecheck()
time();
}
  $(document).ready(function(){
    $('.modal').modal();
  });
  function loaded(){
    if (localStorage.getItem('visited')!= 'true'){
document.getElementById('tap').classList.add('tap');
}else{
  console.log(localStorage.getItem('visited'));
}
localStorage.setItem('visited','true');
      document.getElementById('list').addEventListener('swiped-right', function (e) {
         x = -1;
        for (var i = 0 ; i < document.getElementsByClassName('list').length;i++){
       x = x +1;
       if (document.getElementsByClassName('list')[x].innerHTML == e.target.innerHTML){
       console.log(x);
       document.getElementsByClassName('list')[x].style.display = 'none';
       if(x != 0){
        removed = list.splice(x, x);
       }else{
         list.shift();
         document.getElementById('none').style.display = 'block';
         document.getElementById('add').classList.add('pulse');
       }
       console.log(list);
       
       }
   }
   localStorage.setItem('list',list);
})
  if (localStorage.getItem('list')!=undefined){
    list = localStorage.getItem('list');
    list = list.split(',');
    console.log(list)
    full();
    document.getElementById('none').style.display = 'none';
    if(list==''){
    document.getElementById('add').classList.add('pulse');
    document.getElementById('none').style.display = 'block';
    }
  }else{
     list = [];
     document.getElementById('add').classList.add('pulse');
     document.getElementById('none').style.display = 'block';
  }
  }
  var list;
  function full(){
    for (var i = 0 ; i < list.length;i++){
      x = x +1
      if(list[x]!= ''){
      if (list[x].indexOf('::') < 0){
      document.getElementById('list').innerHTML =   document.getElementById('list').innerHTML + '<p class = "list" on-swipe-right="go()">' +list[x] + '</p>';
      }else{
        document.getElementById('list').innerHTML =   document.getElementById('list').innerHTML + '<p class = "list" on-swipe-right="go()"><span class="badge" style="color: white;">'+list[x].substring(list[x].indexOf('::')+2,list[x].length)+'</span>' +list[x].substring(0,list[x].indexOf('::')) + '</p>';
      }
      }
    }  
 badgecheck()
 time();
  }
var x = -1;
var removed = 'none';
var y = -1;
function badgecheck() {
      for (var i = 0 ; i < document.getElementsByClassName('badge').length;i++){ 
   y = y + 1;
   if(document.getElementsByClassName('badge')[y]   .innerText==''){
     document.getElementsByClassName('badge')[y].style.display  = 'none';
}
}
}
setInterval(time,15000)
function time() {
   y = -1
var d = new Date();
var min = minutes_with_leading_zeros(d);;
var hour = d.getHours();
sec = hour*3600 + min *60;
 console.log(sec);
      for (var i = 0 ; i < document.getElementsByClassName('badge').length;i++){ 
           y = y + 1;
     var text = document.getElementsByClassName('badge')[y]  .innerText;
     var hour2 = text.substring(0,text.indexOf(':'));
     var min2 = text.substring(text.indexOf(':')+1 ,text.length);
      sec2 = hour2*3600 + min2 *60;
     console.log(hour2);
     console.log(min2);
     console.log(sec2);
   if(sec >= sec2){
     document.getElementsByClassName('badge')[y].style.backgroundColor = 'coral';
     var n = done.includes(document.getElementsByClassName('badge')[y].innerText);
     if(n == false){
      done.push(document.getElementsByClassName('badge')[y].innerText);
      body = 'Your time to do ' + document.getElementsByClassName('list')[y].innerText + ' is over.' 
     main(); 
     }else{
       console.log(n);
     }
   }else {
     var text = document.getElementsByClassName('badge')[y].innerText;
     var hour2 = text.substring(0,text.indexOf(':'));
     var min2 = text.substring(text.indexOf(':')+1 ,text.length);
      sec2 = hour2*3600 + min2 *60;
     console.log(hour2);
     console.log(min2);
     console.log(sec);
   }
   console.log(done);
}
}
function minutes_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}
var sec;
var sec2;
setInterval(clock,1000);
function clock() {
var d = new Date();
var min = minutes_with_leading_zeros(d);;
var hour = d.getHours();
document.getElementById('timed').innerHTML = hour +':' + min;
}
//notification  stuff
var body = 'Error';
var done = [''];
//google singg in
	function onSuccess(googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        console.log(googleUser)
        document.getElementById('name').innerHTML = "Hi "+googleUser.rt.tV;
        document.getElementById('logo').src = googleUser.rt.TJ
    }
  function onFailure(error) {
        console.log(error);
    }
  function renderButton() {
        gapi.signin2.render('my-signin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
        });
    }
const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}
const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('service.js'); //notice the file name
    return swRegistration;
}
const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }
    console.log(Notification.permission)
}
const showLocalNotification = (title, swRegistration) => {
    const options = {
      body,
      vibrate: [200, 100, 200]
    };
    swRegistration.showNotification(title, options);
}
const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission =  await requestNotificationPermission();
    showLocalNotification('Alert !',swRegistration);
}