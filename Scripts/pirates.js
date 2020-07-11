//let pirates = [2, 0, 4, 3, 5, 2];

function result(pirates) {
    document.getElementById('solution').innerHTML = 'Pirate Solution:' + answer(pirates);

}

function answer(pirates) {
    let previousPirates = [];
    let lastPirate = 0;
    clearPirates();
    for (var i = 0; i < pirates.length; i++) {
        lastPirate = pirates[lastPirate];
        if (previousPirates.includes(lastPirate)) {
            for (var p = 0; p < previousPirates.length; p++) {
                colorPirates(previousPirates[p]);
            }
            return previousPirates.length;// - previousPirates.indexOf(lastPirate);
        }
        previousPirates.push(lastPirate);

    }
    return pirates.length;
}

function colorPirates(index) {
    switch (index) {
        case 0:
            document.getElementById('img1').src = 'Images/Pirate1_color.png';
            break;
        case 1:
            document.getElementById('img2').src = 'Images/Pirate2_color.png';
            break;
        case 2:
            document.getElementById('img3').src = 'Images/Pirate3_color.png';
            break;
        case 3:
            document.getElementById('img4').src = 'Images/Pirate4_color.png';
            break;
        case 4:
            document.getElementById('img5').src = 'Images/Pirate5_color.png';
            break;
        case 5:
            document.getElementById('img6').src = 'Images/Pirate6_color.png';
            break;
    }

}

function clearPirates() {
    document.getElementById('img1').src = 'Images/Pirate1.png';
    document.getElementById('img2').src = 'Images/Pirate2.png';
    document.getElementById('img3').src = 'Images/Pirate3.png';
    document.getElementById('img4').src = 'Images/Pirate4.png';
    document.getElementById('img5').src = 'Images/Pirate5.png';
    document.getElementById('img6').src = 'Images/Pirate6.png';
}

