
// submit form
$('form').submit(function(event){
    const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();


    // Clear the DOM 
    $('tr').remove();

    makeGrid(height,width);
    toggleCell();
    event.preventDefault();
    
});



 //makeGrid function   
    function makeGrid(row, col) { 
        // loop for setting the height.
        for (let x = 1; x <= row; x++){
            const table = $('#pixelCanvas');
            table.append('<tr></tr>');    
        }
        
        // loop for setting the width.
        for (let c = 1; c<=col; c++){
            $('tr').append('<td></td>');
        }
    }

//Change the color of a cell when clicked by a user
function toggleCell(){
        $('td').click(function () {
            let color = $('#colorPicker').val();
            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            }else {
                $(this).attr('style', 'background-color:' + color);
            }
        })
}




