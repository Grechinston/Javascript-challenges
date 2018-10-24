

var jobCenter = function(job, firstName) {
        switch(job){

            case 'Web developer':
            return firstName + 'este un web developer inascut';

            case 'Printer':
            return firstName + 'Printeaza diferite chestii';

            case 'Astrolog':
            return firstName + 'Se uita la stele  in fie care seara';
            
            default:
            return firstName + 'Fumeaza iarba toata ziua';
        }

}

console.log(jobCenter('Web developer', 'Grecu'));
