
for(i = 0; i < 4; i++) {

    // Creates the columns.
    let divClass = "class" + i;
    document.write("<div class=" + divClass + ">");
    
    for(x = 0; x < 4; x++) {    // Creating the rows for each column.

        let inside_id = "inside_id" + x;
        document.write("<div class=" + inside_id + "></div>");
  
    }

    document.write("</div>");

}

function hover(id_) {
    document.getElementById(id_).style.color = 'yellow';
}