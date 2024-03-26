var type = document.getElementById('type');

var typewriter = new Typewriter(type, {
    loop: true
});

typewriter.typeString('Computer Engineering Student!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Robotics Enthusiast')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Software Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('UI/UX Designer')
    .pauseFor(2500)
    .deleteAll()
    .start();