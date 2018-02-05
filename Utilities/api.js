var api={
  getData(){
    var url=' http://localhost:3978/cuadro/';
    return fetch(url).then((res)=> res.json());
  }
}
module.exports=api;

