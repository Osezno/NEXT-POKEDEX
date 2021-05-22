const animations = {
    hovers: {
        grow: { transform: 'scale(1.1)' }
    },
    //FADES
    '@keyframes fadeUp': {
        "from": {
            opacity: 0,
            transform: 'translateY(-100%)',
        },
        "to": {
            opacity: 1
        }
    },

    '@keyframes fadeDown': {
        "from": {
            opacity: 0,
            transform: 'translateY(100%)',
        },
        "to": {
            opacity: 1
        }
    },
    '@keyframes fadeLeft': {
        "from": {
            opacity: 0,
            transform: 'translateX(-100%)',
        },
        "to": {
            opacity: 1,
            transform: 'rotate(360deg)'
        }
    },
    '@keyframes fadeRigth': {
        "0% ": {
            opacity: 0,
            transform: 'translateX(100%)',
        },
        "100% ": {
            opacity: 1
        }
    },
    '@keyframes fadeIn': {
        "0% ": {
            opacity: 0
        },
        "100% ": {
            transform: 1
        }
    },
    '@keyframes fadeOut': {
        "0% ": {
            opacity: 1
        },
        "100% ": {
            transform: 0
        }
    },
    //GENERAL
    '@keyframes blink': {
        "from": {
            transform: 'rotate(0deg)'
        },
        "to": {
            transform: 'rotate(360deg)'
        }
    },
    '@keyframes spin': {
        "from": {
            transform: 'rotate(0deg)'
        },
        "to": {
            transform: 'rotate(360deg)'
        }
    },
    //GLOE
    '@keyframes glow': {
        "from": {
          boxShadow: "0 0 10px -3px #61f8ff"
        },
        "to": {
          boxShadow: "0 0 20px 3px #61f8ff"
        }
      }
};

export default animations;