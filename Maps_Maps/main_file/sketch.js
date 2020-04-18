let subdata;
const mappa = new Mappa('Leaflet');
let trainmap;
let canvas;
let countries;



const options={
  lat:0,
  lng:0,
  zoom:2,style:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"

}


function preload(){
subdata= loadTable('subscribers_geo.csv','header');
countries= loadJSON('countries.json');
}


function setup() {
canvas = createCanvas(1000, 900);
trainmap = mappa.tileMap(options);
trainmap.overlay(canvas);
console.log(countries);


}



function draw() {
clear();
for(let row of subdata.rows){
  let ctr = row.get('country_id').toLowerCase();
  let latlong = countries[ctr];
  if(latlong){
    let lat =  latlong[0];
  let lon = latlong[1];
  const pix = trainmap.latLngToPixel(lat, lon);
  fill(255,0,200);
  ellipse(pix.x, pix.y, 20, 20);
  
  // console.log(row.get('country_id'));
   //console.log(row.get('subscribers'));
  }
 }


}