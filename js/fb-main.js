// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUMtdIyTvk3yK-oefxnWQyZq3CrM465E4",
    authDomain: "sathi-122c7.firebaseapp.com",
    databaseURL: "https://sathi-122c7.firebaseio.com",
    projectId: "sathi-122c7",
    storageBucket: "sathi-122c7.appspot.com",
    messagingSenderId: "179327686990"
  };

  var satiApp = firebase.initializeApp(config);





console.log(satiApp.name);  // "[DEFAULT]"


 var satiDB = firebase.database();

 var sermonsRef = satiDB.ref('sermons').limitToLast(100);

 var fb_sermons_div = document.getElementById('fb-sermons');
 fb_sermons_div.innerHTML = '<h2>Loading</h2>';

 var sermon_list_html = '';

  sermonsRef.once('value', function(snapshot) {

    // console.log(snapshot);

  snapshot.val().reverse().forEach(function(childSnapshot) {

    // console.log(childSnapshot);

    sermon_list_html = sermon_list_html + '<h2>'+childSnapshot.title+'</h2>';

    var recs = childSnapshot.recordings;
    // console.log(recs);

    _.forEach(recs, function(value) {
          console.log(value.audio);
          sermon_list_html = sermon_list_html + '<div class="row">'+
          '<div class="col-sm-10">'+
          '<iframe src="//yourlisten.com/embed/html5?'+value.audio+'" frameborder="0" style="width:100%;height:115px" scrolling="no"></iframe>'+
          '</div>'+
          '<div class="col-sm-2" ">'+
          '<a href="https://drive.google.com/uc?export=download&id='+value.dl+'" class="btn btn-default btn-sm " role="button" aria-pressed="true">Download</a>'+
          '</div>'+
          '</div>'
    });







      // console.log(sermon_list_html);
  });
  fb_sermons_div.innerHTML = sermon_list_html;
});
