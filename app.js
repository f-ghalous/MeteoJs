const cle = 'a906eee1b1cae604084a5809aaa73ea3';
let ville = "tokyo"
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +'&appid=' + cle + '&units=metric';
//https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=a906eee1b1cae604084a5809aaa73ea3&units=metric
let requete = new  XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();
requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            document.querySelector('#ville').textContent = reponse.name;
            document.querySelector('#temperature_label').textContent = reponse.main.temp;
            console.log(reponse.main.temp);
          
          

        }
      else{
        console.log("un probleme est intervenue, merci de revenir plus tard")
      }
        
    }
    
}