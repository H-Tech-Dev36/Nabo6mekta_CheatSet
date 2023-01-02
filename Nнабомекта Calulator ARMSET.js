// The Nнабомекта Calculator : T.B.C ArmySet // Please leave a star if u liked it :)
// Free Math Full Cheat // Get rid of lost time
// ❌ Made with love <3
// ✅ Made with code </>
const prompt = require("prompt-sync")({ sigint: true }); 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


console.log("Welcome to Nнабомекта math cheat set :D");
console.log(`
 c
...........                                      
.:~7J5PPGGGGGGBBGGGGGGGGGGGP?~.                                 
.:^!?YGB#BPY?!~^^:::::::.........:~JPBGJ^                              
^7PBGGGPY?!^.                            .!P&G!.                           
~P&GJ^.                                       :Y##5!.                        
~B&Y:                                             .!5##5!:::..                 
?@G:                                                 .?#@&GGGGBB57.             
Y@J                                                ^?G#G?~:..7P&@@@#?            
!@5                                               ^G&P7:     Y@@@@@@@@Y           
.#@:                                               5@!        P@@@@@@@@#.          
J@Y                                                P@:        ^B@@@@@@@@~          
B@^                                                Y@~         .!YGB#B&@7          
!@P                   ..:^^^^^^:.                   :##^             .7@B.          
B@~              .~JPB#&&@@@@@@&BGJ^                 :G@J.       .:~YB&Y.           
.&&.            .Y#B5J@@@@@@@@@@@!~G@!                  !G#5JYY5PGB#@P!.             
.&#            :##!   ?@@@@@@@@&J  ~@P                    ~7???7!^:B@:               
.##            P@^     ^YGBBPY!.   .@B              .^:           ~@5                
.##            5@^                .Y@7         .^7YPBB@J         .##.                
G@^           :##^            .~Y#B~  .^~7?YPB#G5GG..&#         P@^                 
5@~            :P@Y^      .^?P##5~  ?BBG5G&7~?&^  P?P@7       :G@!                  
7@Y              ~PBG555PGGG5?^     #@^   G~  JY  5@G^      .J&P^                   
J@G^              .^~!!~^.         !&G!: 5J^~YBY#B7      .J#P^                     
~B@Y.                              :JGBG#GGP5J7^      :Y#5^                       
7B&J.                               ...        .:~?P&5:                         
!B#Y~:                                  :^7YGBBPY7^                           
~YBBB5^                         :~?YPGG&@#!:.                               
J@P.                    ^7J5GBG5?!::#@~                                  
J@5                      JY?!^.     ^@P                                   
:JBB?                                  ~@5                                   
^5&P!      ^~     ^!7??JJ?7~.            ~@5    ~Y5PPPPBBGPP5^                 
:&#^        #&~::^G#P5YJ????5#Y.          ^@BJY5P&Y~^^^^^P@J^5@?                
?@?         7PGGGBG:         !@Y          ^@#Y?7~: .J~   ^@P  Y@?               
G@~                          :@#          :@G      ~@G..:P@7   B&.              
J@&^                          :@#           B&.      7GGGBG!    ?@!              
J@PP&Y^                         #&.          J@7     ^.  ..      5@!              
J@Y  ~P#GJ!~~~!!7?7~:.          :#&.          :@#JJJJ5@&?^..   .7##!               
?@5     .!J5PPPP55YYPBBG5J7!!7?YG#G~            5@B7777!?PGGGGGGGP7.                
^@P                   .^!?YPPPP5J!:              .B#.       .::::.   

███╗   ██╗███╗   ██╗ █████╗  ██████╗  ██████╗ ███╗   ███╗███████╗██╗  ██╗████████╗ █████╗ 
████╗  ██║████╗  ██║██╔══██╗██╔════╝ ██╔═══██╗████╗ ████║██╔════╝██║ ██╔╝╚══██╔══╝██╔══██╗
██╔██╗ ██║██╔██╗ ██║███████║███████╗ ██║   ██║██╔████╔██║█████╗  █████╔╝    ██║   ███████║
██║╚██╗██║██║╚██╗██║██╔══██║██╔═══██╗██║   ██║██║╚██╔╝██║██╔══╝  ██╔═██╗    ██║   ██╔══██║
██║ ╚████║██║ ╚████║██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██╗   ██║   ██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝  


`);
console.log(`
Nнабомекта cheat set > By Prof Chen - GVC#0193
=======================================
Calculs

[1] Multiplication { X } > 000 x 000
[2] Division       { / } > 000 / 000
[3] Percent        { % } > 000 % of 000

=======================================
Volumes 
[4] Cube's volume
[5] Silender's volume
[6] Cone's volumes
 `);
const option = prompt('What do you want to cheat on ? : ');
if ( option == 1 ) {
    var num1 = prompt('First number : ');
    var num2 = prompt('Second number : ');
    var Result = num1 * num2;
    console.log("Result : " + Result);
    console.log("Hit CTRL+C to exit")
    setTimeout(() => {}, 999999999);
} 
if ( option == 2 ) {
    var num1 = prompt('First number : ');
    var num2 = prompt('Second number : ');
    var Result = num1 / num2;
    console.log("Result : " + Result);
    console.log("Hit CTRL+C to exit")
    setTimeout(() => {}, 999999999);
}

if ( option == 3 ) {
    var perc1 = prompt('How many percents (NO SYMBOL %) : ');
    let num2 = prompt('The number : ');
    let etp1 = num2 * perc1;
    let defetp = etp1 / 100;
    console.log("Result : " + defetp);
    console.log("Hit CTRL+C to exit")
    setTimeout(() => {}, 999999999);
}

if ( option == 4 ) {
    var num1 = prompt('Length of cube edge [in CM] : ');
    var Result = num1 * num1 * num1;
    console.log("Result : " + Result);
    console.log("Hit CTRL+C to exit");
    setTimeout(() => {}, 999999999);
}

if ( option == 5 ) {
    var ray = prompt('Length of the base\' ray : ');
    var num2 = prompt('Height of the cylender : ');
    var cray = ray * ray;
    var Result = Math.PI * cray * num2
    console.log("Result : " + Result);
    console.log("Hit CTRL+C to exit")
    setTimeout(() => {}, 999999999);
}

if ( option == 6 ) {
    var Height1 = prompt('Height of the cone : '); 
    var basrey2 = prompt('Ray of the base : ');
    var eta1 = basrey2 * basrey2;
    var Result = Math.PI * eta1 * Height1 / 3
    console.log("Result : " + Result);
    console.log("Hit CTRL+C to exit");
    setTimeout(() => {}, 999999999);
}