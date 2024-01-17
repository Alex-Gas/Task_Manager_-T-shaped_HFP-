
var draggable;
var corkboard;
    
var isDragging;
var offsetX;
var offsetY;

function boardSetup(){
    corkboard = document.querySelector('#corkboard');
    corkboard.addEventListener('mousedown', handleMouseDown);
}

function handleMouseDown(event) {
    if (event.target.classList.contains('boarditem')) {
        const draggable = event.target;
        const offsetX = event.offsetX + 50;
        const offsetY = event.offsetY + 100;
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        function handleMouseMove(event) {
            const x = event.clientX - offsetX - corkboard.offsetLeft;
            const y = event.clientY - offsetY - corkboard.offsetTop;
            
            const maxX = corkboard.clientWidth - draggable.clientWidth;
            const maxY = corkboard.clientHeight - draggable.clientHeight;
            const boundedX = Math.max(0, Math.min(x, maxX));
            const boundedY = Math.max(0, Math.min(y, maxY));

            draggable.style.left = boundedX + "px";
            draggable.style.top = boundedY + "px";
        }
        
        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }
}

function spawnNote(x){
    const item = document.createElement('div');
    const deletebutton = document.createElement('a');
    const X = document.createTextNode("X");
    let text;

    switch(x) {
        case "note":
            text = document.createTextNode("Sticky Note");
            break;
        case "list":
            text = document.createTextNode("List");
            break;
        default:
    } 

    deletebutton.className = 'deletebutton';
    item.className = 'boarditem';

    deletebutton.addEventListener('click', (event) => {
        event.preventDefault();
        const parent = event.target.closest('.boarditem');
        parent.remove();
    })

    deletebutton.appendChild(X);
    item.appendChild(deletebutton);
    item.appendChild(text);
    document.getElementById('corkboard').appendChild(item);
}

