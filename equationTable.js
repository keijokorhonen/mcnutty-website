//Creates an equation finder and also sets the table up

//ADD description function
//ADD way to not have to see the equation changing
//ADD way to search by pressing enter

//sets default table
function defaultTable(){

    createTableFromVariable(equations_used_array);
};

function searchEquations(){
    //searches for variable in field
    var desired_variable = document.getElementById("input_Equation").value;
    var desired_variable_lower = desired_variable.toLowerCase()
    if (desired_variable_lower in variables_exist){
        //check if the input is valid
        var equations_to_be_used = [];

        for (i=0; i < equations_for_variable[desired_variable_lower].length; i++){
            //creates table for relevant equations
            equations_to_be_used.push(equations_for_variable[desired_variable_lower][i]);
        };
        equations_to_be_used.sort()
        createTableFromVariable(equations_to_be_used);
        //sends list of equations to create a table for them
    } else if (desired_variable == "") {
        defaultTable(equations_used_array);
    }
    else {
        alert("Sorry, no such variable exists.");
    };
};

//NOTE TO SELF try to find a more efficient way of storing the equations

function createTableFromVariable(equations){
    //function creates table based on the variable the user is searching for
    //input is a list of equations

    var table = document.createElement("table");
    //create a table

    var header_row = table.insertRow(0);
    var header_col_name = header_row.insertCell(0);
    header_col_name.innerHTML = "Name";
    var header_col_equation = header_row.insertCell(1);
    header_col_equation.innerHTML = "Equation";

    var header_col_description = header_row.insertCell(2);
    header_col_description.innerHTML = "Description";
    //above creates the header row

    for (i=0; i < equations.length; i++){
        //creates a new row for each equation

        var row = table.insertRow(i+1);
        var col_name = row.insertCell(0);
        col_name.innerHTML = equations[i];
        var col_equation = row.insertCell(1);
        col_equation.innerHTML = equations_used[equations[i]][0];
        var col_description = row.insertCell(2);
        col_description.innerHTML = "Description goes here. Fix." //EDIT, only temprorary
        //puts equation in cell
    };

    var div = document.getElementById("divTable");
    var replaced = div.lastChild;
    div.replaceChild(table, replaced);
    //append table into div
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
};

//Bellow this point you can add equations/variables.

function addVariable(variable_name, symbol, unit){
    //adds variable to a dictionary
    //variable_name: string
    //symbol: string
    //unit: string, seperate units by a space

    variables_exist[variable_name] = [symbol, unit];
};

function addEquationToVariable(variable_involved, equation_to_add){
    //Adds equation to a dictionary with variables as keys
    //equation_name: string
    //variables_involved: array with variable names NOT symbols
    if (variable_involved in equations_for_variable){
        equations_for_variable[variable_involved].push(equation_to_add);
        //appends equation_to_add to the array
    }
    else{
        equations_for_variable[variable_involved] = [equation_to_add];
        //if there is no key to start with this creates it
    };
};

function addEquation(equation, expression, variables_involved){
    //Adds equation to the dictionary of equations
    //equation: string describing equation e.g. "equilibrium constant"
    //expression: string of equation
    //variables_involved: array of variables involved in the equation
    var concat_list = [expression].concat(variables_involved);
    equations_used[equation] = concat_list;

    for (i=0; i < variables_involved.length; i++){
        //adds equation to all variables directly
        addEquationToVariable(variables_involved[i], equation);
    };
    equations_used_array.push(equation);
};

function createEquation(object, expression){
    //creates an expression for the equation
    //expression is a string of form "s = d/t"
    //returns a div with the equation converted for hover use



};

var equations_for_variable = {};
//Dictionary for the equations of variables we've added
//key: variable, value: list of equations involving that variable
var variables_exist = {};
//variables used
var equations_used = {};
//key: equation, value: ["expression", "description", [list of the names of the variables involved]]
var equations_used_array = [];

//Add content here
//addEquation("Name", "equation in mathjax format", [list of variables used], "description of equation")
addEquation("Velocity Suvat", "\\(v=u+at\\)", ["velocity", "initial velocity", "acceleration", "time"]);
addEquation("Displacement Suvat", "\\(s=ut+\\frac{1}{2}at^{2}\\)", ["displacement", "initial velocity", "acceleration", "time"]);
addEquation("Work", "\\(W=Fs\\cos(\\theta)\\)", ["work", "force", "displacement", "theta"]); //I don't know if we want theta
addEquation("Force", "\\(F=ma\\)", ["force", "acceleration", "mass"])
addEquation("Kinetic Energy (1)", "\\(E_k=\\frac{1}{2}mv^{2}\\)", ["energy", "mass", "velocity"])
addEquation("Kinetic Energy (2)", "\\(E_k=\\frac{p^{2}}{2m}\\)", ["energy", "momentum", "mass"])


equations_used_array.sort()

//addVariable("name", "symbol", "units seperated by a space")
addVariable("time", "t", "s");
addVariable("velocity", "v", "m s^-1");
addVariable("initial velocity", "u", "m s^-1");
addVariable("acceleration", "a", "m s^-2");
addVariable("displacement", "d", "m");
addVariable("work", "W", "N s");
addVariable("force", "F", "N");
addVariable("theta", "θ", "rad");
addVariable("mass", "m", "kg");
addVariable("energy", "E", "J");
addVariable("momentum", "p", "kg m s^-1")


//TEST
console.log("Equations involving a specific variable")
console.log(equations_for_variable);
console.log("Equations used")
console.log(equations_used);
console.log("equations used array")
console.log(equations_used_array);
console.log("Variables that exist")
console.log(variables_exist);
