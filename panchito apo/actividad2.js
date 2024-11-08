const g = 9.81; 
let y = 12; 
let t = 0; 
let dt = 0.1; 

while (y > 0) { 
    y = 12 - 0.5 * g * t ** 2; 
    t += dt; //sumar dt
    
}
