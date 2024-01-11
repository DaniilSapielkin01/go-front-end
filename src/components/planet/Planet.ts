export const PlanetBox = `<svg class="svg" viewBox="0 0 500 500">
<style>
body {
background: #000;
}

.svg {
width: 100vw;
height: 100vh;
position: absolute;
top: 0; right: 0; left: 0; bottom: 0;
}
</style>
<defs>
  <mask 
    id="mask" 
    maskunits="userSpaceOnUse"
    maskcontentunits="userSpaceOnUse">
    <image 
      xlink:href="http://i.imgur.com/VOT2Uvb.gif" 
      width="100%" 
      height="100%" />
  </mask>
  
  <linearGradient id='g' x2='1' y2='1'>
    <stop stop-color='#F19'/>
    <stop offset='50%' stop-color='#0CF'/>
    <stop stop-color='red'/>
    <stop offset='100%' stop-color='#0CF'/>
  </linearGradient>
      
  <pattern
    id="checker" 
    width="20" 
    height="20"
    patternUnits="userSpaceOnUse" 
    viewBox="0 0 20 20"> 
      <rect x="0" y="0" width="50" height="50" fill="#9e1430"/>
      <rect x="0" y="0" width="25" height="25" fill="url(#g)"/>
      <circle cx="25" cy="25" r="50" fill="url(#g)" fill-opacity="0.5"/>
  </pattern>
</defs>
  
<rect width="100%" height="100%" fill="url(#checker)" mask="url(#mask)" />
</svg>`
