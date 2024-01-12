  // first
  let song1=document.getElementById('song1');
  let progress1=document.getElementById('progress1');
  let count1=0;

  song1.onloadedmetadata=function(){
      progress1.max=song1.duration;
      progress1.value=0;
      song1.pause();
  }

  function playpause1(){
      if(count1==0){
          count1=1;
          song1.play();
          song2.pause();
          song3.pause();
          song4.pause();
          song5.pause();
      }else{
          count1=0;
          song1.pause();
      }
  }
  if(song1.play()){
setInterval(() => {
progress1.value=song1.currentTime;
}, 500);
  }
  // second
  let song2=document.getElementById('song2');
  let progress2=document.getElementById('progress2');
  let count2=0;

  song2.onloadedmetadata=function(){
      progress2.max=song2.duration;
      progress2.value=song2.currentTime;
      song2.pause();
  }
  function playpause2(){
      if(count2==0){
          count2=1;
          song2.play();
          song1.pause();
          song3.pause();
          song4.pause();
          song5.pause();
      }else{
          count2=0;
          song2.pause();
      }
  }
  if(song2.play()){
setInterval(() => {
progress2.value=song2.currentTime;
}, 500);
  }
  // third
  let song3=document.getElementById('song3');
  let progress3=document.getElementById('progress3');
  let count3=0;

  song3.onloadedmetadata=function(){
      progress3.max=song3.duration;
      progress3.value=song3.currentTime;
      song3.pause();
  }
  function playpause3(){
      if(count3==0){
          count3=1;
          song3.play();
          song2.pause();
          song1.pause();
          song4.pause();
          song5.pause();
      }else{
          count3=0;
          song3.pause();
      }
  }
  if(song3.play()){
setInterval(() => {
progress3.value=song3.currentTime;
}, 500);
  }
  // fourth
  let song4=document.getElementById('song4');
  let progress4=document.getElementById('progress4');
  let count4=0;

  song4.onloadedmetadata=function(){
      progress4.max=song4.duration;
      progress4.value=song4.currentTime;
      song4.pause();
  }
  function playpause4(){
      if(count4==0){
          count4=1;
          song4.play();
          song2.pause();
          song3.pause();
          song1.pause();
          song5.pause();
      }else{
          count4=0;
          song4.pause();
      }
  }
  if(song4.play()){
setInterval(() => {
progress4.value=song4.currentTime;
}, 500);
  }
  // fifth
  let song5=document.getElementById('song5');
  let progress5=document.getElementById('progress5');
  let count5=0;

  song5.onloadedmetadata=function(){
      progress5.max=song5.duration;
      progress5.value=song5.currentTime;
      song5.pause();
  }
  function playpause5(){
      if(count5==0){
          count5=5;
          song5.play();
          song2.pause();
          song3.pause();
          song4.pause();
          song1.pause();
      }else{
          count5=0;
          song5.pause();
      }
  }
  if(song5.play()){
setInterval(() => {
progress5.value=song5.currentTime;
}, 500);
  }